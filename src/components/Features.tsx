import { FC, useState } from 'react';
import Image from 'next/image';
import Workout from '../images/screens/workout.png';
import Eat from '../images/screens/eat.png';
import Supplement from '../images/screens/supplements.png';
import Body from '../images/screens/body.png';

enum Feature {
    Workout,
    Eat,
    Supplements,
    Body,
}

const FeatureImage = (feature: Feature) => {
    switch (feature) {
        case Feature.Workout:
            return Workout;
        case Feature.Eat:
            return Eat;
        case Feature.Supplements:
            return Supplement;
        case Feature.Body:
            return Body;
    }
};

export const Features: FC = () => {
    const [feature, setFeature] = useState<Feature>(Feature.Workout);

    return (
        <section className="bg-primary-dark">
            <div className="flex flex-row justify-between">
                <div className="m-16 hidden flex-1 sm:block">
                    <Image
                        className="w-full lg:h-full lg:w-auto lg:max-w-none"
                        src={FeatureImage(feature)}
                        height={500}
                        alt=""
                    />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                    <FeatureCard
                        name="Track Workouts"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda deserunt eum iure nesciunt numquam odit perferendis temporibus."
                        feature={Feature.Workout}
                        setFeature={setFeature}
                    />
                    <FeatureCard
                        name="Track Nutrition"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda deserunt eum iure nesciunt numquam odit perferendis temporibus."
                        feature={Feature.Eat}
                        setFeature={setFeature}
                    />
                    <FeatureCard
                        name="Track Supplements"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda deserunt eum iure nesciunt numquam odit perferendis temporibus."
                        feature={Feature.Supplements}
                        setFeature={setFeature}
                    />
                    <FeatureCard
                        name="Track Body"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda deserunt eum iure nesciunt numquam odit perferendis temporibus."
                        feature={Feature.Body}
                        setFeature={setFeature}
                    />
                </div>
            </div>
        </section>
    );
};

interface IFeatureCardProps {
    name: string;
    description: string;
    feature: Feature;
    setFeature: (feature: Feature) => void;
}

export const FeatureCard: FC<IFeatureCardProps> = ({
    name,
    description,
    feature,
    setFeature,
}) => {
    return (
        <button
            className="m-4 w-96 bg-card p-6 hover:bg-background"
            onClick={() => setFeature(feature)}
        >
            <h3 className="text-lg text-secondary">{name}</h3>
            <p className="text-sm text-ternary">{description}</p>
        </button>
    );
};
