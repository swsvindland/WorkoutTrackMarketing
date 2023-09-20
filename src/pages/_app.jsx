import '@/styles/tailwind.css';
import 'focus-visible';
import { Oswald } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const oswald = Oswald({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={oswald.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
