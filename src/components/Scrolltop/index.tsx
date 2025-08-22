import { useState, useEffect } from 'react';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        setIsClicked(true);

        const scrollStep = -window.scrollY / 25;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
                setTimeout(() => setIsClicked(false), 300);
            }
        }, 20);
    };

    const buttonClasses = `
        fixed bottom-8 left-1 
        w-8 h-8 
        bg-gradient-to-br from-yellow to-amber-400 
        hover:from-amber-400 hover:to-yellow 
        border-0 rounded-full 
        text-black 
        cursor-pointer 
        flex items-center justify-center 
        shadow-lg 
        transition-all duration-300 ease-in-out 
        z-50 
        ${isHovered ? 'shadow-xl -translate-y-1' : ''} 
        ${isClicked ? 'scale-90 shadow-md' : ''} 
        md:bottom-6 md:left-6 md:w-12 md:h-12 
        sm:bottom-4 sm:left-4 sm:w-10 sm:h-10
    `;

    return (
        <>
            {isVisible && (
                <button
                    className={buttonClasses}
                    onClick={scrollToTop}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    aria-label="Voltar ao topo"
                    title="Voltar ao topo"
                >
                    <svg
                        className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-in-out ${isHovered ? '-translate-y-0.5' : ''}`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 4L12 20M12 4L6 10M12 4L18 10"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {isClicked && (
                        <span className="absolute w-full h-full rounded-full animate-ping opacity-30 bg-amber-300"></span>
                    )}
                </button>
            )}
        </>
    );
};