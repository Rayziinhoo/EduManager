import Link from "next/link"

export default function Usuarios(){
// todos html nessas estruturas
// th no thead e td tbory
//
    return(<div className="min-h-screen bg-blue-50 p-8">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-blue-900">Gestão de usuários</h1>
            <Link href="/usuarios/novo" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">Novo usuário</Link>        
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="px-4 py-3 text-sm font-medium text-blue-900">
                                Nome
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100">
                        <tr className="hover:bg-blue-50">
                            <td className="px-4 py-3 text-sm text-slate-900">
                                Ray
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}