import { Header } from "../../components/Header"
import { ScrollToTop } from "../../components/Scrolltop"
import { Typing } from "../../components/Typing"
import { Accordion } from "../../components/Accordion"
import { ImagePass } from "../../components/ImagePass"
import { GridImages } from "../../components/GridImages"

import FotoPerfil from '../../assets/fotoPerfil.png'
import { CoberturaRealTime } from "../../components/CoberturasRealTime"
import { ContactForm } from "../../components/ContactForm"

export function Home() {
    return (
        <main>
            <ScrollToTop />

            <div id="home" className="w-full max-w-full flex flex-col items-center mx-auto bg-yellow pt-24">
                <Header />
                <div className="w-3xl p-5 flex text-center flex-col my-5">
                    <p className="font-bold text-6xl max-sm:text-5xl">This is</p>
                    <p className="font-bold text-7xl max-sm:text-5xl">Nathan de Assis</p>
                </div>
                <div className="w-full flex justify-center">
                    <ul className="flex gap-15 p-2 list-disc text-xl font-semibold max-sm:text-xs max-sm:gap-6 max-sm:px-4">
                        Jornalista
                        <li>Social Media</li>
                        <li>Videomaker Mobile</li>
                        <li>Diretor Criativo</li>
                    </ul>
                </div>
                <div className="mt-5 mb-5">
                    <img className="w-auto h-[400px] rounded-lg" src={FotoPerfil} style={{ filter: "brightness(1.5)" }} alt="Nathan face" />
                </div>
                <Typing />
                <div className="max-w-[670px] mx-auto">
                    <p className="text-lg p-3 text-center mb-20">
                        "Nascido e criado na Zona Sul de São Paulo, sou jornalista por formação, comunicador e criativo por
                        vocação. Tenho experiência em cobertura e produção de eventos, gestão de redes sociais, direção
                        criativa e coordenação de projetos comerciais. O que me move é a paixão por ajudar histórias a serem
                        contadas. Minha busca é ser referência na área da comunicação, principalmente para aqueles que vêm
                        de onde eu venho."
                    </p>
                </div>
            </div>

            <div id="servicos" className="bg-zinc-900 w-full max-w-full flex flex-col pt-10">
                <div className="mx-30 text-white">
                    <h2 className="font-bold text-7xl mt-10 py-5">Serviços</h2>
                    <Accordion />
                </div>

                {/* Seção Portfólio */}
                <div id="portfolio">
                    <ImagePass />
                    <GridImages />
                    <CoberturaRealTime />
                </div>
            </div>

            <div id="contato" className="w-full h-full max-w-full flex flex-col bg-yellow pt-10">
                <ContactForm />
            </div>
        </main>
    )
}