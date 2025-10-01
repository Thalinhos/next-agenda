import { PrismaClient } from "../../../../../../generated/prisma/client.js";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: { json: () => Promise<{ color: any }>; }, { params }: any) {
  try {
    const { color } = await request.json();
    const paramsValue = await params;
    const dateValue = paramsValue.dateValue;

    if (!color) {
      return NextResponse.json(
        { errorMessage: "Nenhuma cor selecionada" },
        { status: 400 }
      );
    }

    // Substitui '-' por '/' na data
    const parsedData = dateValue.replaceAll('-', '/');
    console.log(parsedData)
    // Busca eventos com a data informada
    const events = await prisma.event.findMany({ where: { data: parsedData } });

    if (!events.length) {
      return NextResponse.json(
        { errorMessage: "Data não encontrada no sistema." },
        { status: 400 }
      );
    }

    // Atualiza os eventos
    await prisma.event.updateMany({
      where: { data: parsedData },
      data: { css_bg_color: color, updatedAt: new Date() },
    });

    return NextResponse.json({ message: "Eventos atualizados com sucesso!" });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { errorMessage: "Erro interno do servidor." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
