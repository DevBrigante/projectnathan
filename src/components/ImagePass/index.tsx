import { motion } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import ImageXP from "../../assets/images_convertidas/XP.jpeg"
import ImageArsenal from "../../assets/images_convertidas/projetoArsenal.jpeg"
import ImageBloke from "../../assets/images_convertidas/projetoBloke.jpeg"
import ImageCopa from "../../assets/images_convertidas/fotoCopa.jpeg"
import ImageStay from "../../assets/images_convertidas/stay.jpg"
import ImagePH from "../../assets/images_convertidas/PHImage.jpeg"
import ImageJornada from "../../assets/images_convertidas/Jornada-convertida.jpeg"
import ImageGR from "../../assets/images_convertidas/fotoGrupo-convertida.jpeg"
import ImageMellow from "../../assets/images_convertidas/fotoMellow.jpeg"

interface ImageItem {
    src: string;
    alt: string;
}

const images: ImageItem[] = [
    { src: ImageXP, alt: "Projeto XP" },
    { src: ImageGR, alt: "Foto Grupo" },
    { src: ImageArsenal, alt: "Projeto Arsenal" },
    { src: ImageBloke, alt: "Projeto Bloke" },
    { src: ImagePH, alt: "Projeto PH" },
    { src: ImageJornada, alt: "Projeto Jornada" },
    { src: ImageCopa, alt: "Projeto Copa" },
    { src: ImageMellow, alt: "Projeto Mellow" },
    { src: ImageStay, alt: "Projeto Stay" }
]

export const ImagePass = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
    const [carouselVisible, setCarouselVisible] = useState(false);

    // Otimizar updateWidth com useCallback
    const updateWidth = useCallback(() => {
        if (carousel.current) {
            const newWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
            setWidth(newWidth);
        }
    }, []);

    useEffect(() => {
        updateWidth();
        
        // Throttle resize listener para reduzir TBT
        let ticking = false;
        const throttledResize = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateWidth();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('resize', throttledResize, { passive: true });

        return () => {
            window.removeEventListener('resize', throttledResize);
        };
    }, [updateWidth]);

    useEffect(() => {
        const carouselObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setCarouselVisible(true);
            }
        }, {
            root: null,
            rootMargin: '100px', // Reduzir margem para melhor performance
            threshold: 0.1
        });

        if (carousel.current) {
            carouselObserver.observe(carousel.current);
        }

        return () => {
            carouselObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!carouselVisible) return; // Só executar quando carousel estiver visível

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('data-id');
                if (!id) return;

                const numId = parseInt(id);

                if (entry.isIntersecting) {
                    setVisibleImages(prev => new Set(prev).add(numId));
                }
            });
        }, {
            root: null,
            rootMargin: '50px', // Reduzir margem para melhor performance
            threshold: 0.1
        });

        // Usar querySelector mais específico
        const containers = document.querySelectorAll('.carousel-image-container');
        containers.forEach(container => {
            imageObserver.observe(container);
        });

        return () => {
            imageObserver.disconnect();
        };
    }, [carouselVisible]);

    return (
        <div className="relative my-6 md:my-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
            <h2 className="text-white font-bold pointer-events-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-[2px] md:tracking-[3px] text-center shadow-text px-4">
                PORTFÓLIO
            </h2>
            <motion.div
                ref={carousel}
                className="cursor-grab overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg md:rounded-xl"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="flex h-full"
                    drag={"x"}
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }} // Reduzir duração para melhor TBT
                >
                    {images.map((image, index) => (
                        <motion.div
                            className="px-2 h-full flex items-center carousel-image-container"
                            key={index}
                            whileHover={{ scale: 1.01 }} // Reduzir escala para melhor TBT
                            transition={{ duration: 0.2 }} // Reduzir duração para melhor TBT
                            data-id={index}
                        >
                            {carouselVisible && visibleImages.has(index) ? (
                                <img
                                    className="h-[200px] sm:h-[250px] md:h-[300px] w-[250px] sm:w-[320px] md:w-[400px] object-cover rounded-lg pointer-events-none opacity-40 hover:opacity-60 transition-opacity duration-200" // Reduzir duração para melhor TBT
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="300"
                                />
                            ) : (
                                <div className="h-[200px] sm:h-[250px] md:h-[300px] w-[250px] sm:w-[320px] md:w-[400px] bg-gray-900 rounded-lg flex items-center justify-center">
                                    <div className="animate-pulse w-6 h-6 md:w-8 md:h-8 border-2 border-white border-t-transparent rounded-full"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </div>
    )
}