"use cliente"
import Link from "next/link"

export default function Alunos(){

    return(<div className="min-h-screen bg-cyan-50 p-8">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-purple-900">Gestão de alunos</h1>
            <Link href="/alunos/novo" className="bg-purple-900 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">Novo aluno</Link>        
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
            Senha
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            CPF
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Email
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Data de Nascimento
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Matricula
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Data da Matricula
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Status
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Situação
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
            ********
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            000.000.000-00
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            ray@email.com
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            01/01/2000
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            20260001
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            05/09/2026
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            Ativo
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            Regular
        </td>
    </tr>
</tbody>
                </table>
            </div>
        </div>
    </div>)
}