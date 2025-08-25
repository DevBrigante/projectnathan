import { useNavigate } from "react-router";
import { useEffect } from 'react'
import { Footer } from '../../components/Footer'
import MellowVideo1 from '../../assets/videos/08.10.mp4'
import MellowVideo2 from '../../assets/videos/Vídeo-Extra1.mp4'
import MellowVideo3 from '../../assets/videos/copy-2d3392c5-33cd-4346-8cf9-edd5af855521_GAhIZAlw.mp4'
import MellowVideo4 from '../../assets/videos/copy_47A58CCE-C400-44F3-B6AD-9D119C5B9471.mp4'
import MellowVideo5 from '../../assets/videos/copy_AFD8021F-834B-4562-9BCD-14795B9D01AC.mp4'
import MellowVideo6 from '../../assets/videos/videos-discos-1_nXg5EMrc.mp4'

export function MellowProject() {
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
            <div className="absolute top-6 left-6 z-10">
                <button
                    onClick={handleBackToHome}
                    className="group flex items-center gap-3 px-4 py-2 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-full text-white hover:bg-zinc-700/80 hover:border-zinc-600/50 transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Voltar para a página inicial do projeto"
                >
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 cursor-pointer"
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
                    <span className="text-sm cursor-pointer font-medium hidden sm:block transition-opacity duration-300">
                        Clique para voltar a tela principal
                    </span>
                </button>
            </div>
            <div className="max-w-6xl mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-20 sm:mt-28 md:mt-34 flex flex-col">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">MELLOW</h1>
                <p className="mt-4 sm:mt-6 text-balance text-xs sm:text-sm max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[20%]">Atuação como Social Media, Produção de Conteúdo e Cobertura mobile real time</p>
            </div>
            <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-8 sm:mt-12 md:mt-16 lg:mt-10 flex flex-col mb-8 sm:mb-12 md:mb-16">
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
                            <source src={MellowVideo1} type="video/mp4" />
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
                            <source src={MellowVideo2} type="video/mp4" />
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
                            <source src={MellowVideo3} type="video/mp4" />
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
                            <source src={MellowVideo4} type="video/mp4" />
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
                            <source src={MellowVideo5} type="video/mp4" />
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
                            <source src={MellowVideo6} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}