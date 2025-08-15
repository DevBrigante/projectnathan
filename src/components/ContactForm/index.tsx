import { useState } from 'react'
import { RiPhoneFill, RiMailFill, RiInstagramFill, RiVideoFill, RiShareFill, RiMovieFill, RiLightbulbFill } from '@remixicon/react'

interface FormData {
    name: string
    email: string
    phone: string
    projectDescription: string
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        projectDescription: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">CONTATO</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Vamos transformar sua ideia em uma experiência visual incrível</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-10 animate-slideInLeft">
                    <div className="bg-black/5 backdrop-blur-sm p-8 rounded-2xl">
                        <h3 className="text-2xl font-semibold text-black mb-8 border-b border-yellow pb-4">Minhas Informações</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiPhoneFill size={24} className="text-black" />
                                </div>
                                <div>
                                    <p className="text-sm text-black font-bold uppercase tracking-wider">Telefone</p>
                                    <p className="text-black font-medium transition-colors">
                                        <a href="tel:+5511982966568">+55 11 98296-6568</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiMailFill size={24} className="text-black" />
                                </div>
                                <div>
                                    <p className="text-sm text-black font-bold uppercase tracking-wider">Email</p>
                                    <p className="text-black font-medium transition-colors">
                                        <a href="mailto:nathansantos1201@gmail.com">nathansantos1201@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <a
                                        href="https://www.instagram.com/_nah00/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center"
                                    >
                                        <RiInstagramFill size={24} className="text-black" />
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-black font-bold uppercase tracking-wider">Instagram</p>
                                    <p className="text-black font-medium transition-colors">
                                        <a
                                            href="https://www.instagram.com/_nah00/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            @_nah00
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/5 backdrop-blur-sm p-8 rounded-2xl">
                        <h3 className="text-2xl font-semibold text-black mb-8 border-b border-yellow pb-4">Serviços</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 group">
                                <div className="w-10 h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiVideoFill size={20} className="text-black" />
                                </div>
                                <span className="text-gray-800 font-medium">Cobertura de eventos</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-10 h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiShareFill size={20} className="text-black" />
                                </div>
                                <span className="text-gray-800 font-medium">Gestão de redes sociais</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-10 h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiMovieFill size={20} className="text-black" />
                                </div>
                                <span className="text-gray-800 font-medium">Videomaker mobile</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-10 h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiLightbulbFill size={20} className="text-black" />
                                </div>
                                <span className="text-gray-800 font-medium">Direção criativa</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg relative overflow-hidden animate-slideInRight">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-semibold text-center text-black mb-8 animate-fadeIn">Vamos trabalhar juntos</h3>

                        <form className="space-y-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Telefone (opcional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                    Sobre seu projeto
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none outline-none"
                                    placeholder="Conte-me sobre seu projeto, objetivos e como posso te ajudar..."
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}