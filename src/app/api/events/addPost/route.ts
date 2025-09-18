import { PrismaClient } from "../../../../../generated/prisma/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: { json: () => PromiseLike<{ descricao: any; data: any; hora: any; }> | { descricao: any; data: any; hora: any; }; }) {
  const { descricao, data, hora } = await request.json();
  if (!descricao || !data || !hora) {
    return NextResponse.json({ errorMessage: "Valores precisam ser inseridos." }, { status: 400 });
  }
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!dateRegex.test(data)) {
    return NextResponse.json({ errorMessage: "Data deve estar no formato DD/MM/AAAA." }, { status: 400 });
  }
  const hourRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!hourRegex.test(hora)) {
    return NextResponse.json({ errorMessage: "Hora deve estar no formato HH:MM (24h)." }, { status: 400 });
  }
  try {
    await prisma.event.create({
      data: { descricao, data, hora, createdAt: new Date(), updatedAt: new Date() }
    });
    return NextResponse.json({ message: "Evento inserido com sucesso!" });
  } catch (error) {
    return NextResponse.json({ errorMessage: "Erro ao inserir valores. Verifique se título já fora inserido antes"}, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}