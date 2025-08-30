import { useNavigate } from "react-router";
import { useEffect } from 'react'
import { Footer } from '../../components/Footer'
import GuaranaLogo from '../../assets/logos/guaranaLogo.png'
import BetNacionalLogo from '../../assets/logos/betNacionalLogo.png'
import CimedLogo from '../../assets/logos/cimedLogo.png'
import BrahmaLogo from '../../assets/logos/brahmaLogo.png'
import ItauLogo from '../../assets/logos/itauLogo.png'
import MastercardLogo from '../../assets/logos/mastercardLogo.png'
import VisaLogo from '../../assets/logos/visaLogo.png'
import Copa22Video from '../../assets/videos_convertidos/videoCopa-convertido.mp4'
import AcaoCimedVideo from '../../assets/videos_convertidos/copa-do-mundo-2022-convertido.mp4'
import AcaoCimedCaptacaoVideo from '../../assets/videos_convertidos/festa-de-despedida-mva-convertido.mp4'


export function CopaProject() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackToHome = () => {
        navigate('/', { replace: true });
        setTimeout(() => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="h-full w-full max-w-full bg-zinc-900 text-white flex flex-col">
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <button
                    onClick={handleBackToHome}
                    className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-full text-white hover:bg-zinc-700/80 hover:border-zinc-600/50 transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Voltar para a página inicial do projeto"
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    <span className="text-xs sm:text-sm cursor-pointer font-medium hidden sm:block transition-opacity duration-300">
                        Clique para voltar a tela principal
                    </span>
                </button>
            </div>
            <div className="max-w-6xl mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-20 sm:mt-28 md:mt-34 flex flex-col sm:flex-row">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-0">COPA DO MUNDO DE 2022</h1>
                <p className="text-white text-base sm:text-lg md:text-xl text-balance sm:pl-5">+50 milhões de contas alcançadas e +300 mil de seguidores durante a copa do mundo de 2022</p>
            </div>
            <div className="max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[20%] mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-4 sm:mt-6 flex flex-col">
                <p className="text-balance text-xs sm:text-sm">Atuação como Social Media e Coordenador de entregas publicitárias</p>
            </div>
            <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-8 sm:mt-12 md:mt-15 flex flex-col">
                <h2 className="text-lg sm:text-xl">CLIENTES</h2>
                <div className="flex flex-wrap sm:flex-row mt-3 sm:mt-5 gap-3 sm:gap-5">
                    <img
                        src={BetNacionalLogo}
                        alt="BetNacional Logo"
                        className="max-w-full max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-10 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <img
                        src={CimedLogo}
                        alt="Cimed Logo"
                        className="max-w-full max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-10 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <img
                        src={GuaranaLogo}
                        alt="Guaraná Logo"
                        className="max-w-full max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-10 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <img
                        src={BrahmaLogo}
                        alt="Brahma Logo"
                        className="max-w-full max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-10 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <img
                        src={ItauLogo}
                        alt="Itau Logo"
                        className="max-w-full max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-10 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <img
                        src={MastercardLogo}
                        alt="Mastercard Logo"
                        className="max-w-full max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-10 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <img
                        src={VisaLogo}
                        alt="Visa Logo"
                        className="max-w-full max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-10 object-contain hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
            <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col mb-8 sm:mb-12 md:mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                        <video
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
                                imageRendering: 'crisp-edges'
                            }}
                            onLoadStart={(e) => {
                                const video = e.target as HTMLVideoElement;
                                video.playbackRate = 1;
                            }}
                            onCanPlay={(e) => {
                                const video = e.target as HTMLVideoElement;
                                video.style.opacity = '1';
                            }}
                        >
                            <source src={Copa22Video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                        <video
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
                                imageRendering: 'crisp-edges'
                            }}
                            onLoadStart={(e) => {
                                const video = e.target as HTMLVideoElement;
                                video.playbackRate = 1;
                            }}
                            onCanPlay={(e) => {
                                const video = e.target as HTMLVideoElement;
                                video.style.opacity = '1';
                            }}
                        >
                            <source src={AcaoCimedVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                        <video
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
                                imageRendering: 'crisp-edges'
                            }}
                            onLoadStart={(e) => {
                                const video = e.target as HTMLVideoElement;
                                video.playbackRate = 1;
                            }}
                            onCanPlay={(e) => {
                                const video = e.target as HTMLVideoElement;
                                video.style.opacity = '1';
                            }}
                        >
                            <source src={AcaoCimedCaptacaoVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}