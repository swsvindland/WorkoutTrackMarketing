import '@/styles/tailwind.css';
import 'focus-visible';
import { Analytics } from '@vercel/analytics/react';
import {Oswald} from "next/font/google";

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
