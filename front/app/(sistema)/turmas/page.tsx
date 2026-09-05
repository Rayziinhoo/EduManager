import Link from "next/link"

export default function Turmas(){

    return(<div className="min-h-screen bg-cyan-50 p-8">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-purple-900">Gestão de turmas</h1>
            <Link href="/turmas/novo" className="bg-purple-900 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">Nova Turma</Link>        
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-blue-900/20 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-cyan-100">
    <tr>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Id
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Nome
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Ano
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Periodo
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Turno
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Sala
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Disciplina
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Status
        </th>
    </tr>
</thead>

<tbody className="divide-y divide-blue-900/10">
    <tr className="hover:bg-cyan-50">
        <td className="px-4 py-3 text-sm text-slate-900">
            1
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            Ray
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            2026
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            1º
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            Matutino
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            Sala 01
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            Matemática
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            Ativo
        </td>
    </tr>
</tbody>
                </table>
            </div>
        </div>
    </div>)
}