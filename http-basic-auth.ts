import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization') ?? '';

  const USERNAME = process.env.BASIC_AUTH_USER;
  const PASSWORD = process.env.BASIC_AUTH_PASSWORD;

  // Se não veio header ou não começa com "Basic "
  if (!authHeader.startsWith('Basic ')) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Remove o "Basic " e tenta decodificar
  const encoded = authHeader.replace('Basic ', '').trim();
  let decoded: string;

  try {
    decoded = Buffer.from(encoded, 'base64').toString();
  } catch {
    return new NextResponse('Bad Request', { status: 400 });
  }

  // decoded deve ser algo como "user:pass"
  const [user, pass] = decoded.split(':');

  if (!user || !pass) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  // Verifica usuário e senha
  if (user !== USERNAME || pass !== PASSWORD) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Passou na autenticação
  return NextResponse.next();
}

export const config = {
  matcher: '/', // aplica para todas as rotas
};
