import { FC } from 'react';
import { Dumbbell } from './Icons/Dumbbell';

const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
];

export const Header: FC = () => {
    return (
        <header className="bg-background">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-secondary py-6 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">WorkoutTrack</span>
                            <Dumbbell className="h-10 w-auto fill-secondary" />
                        </a>
                        <div className="ml-10 hidden space-x-8 lg:block">
                            {navigation.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-secondary hover:text-secondary-light"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
                    {navigation.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-white hover:text-indigo-50"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};
