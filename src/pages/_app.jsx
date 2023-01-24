import '@/styles/tailwind.css';
import 'focus-visible';
import { Oswald } from '@next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ReactGA from 'react-ga';

const oswald = Oswald({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('G-6Y0BKEDD3H');
  }, []);

  useEffect(() => {
    ReactGA.pageview(router.pathname);
  }, [router.pathname]);

  return (
    <div className={oswald.className}>
      <Component {...pageProps} />
    </div>
  );
}
