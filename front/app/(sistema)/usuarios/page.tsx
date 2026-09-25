// serve para importar o react - será feito pelo usuario - HTML
"use client"
import { Usuario } from "@/app/types/usuario"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Usuarios(){
// todos html nessas estruturas
// th no thead e td tbory
// primeiro deixa visual
// depois fazer a integração

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

const handleDeletarUsuario = async(usuario:Usuario) =>{

    var dadosRetorno = await  
    axios.delete('http://localhost:8080/usuarios/'+usuario.id+'/excluir');

    if(dadosRetorno.status==200){
        alert("Excluido com sucesso!");
    }else{
        alert(dadosRetorno.data);

        return;
    }

    carregarDados();

}

const handleAlterarStatusUsuario = async(usuario:Usuario) =>{


    var novoStatus = {};
    if(usuario.status ==="ATIVO"){
        novoStatus = {status:"BLOQUEADO"}
    }else{
        novoStatus = {status:"ATIVO"}
    }

    var dadosRetorno = await  
    axios.patch('http://localhost:8080/usuarios/'+usuario.id+'/status',novoStatus);

    if(dadosRetorno.status==200){
        alert("Atulizado status com sucesso!");
    }else{
        alert(dadosRetorno.data);

        return;
    }

    carregarDados();

}


    return(<div className="bg-cyan-50 p-8">
    <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-purple-900">Gestão de usuários</h1>
        <Link href="/usuarios/novo" className="bg-purple-900 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">Novo usuário</Link>        
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
                            E-mail
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-purple-900">
                            Status
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-purple-900">
                            Ações
                        </th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-blue-900/10">
                    {usuarios.map((usuario)=>(
                    <tr key={usuario.id} className="hover:bg-cyan-50">
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
                        <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                        <Link href={`/usuarios/${usuario.id}/editar`}>Editar</Link>
                                       <button onClick = {()=> handleDeletarUsuario(usuario)}
                                       className= "font-medium transition-colors text-red-600 hover:text-red-800">
                                        DELETAR</button>
                                        <button onClick = {()=> handleAlterarStatusUsuario(usuario)}
                                       className= {`font-medium transition-colors ${usuario.status ==='BLOQUEADO'
                                         ?'text-orange-600 hover:text-orange-800' 
                                         :'text-green-600 hover:text-green-800' }`
                                         }>
                                        {usuario.status}</button>
                                    </td>
                    </tr>
                    ))}
                    {/* nenhum usuario encontrado
                    colSpan para pular linha */}
                    {usuarios.length === 0 &&
                    (
                        <tr>
                            <td colSpan={6} className="px-6 py-12 text-center text-slate-900 italic">
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