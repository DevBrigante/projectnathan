import { useEffect, useState, useCallback } from "react";
import { LinkMenu } from "../LinkMenu";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Otimizar scroll listener com throttle
    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    }, [isScrolled]);

    useEffect(() => {
        // Throttle para reduzir chamadas
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });

        return () => window.removeEventListener('scroll', throttledScroll);
    }, [handleScroll]);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <div className={`w-full flex items-center justify-center h-20 bg-yellow fixed top-0 left-0 z-50 transition-all duration-200 ${isScrolled ? 'shadow-md' : ''}`}>
            <ul className="hidden md:flex w-full max-w-7xl items-center px-5 justify-between">
                <li><LinkMenu href="#home">Nathan de Assis</LinkMenu></li>
                <li><LinkMenu href="#servicos">Serviços</LinkMenu></li>
                <li><LinkMenu href="#portfolio">Portfólio</LinkMenu></li>
                <li><LinkMenu href="#contato">Contato</LinkMenu></li>
            </ul>

            <div className="md:hidden w-full max-w-7xl flex items-center justify-between px-5">
                <div>
                    <LinkMenu href="#home">Nathan de Assis</LinkMenu>
                </div>
                
                <button
                    onClick={toggleMobileMenu}
                    className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                    aria-label="Menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-20 bg-yellow z-40">
                    <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                        <li onClick={closeMobileMenu}><LinkMenu href="#servicos">Serviços</LinkMenu></li>
                        <li onClick={closeMobileMenu}><LinkMenu href="#portfolio">Portfólio</LinkMenu></li>
                        <li onClick={closeMobileMenu}><LinkMenu href="#contato">Contato</LinkMenu></li>
                    </ul>
                </div>
            )}
        </div>
    )
}