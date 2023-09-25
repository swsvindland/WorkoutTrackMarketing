import Head from 'next/head';
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>WorkoutTrack - Contact</title>
                <meta
                    name="description"
                    content="Are you looking to get in shape, lose weight, and improve your overall health and well-being? Look no further than WorkoutTrack, the ultimate workout and calorie tracking app"
                />
            </Head>
            <Header />
            <main className="w-full flex justify-center">
                <div className="container">
                <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}
