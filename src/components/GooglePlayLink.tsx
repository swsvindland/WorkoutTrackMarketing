import { FC } from 'react';
import Image from 'next/image';
import Badge from '../images/google-play-badge.png';

export const GooglePlayLink: FC = () => {
    return (
        <a href="https://play.google.com/store/apps/details?id=com.svindland.fitness">
            <Image
                src={Badge}
                height={200}
                width={200}
                alt="Download from google play"
            />
        </a>
    );
};
