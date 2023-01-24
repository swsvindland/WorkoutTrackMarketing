import '@/styles/tailwind.css';
import 'focus-visible';
import { Oswald } from '@next/font/google';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { firebaseConfig } from '@/utils/firebase';
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const oswald = Oswald({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [tracking, setTracking] = useState(null);

  useEffect(() => {
    if (isSupported() === false) return;
    setTracking(getAnalytics());

    const handleRouteChange = (url) => {
      if (!tracking) {
        return;
      }

      tracking.logEvent('page_view', {
        page_location: url,
        page_title: document?.title,
      });
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, setTracking, tracking]);

  return (
    <div className={oswald.className}>
      <Component {...pageProps} />
    </div>
  );
}
