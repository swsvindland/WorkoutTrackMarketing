import { FC } from 'react';
import Image from 'next/image';
import Badge from '../images/apple-app-store-badge.svg';

export const AppleAppStoreLink: FC = () => {
    return (
        <a href="https://apps.apple.com/us/app/workouttrack-calorie-counter/id6443969488">
            <Image
                src={Badge}
                height={150}
                width={150}
                alt="Download from apple app store"
                className="m-3.5 ml-0"
            />
        </a>
    );
};
