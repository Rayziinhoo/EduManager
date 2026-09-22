import Link from "next/link";

export default function Header () {

    return(
        <header className="bg-white border-b border-blue-900/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="w-10 h-10 bg-purple-900 rounded-xl flex items-center justify-center text-cyan-400">
                    <Link href="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"  
                    strokeLinejoin="round" 
                    className="w-6 h-6">
                        <path d="M12 3 2 8l10 5 10-5-10-5Z"/>
                        <path d="M6 10.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5.5"/>
                        <circle cx="20" cy="14" r="1"/>

                    </svg>
                    </Link>
                </div>
                <span className="text-sm font-medium text-purple-900 font-semibold"> Rayrison Ribeiro</span>
                <Link href="/login">    
                <button className="px-4 py-2 bg-orange-800 hover:bg-orange-900 text-white text-sm font-semibold rounded-lg transition-colors">Sair</button>
                </Link>
            </div>
        </header>
    );
}