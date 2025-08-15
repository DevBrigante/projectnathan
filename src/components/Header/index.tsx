import { useEffect, useState } from "react";
import { LinkMenu } from "../LinkMenu";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full flex items-center justify-center h-20 bg-yellow fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <ul className="flex w-full max-w-7xl items-center px-5 justify-between">
                <li><LinkMenu href="#home">Nathan de Assis</LinkMenu></li>
                <li><LinkMenu href="#servicos">Serviços</LinkMenu></li>
                <li><LinkMenu href="#portfolio">Portfólio</LinkMenu></li>
                <li><LinkMenu href="#contato">Contato</LinkMenu></li>
            </ul>
        </div>
    )
}