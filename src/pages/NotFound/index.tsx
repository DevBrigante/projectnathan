import { useNavigate } from 'react-router'
import { Footer } from '../../components/Footer'

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex flex-col">
            {/* Main content */}
            <div className="flex-1 flex items-center justify-center px-4 py-16">
                <div className="max-w-2xl w-full text-center">
                    {/* Animated 404 */}
                    <div className="relative mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow via-yellow to-amber-300 animate-pulse">
                            404
                        </h1>
                        <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-yellow opacity-20 blur-sm">
                            404
                        </div>
                    </div>
                    
                    {/* Error message */}
                    <div className="space-y-6 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Página não encontrada
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
                            Ops! Parece que você se perdeu. O projeto que você está tentando acessar não existe ou foi movido.
                        </p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => navigate("/", { replace: true })}
                            className="group relative px-8 py-4 bg-yellow hover:bg-yellow/90 text-black font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow/25 min-w-[200px]"
                        >
                            <span className="relative z-10">Voltar ao início</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow to-amber-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        <button
                            onClick={() => window.history.back()}
                            className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[200px]"
                        >
                            Página anterior
                        </button>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="mt-16 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-yellow rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-yellow rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-yellow rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};