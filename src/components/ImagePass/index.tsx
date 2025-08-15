import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import ImageXP from "../../assets/XP.jpg"
import ImageArsenal from "../../assets/projetoArsenal.jpg"
import ImageBloke from "../../assets/projetoBloke.jpg"
import ImageCopa from "../../assets/fotoCopa.jpg"
import ImageStay from "../../assets/stay.png"
import ImagePH from "../../assets/PHImage.jpg"
import ImageJornada from "../../assets/Jornada.jpg"
import ImageGR from "../../assets/fotoGrupo.jpg"
import ImageMellow from "../../assets/fotoMellow.jpg"

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

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
            }
        }

        updateWidth()
        window.addEventListener('resize', updateWidth)

        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, []);

    useEffect(() => {
        const carouselObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setCarouselVisible(true);
            }
        }, {
            root: null,
            rootMargin: '200px',
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
            rootMargin: '100px',
            threshold: 0.1
        });

        document.querySelectorAll('.carousel-image-container').forEach(container => {
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
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            className="px-2 h-full flex items-center carousel-image-container"
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            data-id={index}
                        >
                            {carouselVisible && visibleImages.has(index) ? (
                                <img
                                    className="h-[200px] sm:h-[250px] md:h-[300px] w-[250px] sm:w-[320px] md:w-[400px] object-cover rounded-lg pointer-events-none opacity-40 hover:opacity-60 transition-opacity duration-300"
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