import '@/styles/tailwind.css';
import 'focus-visible';
import { Oswald } from '@next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/utils/firebase';

const oswald = Oswald({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    try {
      const app = initializeApp(firebaseConfig);
      isSupported().then((yes) => (yes ? getAnalytics(app) : null));
    } catch (err) {
      console.error('Firebase initialization error', err.stack);
    }
  }, []);

  return (
    <div className={oswald.className}>
      <Component {...pageProps} />
    </div>
  );
}
