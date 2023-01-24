import '@/styles/tailwind.css';
import 'focus-visible';
import { Oswald } from '@next/font/google';
import { useEffect } from 'react';
import { analytics } from '@/utils/firebase';

const oswald = Oswald({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics();
    }
  }, []);

  return (
    <div className={oswald.className}>
      <Component {...pageProps} />
    </div>
  );
}
