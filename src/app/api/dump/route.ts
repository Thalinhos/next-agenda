// app/api/dump/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    const events = await prisma.event.findMany();

    const escape = (str: string) => str.replace(/'/g, "''");

    let sql = 'BEGIN TRANSACTION;\n\n';

    for (const u of users) {
      sql += `INSERT INTO User (id, nome, senha) VALUES (${u.id}, '${escape(u.nome)}', '${escape(u.senha)}');\n`;
    }

    sql += '\n';

    for (const e of events) {
      sql += `INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (`;
      sql += `${e.id}, '${escape(e.descricao)}', '${escape(e.data)}', `;
      sql += e.hora ? `'${escape(e.hora)}'` : 'NULL';
      sql += `, ${e.active ? 1 : 0}, '${e.createdAt.toISOString()}', '${e.updatedAt.toISOString()}', `;
      sql += e.css_bg_color ? `'${escape(e.css_bg_color)}'` : 'NULL';
      sql += `);\n`;
    }

    sql += '\nCOMMIT;';

    return new NextResponse(sql, {
      headers: {
        'Content-Type': 'application/sql',
        'Content-Disposition': 'attachment; filename=dump.sql',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao gerar dump' }, { status: 500 });
  }
}
