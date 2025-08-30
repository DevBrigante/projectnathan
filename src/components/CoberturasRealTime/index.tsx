import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

import Chango from "../../assets/videos_convertidos/Chango-convertido.mp4"
import KingsLeague from "../../assets/videos_convertidos/KingsLeague-convertido.mp4"
import IsaMatte from "../../assets/videos_convertidos/EventoIsaMatte-convertido.mp4"
import BaileMackenzie from "../../assets/videos_convertidos/BaileMackenzie-convertido.mp4"
import EventoBoss from "../../assets/videos_convertidos/EventoBoss-convertido.mp4"
import EventoCheiro from "../../assets/videos_convertidos/EventoCheiro-convertido.mp4"

type GridItem = {
    id: string,
    type: 'video',
    src: string,
    title: string,
    client: string
}

const gridItems: GridItem[] = [
    { id: 'chango', type: 'video', src: Chango, title: 'Evento Casa Chango', client: 'Cliente Bey Produções' },
    { id: 'kingsleague', type: 'video', src: KingsLeague, title: 'Bastidores Kings League', client: 'Cliente Salv Films' },
    { id: 'isamatte', type: 'video', src: IsaMatte, title: 'Evento Isa Matte', client: 'Cliente Bey Produções' },
    { id: 'bailemackenzie', type: 'video', src: BaileMackenzie, title: 'Baile de Formatura Mackenzie', client: 'Cliente RUB Formaturas' },
    { id: 'eventoboss', type: 'video', src: EventoBoss, title: 'Evento Boss', client: 'Cliente Agência UFA' },
    { id: 'eventocheiro', type: 'video', src: EventoCheiro, title: 'Evento Cheiro de Chuva', client: 'Cliente Grupo RUB' },
]

export const CoberturaRealTime = () => {
    const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target as HTMLVideoElement;
                if (entry.isIntersecting) {
                    video.play().catch(e => console.log("Erro ao reproduzir vídeo:", e));
                } else {
                    video.pause();
                }
            });
        }, {
            root: null,
            rootMargin: '50px',
            threshold: 0.3
        });


        const timeoutId = setTimeout(() => {
            videoRefs.current.forEach(video => {
                if (video) observer.observe(video);
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    const handleVideoRef = (id: string, el: HTMLVideoElement | null) => {
        if (el) {
            videoRefs.current.set(id, el);
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target as HTMLVideoElement;
                    if (entry.isIntersecting) {
                        video.play().catch(e => console.log("Erro ao reproduzir vídeo:", e));
                    } else {
                        video.pause();
                    }
                });
            }, {
                root: null,
                rootMargin: '50px',
                threshold: 0.3
            });
            observer.observe(el);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-20 sm:mt-30 md:mt-40 mb-6 sm:mb-8 md:mb-10 text-white coberturas-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">COBERTURAS REAL TIME</h2>
            <motion.div
                className="mt-6 sm:mt-8 md:mt-10 grid mx-auto w-full gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 px-2 overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {gridItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="flex flex-col items-center"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    >
                        <div className="mb-2 sm:mb-3 mt-4 sm:mt-6 text-center text-lg sm:text-xl md:text-[25px] tracking-widest">
                            <p>{item.title}</p>
                            <p className="text-sm sm:text-base md:text-[18px] text-gray-300">{item.client}</p>
                        </div>
                        <div className="w-130 h-150 mb-10 aspect-square rounded-lg overflow-hidden flex items-center justify-center bg-black shadow-lg">
                            <video
                                ref={(el) => handleVideoRef(item.id, el)}
                                src={item.src}
                                className="w-full h-full object-cover"
                                preload="metadata"
                                muted
                                loop
                                playsInline
                                onLoadStart={() => console.log(`Carregando vídeo: ${item.title}`)}
                                onError={(e) => console.error(`Erro ao carregar vídeo ${item.title}:`, e)}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}