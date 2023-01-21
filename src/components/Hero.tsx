import { FC } from 'react';
import { AppleAppStoreLink } from './AppleAppStoreLink';
import { GooglePlayLink } from './GooglePlayLink';
import Home from '../images/screens/home.png';
import Image from 'next/image';

export const Hero: FC = () => {
    return (
        <section className="bg-background pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                        <div className="lg:py-24">
                            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl lg:mt-6 xl:text-6xl">
                                WorkoutTrack
                            </h1>
                            <h2 className="text-2xl text-ternary">
                                The best way to track your workouts and calories
                            </h2>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui Lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat.
                            </p>
                            <div className="flex flex-col md:flex-row">
                                <AppleAppStoreLink />
                                <GooglePlayLink />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                        <Image
                            className="w-full lg:h-full lg:w-auto lg:max-w-none"
                            src={Home}
                            height={500}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
