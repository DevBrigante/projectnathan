import type { ReactNode } from 'react';

interface LinkMenuProps {
    href: string;
    children: ReactNode;
}

export const LinkMenu = ({ href, children }: LinkMenuProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!href || href.startsWith('http')) return;

        e.preventDefault();

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = window.innerWidth >= 768 ? 80 : 64;
            const elementPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className="relative inline-block no-underline font-semibold text-base md:text-lg group transition-colors duration-200 hover:text-gray-700"
        >
            {children}
            <span className="absolute left-0 -bottom-[1px] w-[90%] h-[1px] bg-black scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left block pointer-events-none" />
        </a>
    );
};
