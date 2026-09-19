"use client"
import { Aluno } from "@/app/types/aluno";
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Alunos(){

    const[alunos, setAlunos] = useState<Aluno[]>([]);

useEffect(()=>{
    carregarDados();
},[]);


const carregarDados = async() => {

    
    try {
    const dados = await axios.get<Aluno[]>("http://localhost:8080/alunos")
        
        setAlunos( dados.data)

    } catch (error){
        alert("Erro ao carregar dados")

    }
    
}

    return(<div className="bg-cyan-50 p-8">
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
            Código
        </th>
        <th className="px-4 py-3 text-sm font-medium text-purple-900">
            Nome
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
{alunos.map((aluno)=>(
    <tr key={aluno.id} className="hover:bg-cyan-50">
        <td className="px-4 py-3 text-sm text-slate-900">
            {aluno.id}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.nome}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.cpf}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.email}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.dataNascimento}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.matricula}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.dataMatricula}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.status}
        </td>
        <td className="px-4 py-3 text-sm text-slate-900">
        {aluno.situacao}
        </td>
    </tr>
    ))}

{alunos.length === 0 &&
                        (
                            <tr>
                                <td colSpan={9} className="px-6 py12 text-center text-slate-900 italic">
                                    Nenhum aluno encontrado!
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