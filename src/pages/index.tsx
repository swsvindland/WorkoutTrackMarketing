import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { Features } from '../components/Features';

export default function Home() {
    return (
        <>
            <Head>
                <title>Pocket - Invest at the perfect time.</title>
                <meta
                    name="description"
                    content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
                />
            </Head>
            <Header />
            <main>
                <Hero />
                <Features />
            </main>
        </>
    );
}
