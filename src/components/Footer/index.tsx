export function Footer() {
    return (
        <footer className="bg-zinc-900 w-full py-10 border-t border-zinc-700">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
                        <div className="flex items-center space-x-2">
                            <span className="text-zinc-400">Desenvolvimento:</span>
                            <a 
                                href="https://www.linkedin.com/in/brennobrigante/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white font-semibold hover:text-yellow transition-colors duration-300"
                            >
                                Brenno Brigante
                            </a>
                        </div>
                        
                        <div className="hidden sm:block text-zinc-600">•</div>
                        
                        <div className="flex items-center space-x-2">
                            <span className="text-zinc-400">Design:</span>
                            <a 
                                href="https://www.instagram.com/gabrieladifolco?igsh=MXd4bTZtdnFpMGpuaw==" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white font-semibold hover:text-yellow transition-colors duration-300"
                            >
                                Gabriela Di Folco
                            </a>
                        </div>
                    </div>
                    
                    <div className="text-zinc-500 text-xs text-center">
                        © {new Date().getFullYear()} Nathan de Assis - Todos os direitos reservados
                    </div>
                </div>
            </div>
        </footer>
    )
}