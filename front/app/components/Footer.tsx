export default function Footer() {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className="bg-black text-gray-400 py-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center text-xs">
                    <p>&copy;{anoAtual}
                    <span className="text-cyan-400 font-semibold"> Edumanager</span> Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}