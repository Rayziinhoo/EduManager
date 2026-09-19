import Link from "@/node_modules/next/link";



export default function Sidebar(){

    return(
        <aside className="w-64 min-h-screen bg-purple-900 border-r border-purple-950 flex flex-col p-6 shadow-lg">
            <div className="text-xl font-bold text-cyan-100 tracking-wide mb-8 px-2 flex items-center space-x-2">
                <span className="w-3 h-3 bg-cyan-400 rounded-full inline-block"></span>
                <span>Edu Manager</span>
            </div>
            {/* turmas<nomeTurma<alunos>> */}
                {/* alunos<presença>||<notas> */}
            <nav className="flex flex-col space-y-2">
                <Link href="/home" 
                className="flex items-center px-4 py-3 text-cyan-200 hover:text-white hover:bg-purple-800 rounded-xl transition-all duration-200 font-semibold">
                    Home
                    </Link>
                <Link href="/usuarios" 
                className="flex items-center px-4 py-3 text-cyan-200 hover:text-white hover:bg-purple-800 rounded-xl transition-all duration-200 font-semibold">
                    Usuários
                    </Link>
                <Link href="/turmas" 
                className="flex items-center px-4 py-3 text-cyan-200 hover:text-white hover:bg-purple-800 rounded-xl transition-all duration-200 font-medium font-semibold">
                    Turmas
                    </Link>
                <Link href="/notas" 
                className="flex items-center px-4 py-3 text-cyan-200 hover:text-white hover:bg-purple-800 rounded-xl transition-all duration-200 font-medium font-semibold">
                    Notas
                    </Link>
                <Link href="/alunos" 
                className="flex items-center px-4 py-3 text-cyan-200 hover:text-white hover:bg-purple-800 rounded-xl transition-all duration-200 font-medium font-semibold">
                    Alunos
                    </Link>
            </nav>
        </aside>);


}