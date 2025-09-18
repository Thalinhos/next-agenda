import { PrismaClient } from "../../../../../../generated/prisma/client.js";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(request: any, { params }: any) {
  const paramsValue = await params;
  const postId = Number(paramsValue.postId);

  if (!postId) {
    return NextResponse.json({ errorMessage: "Valores precisam ser inseridos." }, { status: 400 });
  }
  try {
    const exists = await prisma.event.findUnique({ where: { id: postId, active: true } });
    if (!exists) {
      return NextResponse.json({ errorMessage: "Evento inexistente. Falha ao excluir." }, { status: 404 });
    }
    await prisma.event.update({ where: { id: postId }, data: { active: false, updatedAt: new Date() } });
    return NextResponse.json({ message: "Evento excluído com sucesso!" });
  } catch (error) {
    return NextResponse.json({ errorMessage: "Falha ao excluir: " + error }, { status: 404 });
  } finally {
    await prisma.$disconnect();
  }
}