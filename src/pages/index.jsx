import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { analytics } from '@/utils/firebase';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url) => {
        analytics.setCurrentScreen(url);
        analytics.logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);
      //For First Page
      logEvent(window.location.pathname);

      //Remove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, [routers.events]);

  return (
    <>
      <Head>
        <title>WorkoutTrack - Workout and Count Calories</title>
        <meta
          name="description"
          content="Are you looking to get in shape, lose weight, and improve your overall health and well-being? Look no further than WorkoutTrack, the ultimate workout and calorie tracking app"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
