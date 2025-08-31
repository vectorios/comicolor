// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose'; // 'jose' est une librairie plus moderne et sécurisée pour les JWT

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(request: NextRequest) {
  // 1. Extraire le token du cookie
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // 2. Si l'utilisateur demande une page protégée (commençant par /app)
  if (pathname.startsWith('/app')) {
    // Si pas de token, rediriger vers login
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Si un token existe, le vérifier
    try {
      if (!JWT_SECRET) {
        throw new Error('JWT_SECRET not defined');
      }
      // jwtVerify va lancer une erreur si le token est invalide (expiré, mal formé...)
      await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
      
      // Si la vérification réussit, on laisse la requête continuer
      return NextResponse.next();

    } catch (error) {
      // Si la vérification échoue, le token est invalide. Rediriger vers login.
      console.error('JWT Verification Error:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // 3. Si l'utilisateur demande une page d'authentification (/login, /register) alors qu'il est déjà connecté
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    if (token) {
      try {
        await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        // S'il est valide, l'utilisateur est déjà connecté. Le rediriger vers le dashboard.
        return NextResponse.redirect(new URL('/app/dashboard', request.url));
      } catch (error) {
        // Le token est invalide, on laisse l'utilisateur accéder à la page de login/register
        return NextResponse.next();
      }
    }
  }

  // 4. Pour toutes les autres pages (publiques), on ne fait rien
  return NextResponse.next();
}

// 5. Configurer les chemins sur lesquels le middleware doit s'exécuter
// Cela améliore les performances en n'exécutant pas le middleware sur les fichiers statiques (_next, images, etc.)
export const config = {
  matcher: ['/app/:path*', '/login', '/register'],
};