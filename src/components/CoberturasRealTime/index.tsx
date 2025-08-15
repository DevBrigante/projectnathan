import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

import Chango from "../../assets/Chango.mp4"
import KingsLeague from "../../assets/KingsLeague.mp4"
import IsaMatte from "../../assets/EventoIsaMatte.mp4"
import BaileMackenzie from "../../assets/BaileMackenzie.mp4"
import EventoBoss from "../../assets/EventoBoss.mp4"
import EventoCheiro from "../../assets/EventoCheiro.mp4"


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
        <div className="mx-30 mt-40 mb-10 text-white coberturas-section">
            <h2 className="text-6xl font-semibold">COBERTURAS REAL TIME</h2>
            <motion.div
                className="mt-10 grid mx-auto w-full gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 px-2 overflow-hidden"
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
                        <div className="mb-3 mt-6 text-center text-[25px] tracking-widest">
                            <p>{item.title}</p>
                            <p className="text-[18px] text-gray-300">{item.client}</p>
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