import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { Footer } from '../../components/Footer'
import BlokeBaileVideo1 from '../../assets/BlokeBaile/BlokeVideo1.mp4'
import BlokeBaileImage from '../../assets/projetoBloke.jpg'
import BlokeBaileImage2 from '../../assets/BlokeBaile/BlokeFoto1.jpg'
import BlokeBaileImage3 from '../../assets/BlokeBaile/BlokeFoto2.jpg'
import BlokeBaileVideo2 from '../../assets/BlokeBaile/BlokeVideo2.mp4'
import BlokeBaileVideo3 from '../../assets/BlokeBaile/BlokeVideo3.mp4'

export function BlokeBaile() {
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
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">BLOKE BAILE</h1>
                <p className="mt-2 text-white text-base sm:text-lg md:text-xl w-full sm:w-[90%] md:w-[80%] text-balance">O Bloke Baile é o primeiro baile de camisas de time do Brasil. Criado para celebrar a cultura Blokecore.</p>
                <p className="text-white text-base sm:text-lg md:text-xl sm:pl-5 mt-3">+ 70 mil contas alcançadas em 30 dias de criação no Instagram do evento</p>
                <p className="text-white text-base sm:text-lg md:text-xl sm:pl-5">+ 400 pessoas confirmadas via Sympla</p>
                <p className="text-white text-base sm:text-lg md:text-xl sm:pl-5">+ 5 parceirias fechadas com Influencers</p>
                <p className='mt-4 text-sm sm:text-base'>- Direção Criativa do contéudo editorial</p>
                <p className="text-sm sm:text-base">- Coordenação de Redes Sociais do evento</p>
                <p className="text-sm sm:text-base">- Responsável pelo fechamento de parceriascom Influencers para divulgação do evento</p>
            </div>
            <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-8 sm:mt-12 md:mt-16 flex flex-col mb-8 sm:mb-12 md:mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300">
                        <img
                            src={BlokeBaileImage}
                            alt="Imagem Bloke Baile"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                            style={{
                                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                                imageRendering: 'crisp-edges'
                            }}
                        />
                    </div>
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300">
                        <img
                            src={BlokeBaileImage2}
                            alt="Imagem Bloke Baile2"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                            style={{
                                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                                imageRendering: 'crisp-edges'
                            }}
                        />
                    </div>
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300">
                        <img
                            src={BlokeBaileImage3}
                            alt="Imagem Bloke Baile3"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                            style={{
                                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                                imageRendering: 'crisp-edges'
                            }}
                        />
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
                            <source src={BlokeBaileVideo1} type="video/mp4" />
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
                            <source src={BlokeBaileVideo2} type="video/mp4" />
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
                            <source src={BlokeBaileVideo3} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
