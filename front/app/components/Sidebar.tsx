import Link from "@/node_modules/next/link";



export default function Sidebar(){

    return(
        <aside className="w-64 min-h-screen bg-purple-900 border-r border-purple-950 flex flex-col p-6 shadow-lg">
            <div className="text-xl font-bold text-cyan-100 tracking-wide mb-8 px-2 flex items-center space-x-2">
                <span className="w-3 h-3 bg-cyan-400 rounded-full inline-block"></span>
                <span>Alunaso 2026</span>
            </div>
            <nav className="flex flex-col space-y-2">
                <Link href="/home" className="flex items-center px-4 py-3 text-cyan-200 hover:text-white hover:bg-purple-800 rounded-xl transition-all duration-200 font-medium">Home</Link>
                <Link href="/usuarios" className="flex items-center px-4 py-3 text-cyan-200 hover:text-white hover:bg-purple-800 rounded-xl transition-all duration-200 font-medium">Usuários</Link>
            </nav>
        </aside>);


}