"use client"
import { Turma } from "@/app/types/turma";
import { useEffect, useState } from "react";
import Link from "next/link"
import axios from "axios";

export default function Turmas(){

    const[turmas, setTurmas] = useState<Turma[]>([]);
    
    useEffect(()=>{
        carregarDados();
    },[]);

    const carregarDados = async() => {

    
    try {
    const dados = await axios.get<Turma[]>("http://localhost:8080/turmas")
        
        setTurmas( dados.data)

    } catch (error){
        alert("Erro ao carregar dados")

    }
}

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
{turmas.map((turma)=>(
    <tr className="hover:bg-cyan-50">
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.id}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.nome}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.ano}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.periodo}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.turno}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.sala}
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.status}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
            {turma.status}
        </td>
    </tr>
))}
                        {turmas.length === 0 &&
                        (
                            <tr>
                                <td colSpan={5} className="px-6 py12 text-center text-slate-900 italic">
                                    Nenhuma turma encontrada!
                                </td>
                            </tr>
                        )

                        }
</tbody>
                </table>
            </div>
        </div>
    </div>)
}
