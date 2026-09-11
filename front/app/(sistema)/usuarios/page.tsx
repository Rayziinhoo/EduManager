"use client"
import { Usuario } from "@/app/types/usuario"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Usuarios(){
// todos html nessas estruturas
// th no thead e td tbory
// nenhum usuario encontrado
// colSpan para pular linha
const[usuarios, setUsuarios] = useState<Usuario[]>([]);

useEffect(()=>{
    carregarDados();
},[]);


const carregarDados = async() => {

    
    try {
    const dados = await axios.get<Usuario[]>("http://localhost:8080/usuarios")
        
        setUsuarios( dados.data)

    } catch (error){
        alert("Erro ao carregar dados")

    }
    
}
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
                                Código
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-blue-900">
                                Nome
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-blue-900">
                                CPF
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-blue-900">
                                E-mail
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-blue-900">
                                Status
                            </th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100">
                        {usuarios.map((usuario)=>(
                        <tr key={usuario.id} className="hover:bg-blue-50">
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {usuario.id}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {usuario.nome}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {usuario.cpf}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {usuario.email}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-900">
                                {usuario.status}
                            </td>
                        </tr>
                        ))}
                        {usuarios.length === 0 &&
                        (
                            <tr>
                                <td colSpan={5} className="px-6 py12 text-center text-slate-900 italic">
                                    Nenhum usuario encontrado!
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