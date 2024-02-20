import Head from 'next/head';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/App'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Video Flashvolve</title>
        <link rel='icon' href='/favicon.jpg' />
      </Head>

      <App />
    </div>
  );
}
