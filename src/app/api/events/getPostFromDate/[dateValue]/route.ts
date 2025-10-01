
import { PrismaClient } from "../../../../../../generated/prisma/client.js";

import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: any)  {
  const paramsValue = await params;
  const dateValue = await paramsValue.dateValue;
  if (!dateValue) {
    return NextResponse.json({ errorMessage: "Valores precisam ser inseridos." }, { status: 400 });
  }
  const parsedData = dateValue.replaceAll('-', '/');
  try {
    const events = await prisma.event.findMany({ where: { data: parsedData, active: true } });
    if (!events.length) {
      return NextResponse.json({ errorMessage: "Data não encontrada no sistema." }, { status: 400 });
    }
    return NextResponse.json({ message: events });
  } catch (error) {
    return NextResponse.json({ errorMessage: "Erro ao consultar posts." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}