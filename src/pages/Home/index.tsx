import { lazy, Suspense } from "react";
import { Header } from "../../components/Header"
import { Typing } from "../../components/Typing"
import { ContactForm } from "../../components/ContactForm"
import { Footer } from "../../components/Footer"
import FotoPerfil from "../../assets/images_convertidas/fotoPerfil-convertida.jpg"

// Lazy loading para componentes pesados
const Accordion = lazy(() => import("../../components/Accordion").then(module => ({ default: module.Accordion })));
const ImagePass = lazy(() => import("../../components/ImagePass").then(module => ({ default: module.ImagePass })));
const GridImages = lazy(() => import("../../components/GridImages").then(module => ({ default: module.GridImages })));
const CoberturaRealTime = lazy(() => import("../../components/CoberturasRealTime").then(module => ({ default: module.CoberturaRealTime })));

// Loading component otimizado
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
  </div>
);

export function Home() {
    return (
        <main>
            <div id="home" className="w-full max-w-full flex flex-col items-center mx-auto bg-yellow pt-24">
                <Header />
                <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 flex text-center flex-col my-5">
                    <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl">This is</p>
                    <p className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl">Nathan de Assis</p>
                </div>
                <div className="w-full flex justify-center px-4">
                    <ul className="flex flex-wrap justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-15 p-2 text-xs sm:text-base md:text-lg lg:text-xl font-semibold">
                        <li className="flex items-center before:content-['•'] before:mr-1">Jornalista</li>
                        <li className="flex items-center before:content-['•'] before:mr-1">Social Media</li>
                        <li className="flex items-center before:content-['•'] before:mr-1">Videomaker Mobile</li>
                        <li className="flex items-center before:content-['•'] before:mr-1">Diretor Criativo</li>
                    </ul>
                </div>
                <div className="mt-5 mb-5 px-4">
                    <img 
                        className="w-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg" 
                        src={FotoPerfil} 
                        style={{ filter: "brightness(1.5)" }} 
                        alt="Nathan face"
                        loading="eager" // Carregamento prioritário para imagem principal
                    />
                </div>
                <Typing />
                <div className="max-w-[670px] mx-auto px-4 sm:px-6">
                    <p className="text-base sm:text-lg p-3 text-center mb-10 sm:mb-15 md:mb-20">
                        "Nascido e criado na Zona Sul de São Paulo, sou jornalista por formação, comunicador e criativo por
                        vocação. Tenho experiência em cobertura e produção de eventos, gestão de redes sociais, direção
                        criativa e coordenação de projetos comerciais. O que me move é a paixão por ajudar histórias a serem
                        contadas. Minha busca é ser referência na área da comunicação, principalmente para aqueles que vêm
                        de onde eu venho."
                    </p>
                </div>
            </div>

            <div id="servicos" className="bg-zinc-900 w-full max-w-full flex flex-col pt-10">
                <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-30 text-white">
                    <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 py-5">Serviços</h2>
                    <Suspense fallback={<ComponentLoader />}>
                        <Accordion />
                    </Suspense>
                </div>

                <div id="portfolio">
                    <Suspense fallback={<ComponentLoader />}>
                        <ImagePass />
                    </Suspense>
                    <Suspense fallback={<ComponentLoader />}>
                        <GridImages />
                    </Suspense>
                    <Suspense fallback={<ComponentLoader />}>
                        <CoberturaRealTime />
                    </Suspense>
                </div>
            </div>

            <div id="contato" className="w-full h-full max-w-full flex flex-col bg-yellow pt-10">
                <ContactForm />
            </div>
            
            <Footer />
        </main>
    )
}