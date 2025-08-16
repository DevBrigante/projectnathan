import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import ImageProjetoArsenal from '../../assets/ProjetosPessoais/Projeto Arsenal_ o Clube de todos - Produção e Modelo Grupal.jpg'
import ImageProjetoArsenal2 from '../../assets/ProjetosPessoais/Projeto Arsenal_ o Clube de todos - Produção e Modelo.jpg'
import ProjetoArsenalVideo from '../../assets/ProjetosPessoais/projeto-arsenal-o-clube-de-todos-producao-direcao-criativa-captacao_.mp4'

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
        <div className="h-screen w-full max-w-full bg-zinc-900 text-white flex flex-col">
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
            <div className="max-w-6xl mx-30 mt-34 flex flex-col">
                <h1 className="text-white text-4xl font-bold">PROJETOS PESSOAIS</h1>
                <p className="mt-2 text-white text-xl w-[80%] text-balanc">Aqui um espaço onde crio além da demanda, crio por inspiração e amor a arte.</p>
            </div>
             <div className="max-w-6xl mx-30 mt-34 flex flex-row">
                <h2 className="text-white text-4xl font-bold">Projeto Arsenal - O clube de todos</h2>
            </div>
            <div className="mx-30 mt-3 flex flex-col">
                <p className=" text-sm">Produção, Direção Criativa, Captação e Edição</p>
            </div>
            <div className="max-w-full mx-30 mt-12 sm:mt-16 lg:mt-8 flex flex-col mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    <div className="group overflow-hidden rounded-lg bg-zinc-800 aspect-video hover:scale-105 transition-transform duration-300">
                        <img
                            src={ImageProjetoArsenal}
                            alt="Jogos pan americano 2023"
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
                            alt="Imagem havaianas"
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
        </div>
    )
}