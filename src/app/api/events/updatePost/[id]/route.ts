import { PrismaClient } from "../../../../../../generated/prisma/client.js";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request, { params }: { params: { id: string } }) { 
        const { id } = params;
        const body = await req.json();
    
        if (!body) {
          return NextResponse.json(
            { error: "Campos precisam ser preenchidos" },
            { status: 400 }
          );
        }
    
        try {
            const updatedEvent = await prisma.event.update({
              where: { id: Number(id) },
              data: {
                descricao: body.descricao,
                data: body.data,
                hora: body.hora,
              },
            });
        
    
        return NextResponse.json(
          { message: "Atualizado com sucesso!", event: updatedEvent },
          { status: 200 }
        );
      } catch (error: any) {
        console.error(error);
        return NextResponse.json(
          { error: "Erro ao atualizar cor" },
          { status: 500 }
        );
      }
    }

 