import { useNavigate } from 'react-router'

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-lg w-full text-center bg-white p-8 md:p-12 rounded-xl shadow-lg">
                <h1 className="text-8xl md:text-9xl font-bold text-red-500 mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    Página não encontrada
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                    Ops! Parece que você se perdeu. O projeto que você está tentando acessar não existe ou foi movido.
                </p>
                <button
                    onClick={() => navigate("/", { replace: true })}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                    Voltar para a página inicial
                </button>
            </div>
        </div >
    );
};