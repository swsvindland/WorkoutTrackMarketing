import { useEffect } from 'react';
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { install, gtag } from 'ga-gtag';
import { FAQs } from '@/components/FAQs';

export default function Home() {
  useEffect(() => {
    install('AW-11043651276');
    gtag('js', new Date());
    gtag('config', 'AW-11043651276');
  }, []);

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
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
