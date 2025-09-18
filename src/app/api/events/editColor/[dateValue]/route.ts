import { PrismaClient } from "../../../../../../generated/prisma/client.js";

import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: { json: () => PromiseLike<{ color: any; }> | { color: any; }; }, { params }: any) {
  const { color } = await request.json();
  const paramsValue = await params;
  const dateValue = paramsValue.dateValue;
  if (!color) {
    return NextResponse.json({ errorMessage: "Nenhuma cor selecionada" }, { status: 400 });
  }
  const parsedData = dateValue.replaceAll('-', '/');
  try {
    const events = await prisma.event.findMany({ where: { data: parsedData } });
    if (!events.length) {
      return NextResponse.json({ errorMessage: "Data não encontrada no sistema." }, { status: 400 });
    }
    await prisma.event.updateMany({
      where: { data: parsedData },
      data: { css_bg_color: color, updatedAt: new Date() }
    });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ errorMessage: "Erro ao consultar posts." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}