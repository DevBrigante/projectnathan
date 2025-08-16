import { useState } from 'react'
import { RiPhoneFill, RiMailFill, RiInstagramFill, RiVideoFill, RiShareFill, RiMovieFill, RiLightbulbFill, RiSendPlaneFill } from '@remixicon/react'
import emailjs from '@emailjs/browser'

interface FormData {
    name: string
    email: string
    phone: string
    projectDescription: string
}

interface FormStatus {
    isLoading: boolean
    message: string
    type: 'success' | 'error' | ''
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        projectDescription: ''
    })

    const [formStatus, setFormStatus] = useState<FormStatus>({
        isLoading: false,
        message: '',
        type: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        if (formStatus.message) {
            setFormStatus({ isLoading: false, message: '', type: '' })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        setFormStatus({ isLoading: true, message: '', type: '' })

        try {

            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Configurações do EmailJS não encontradas. Verifique o arquivo .env')
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.projectDescription,
                to_email: 'nathansantos1201@gmail.com'
            }

            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            
            setFormStatus({
                isLoading: false,
                message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
                type: 'success'
            })
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                projectDescription: ''
            })
            
        } catch (error) {
            console.error('Erro ao enviar email:', error)
            setFormStatus({
                isLoading: false,
                message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.',
                type: 'error'
            })
        }
    }

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">CONTATO</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Vamos transformar sua ideia em uma experiência visual incrível</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10 animate-slideInLeft">
                    <div className="bg-black/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl">
                        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 sm:mb-8 border-b border-yellow pb-4">Minhas Informações</h3>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-center space-x-3 sm:space-x-4 group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiPhoneFill size={20} className="text-black sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-black font-bold uppercase tracking-wider">Telefone</p>
                                    <p className="text-sm sm:text-base text-black font-medium transition-colors">
                                        <a href="tel:+5511982966568">+55 11 98296-6568</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 sm:space-x-4 group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiMailFill size={20} className="text-black sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-black font-bold uppercase tracking-wider">Email</p>
                                    <p className="text-sm sm:text-base text-black font-medium transition-colors break-all">
                                        <a href="mailto:nathansantos1201@gmail.com">nathansantos1201@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 sm:space-x-4 group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <a
                                        href="https://www.instagram.com/_nah00/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center"
                                    >
                                        <RiInstagramFill size={20} className="text-black sm:w-6 sm:h-6" />
                                    </a>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-black font-bold uppercase tracking-wider">Instagram</p>
                                    <p className="text-sm sm:text-base text-black font-medium transition-colors">
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

                    <div className="bg-black/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl">
                        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 sm:mb-8 border-b border-yellow pb-4">Serviços</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiVideoFill size={18} className="text-black sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-gray-800 font-medium text-sm sm:text-base">Cobertura de eventos</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiShareFill size={18} className="text-black sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-gray-800 font-medium text-sm sm:text-base">Gestão de redes sociais</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiMovieFill size={18} className="text-black sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-gray-800 font-medium text-sm sm:text-base">Videomaker mobile</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow/80 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <RiLightbulbFill size={18} className="text-black sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-gray-800 font-medium text-sm sm:text-base">Direção criativa</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-lg relative overflow-hidden animate-slideInRight">
                    <div className="relative z-10">
                        <h3 className="text-xl sm:text-2xl font-semibold text-center text-black mb-6 sm:mb-8 animate-fadeIn">Vamos trabalhar juntos</h3>

                        <form className="space-y-4 sm:space-y-6 animate-fadeIn" style={{ animationDelay: "0.2s" }} onSubmit={handleSubmit}>
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
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none text-sm sm:text-base"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none text-sm sm:text-base"
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
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none text-sm sm:text-base"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                    Sobre seu projeto
                                </label>
                                <textarea
                                    id="projectDescription"
                                    name="projectDescription"
                                    value={formData.projectDescription}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg resize-none outline-none text-sm sm:text-base sm:rows-5"
                                    placeholder="Conte-me sobre seu projeto, objetivos e como posso te ajudar..."
                                />
                            </div>

                            {formStatus.message && (
                                <div className={`p-4 rounded-lg text-center font-medium ${
                                    formStatus.type === 'success' 
                                        ? 'bg-green-100 text-green-800 border border-green-200' 
                                        : 'bg-red-100 text-red-800 border border-red-200'
                                }`}>
                                    {formStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={formStatus.isLoading}
                                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 ${
                                    formStatus.isLoading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-yellow hover:bg-yellow/90 hover:scale-[1.02] active:scale-[0.98]'
                                } text-black shadow-lg`}
                            >
                                {formStatus.isLoading ? (
                                    <>
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <RiSendPlaneFill size={18} className="sm:w-5 sm:h-5" />
                                        <span className='cursor-pointer'>Enviar Mensagem</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}