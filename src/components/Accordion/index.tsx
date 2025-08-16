import { useState } from 'react';

interface AccordionItem {
    title: string;
    content: string[];
}

const accordionData: AccordionItem[] = [
    {
        title: 'Social Media',
        content: [
            'Organização Digital',
            'Planejamento de conteúdo',
            'Acompanhamento de Métricas',
        ],
    },
    {
        title: 'Jornalismo',
        content: ['Redação Publicitária', 'Roteiros'],
    },
    {
        title: 'Video Making Mobile',
        content: ['Real Time', 'Eventos', 'Gravações Externas'],
    },
    {
        title: 'Direção Criativa',
        content: [
            'Direção Criativa para Editoriais de Fotos',
            'Gestão de Projetos Publicitários',
            'Elaboração de Propostas Publicitárias',
        ],
    },
];


export const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="flex flex-col gap-6 my-12">
            {accordionData.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={i} className="cursor-pointer w-full sm:w-[80%] md:w-[60%] lg:w-[40%] border-b border-gray-700 pb-2 transition-all duration-300 hover:border-gray-500">
                        <button
                            onClick={() => toggle(i)}
                            className="flex items-center justify-between bg-transparent text-white border-none text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold w-full cursor-pointer transition-colors duration-300 hover:text-gray-300">
                            <span className="font-bold max-w-full whitespace-nowrap">
                                {item.title}
                            </span>
                            <span className={`ml-3 leading-none transform transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                                +
                            </span>
                        </button>
                        <ul className={`mt-4 mx-auto overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {item.content.map((line, j) => (
                                <li key={j} className="my-2 text-white list-disc list-inside text-base sm:text-lg md:text-xl lg:text-[20px] transition-all duration-300 hover:translate-x-1">
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
