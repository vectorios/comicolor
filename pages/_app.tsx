import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// ON NE MET PAS L'IMPORT DE PADDLE ICI

// 1. On crée le composant pour l'initialisation
const PaddleInitializer = () => {
  useEffect(() => {
    // 2. On importe Paddle DYNAMIQUEMENT À L'INTÉRIEUR DU USEEFFECT
    // Cela garantit que l'import n'a lieu QUE dans le navigateur.
    import('@paddle/paddle-js').then(({ Paddle }) => {
      const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
      if (clientToken && Paddle) { // On vérifie que Paddle n'est pas undefined
        Paddle.Initialize({
          token: clientToken,
          environment: 'sandbox',
        });
      } else {
        console.error("Paddle.js failed to load or Client Token is missing.");
      }
    });
  }, []);

  return null; // Ce composant n'affiche rien
};

// 3. On importe notre initialiseur de manière dynamique pour être doublement sûr
const DynamicPaddleInitializer = dynamic(
  () => Promise.resolve(PaddleInitializer),
  { ssr: false }
);

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      {/* 4. On place l'initialiseur à côté de notre application */}
      <DynamicPaddleInitializer />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}