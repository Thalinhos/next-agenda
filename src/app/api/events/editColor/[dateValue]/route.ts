import { PrismaClient } from "../../../../../../generated/prisma/client.js";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request, { params }: any) {
  const body = await request.json();
  const eventId = Number(params.id);

  if (!eventId) {
    return NextResponse.json(
      { errorMessage: "ID do evento inválido." },
      { status: 400 }
    );
  }

  try {
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        descricao: body.descricao,
        data: body.data,
        hora: body.hora,
        active: body.active,
        css_bg_color: body.css_bg_color,
      },
    });

    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (error: any) {
    console.error(error);

    if (error.code === "P2025") {
      // evento não encontrado
      return NextResponse.json(
        { errorMessage: "Evento não encontrado." },
        { status: 404 }
      );
    }

    if (error.code === "P2002") {
      // erro de campo único (descricao duplicada)
      return NextResponse.json(
        { errorMessage: "Já existe um evento com essa descrição." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { errorMessage: "Erro ao atualizar evento." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
