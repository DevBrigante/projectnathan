import { Link } from "react-router";

import imageXP from "../../assets/XP.jpg";
import imageArsenal from "../../assets/projetoArsenal.jpg";
import imageBloke from "../../assets/projetoBloke.jpg";
import acaoVideo from "../../assets/GuaranaAntartica.mp4";
import guaranaVideo from "../../assets/videoCopa.mp4";
import imageMellow from "../../assets/fotoMellow.jpg";

type GridItem = {
    id: string;
    type: 'image' | 'video';
    src: string;
    alt: string;
    link: string;
};

const gridItems: GridItem[] = [
    { id: 'xp', type: 'image', src: imageXP, alt: 'Projeto XP', link: '/projeto-xp' },
    { id: 'copa-feminina', type: 'video', src: acaoVideo, alt: 'Copa Feminina 2023', link: '/projeto-copaFeminina2023' },
    { id: 'copa-2022', type: 'video', src: guaranaVideo, alt: 'Copa 2022', link: '/projeto-copa2022' },
    { id: 'arsenal', type: 'image', src: imageArsenal, alt: 'Projeto Arsenal', link: '/projeto-arsenal' },
    { id: 'bloke', type: 'image', src: imageBloke, alt: 'Projeto Bloke', link: '/projeto-blokebaile' },
    { id: 'mellow', type: 'image', src: imageMellow, alt: 'Projeto Copa', link: '/projeto-mellow' },
]

export function GridImages() {
    return (
        <section className="w-full flex justify-center mt-[30px] overflow-x-hidden">
            <div className="grid w-full max-w-8xl gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-6 md:px-8 lg:px-2 overflow-hidden">
                {gridItems.map((item) => (
                    <div key={item.id} className="grid-item">
                        <Link to={item.link} className="block group rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 opacity-70 hover:opacity-100 bg-black/80">
                            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-70 overflow-hidden rounded-lg bg-black">
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        preload="metadata"
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}