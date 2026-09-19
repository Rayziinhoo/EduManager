"use client"
import { Nota } from "@/app/types/nota"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Notas(){

    const[notas, setNotas] = useState<Nota[]>([]);

useEffect(()=>{
    carregarDados();
},[]);

const carregarDados = async() => {

    
    try {
    const dados = await axios.get<Nota[]>("http://localhost:8080/notas")
        
        setNotas( dados.data)

    } catch (error){
        alert("Erro ao carregar dados")

    }
    
}

    return(<div className="bg-cyan-50 p-8">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-purple-900">Gestão de notas</h1>
            <Link href="/notas/novo" className="bg-purple-900 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">Nova nota</Link>        
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
                                Valor
                            </th> 
                            <th className="px-4 py-3 text-sm font-medium text-purple-900">
                                Tipo de Avalição
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-purple-900">
                                Data da Avaliação
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-purple-900">
                                Media
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-900/10">
                    {notas.map((nota)=>(
                        <tr key={nota.id} className="hover:bg-cyan-50">
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {nota.id}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {nota.valor}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {nota.status}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {nota.dataAvaliacao}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {nota.media}
                            </td>
                        </tr>
                        ))}

                        {notas.length === 0 &&
                        (
                            <tr>
                                <td colSpan={5} className="px-6 py12 text-center text-slate-900 italic">
                                    Nenhuma nota encontrada!
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