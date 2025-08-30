import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { Footer } from '../../components/Footer'
import ImageProjetoArsenal from '../../assets/images_convertidas/Projeto Arsenal-convertida.jpeg'
import ImageProjetoArsenal2 from '../../assets/images_convertidas/Projeto Arsenal(2)-convertida.jpeg'
import ProjetoArsenalVideo from '../../assets/videos_convertidos/projeto-arsenal-convertido(1).mp4'
import ImageProjetoMar from '../../assets/images_convertidas/fotoGrupo-convertida.jpeg'
import ImageProjetoMar2 from '../../assets/images_convertidas/Projeto do Mar, Marseille -convertida(3).jpeg'
import ImageProjetoMar3 from '../../assets/images_convertidas/Projeto do Mar, Marseille -convertida.jpeg'
import ProjetoVivenciaVideo from '../../assets/videos_convertidos/Projeto Vivências do Futebol - convertido.mp4'
import ProjetoVivenciaVideo2 from '../../assets/videos_convertidos/Projeto Vivências do Futebol _1-convertido.mp4'
import ProjetoVivenciaVideo3 from '../../assets/videos_convertidos/Projeto Vivências do Futebol_2-convertido.mp4'

export function ArsenalProject() {
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
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">PROJETOS PESSOAIS</h1>
                <p className="mt-2 text-white text-base sm:text-lg md:text-xl w-full sm:w-[90%] md:w-[80%] text-balance">Aqui um espaço onde crio além da demanda, crio por inspiração e amor a arte.</p>
            </div>
             <div className="max-w-6xl mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-12 sm:mt-16 md:mt-20 flex flex-col">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Projeto Arsenal - O clube de todos</h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base">Produção, Direção Criativa, Captação e Edição</p>
            </div>

            <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-6 sm:mt-8 flex flex-col mb-8 sm:mb-12 md:mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300">
                        <img
                            src={ImageProjetoArsenal}
                            alt="Imagem do projeto Arsenal"

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
                            src={ImageProjetoArsenal2}
                            alt="Imagem do projeto Arsenal"
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
                            <source src={ProjetoArsenalVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-8 sm:mt-10 md:mt-12 flex flex-col">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Projeto do Mar - Marseille</h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base">Produção, Assistente de direção e Modelagem</p>
            </div>
            <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-6 sm:mt-8 flex flex-col mb-8 sm:mb-12 md:mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300">
                        <img
                            src={ImageProjetoMar}
                            alt="Imagem do projeto Mar"

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
                            src={ImageProjetoMar2}
                            alt="Imagem do projeto Mar"
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
                            src={ImageProjetoMar3}
                            alt="Imagem do projeto Mar"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                            style={{
                                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                                imageRendering: 'crisp-edges'
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-8 sm:mt-10 md:mt-12 flex flex-col">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Projeto vivências do Futebol</h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base">Direção Criativa, Captação e Edição</p>
            </div>
            <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-6 sm:mt-8 flex flex-col mb-8 sm:mb-12 md:mb-16">
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
                            <source src={ProjetoVivenciaVideo} type="video/mp4" />
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
                            <source src={ProjetoVivenciaVideo2} type="video/mp4" />
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
                            <source src={ProjetoVivenciaVideo3} type="video/mp4" />
                        </video>
                    </div> 
                </div>

            </div>
            
            <Footer />
        </div>
    )
}