import { PrismaClient } from '../../../../../generated/prisma/client.js';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const events = await prisma.event.findMany({ where: { active: true } });
    if (!events.length) {
      return NextResponse.json({ errorMessage: "Sem eventos disponíveis." }, { status: 404 });
    }

    events.sort((a, b) => {
      const [d1, m1, y1] = a.data.split('/');
      const [d2, m2, y2] = b.data.split('/');
      //@ts-ignore
      return new Date(`${y2}-${m2}-${d2}`) - new Date(`${y1}-${m1}-${d1}`);
    });
    return NextResponse.json({ message: events });
  } catch (error) {
    return NextResponse.json({ errorMessage: "Erro ao buscar os eventos." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}