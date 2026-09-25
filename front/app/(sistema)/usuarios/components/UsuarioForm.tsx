'use client'

import { Usuario, UsuarioFormProps } from "@/app/types/usuario";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UsuarioForm({usuarioExistente}:UsuarioFormProps) { 

    const router = useRouter();

    const[ usuario, setUsuario ] = useState<Usuario>(
        usuarioExistente ||
        new Usuario(null,"","","ATIVO","","")
    );

    // prev/preview
    const handlerChange = ( campo: 'nome' | 'email' | 'cpf' | 'senha', valor:string ) =>{
        setUsuario(
            valorAnterior => 
            new Usuario(
                valorAnterior.id,
                campo === 'nome' ? valor : valorAnterior.nome,
                campo === 'email' ? valor : valorAnterior.email,
                valorAnterior.status,
                campo === 'cpf' ? valor : valorAnterior.cpf,
                campo === 'senha' ? valor : valorAnterior.senha
            )
        )

    }

    const handlerSalvar = async (formData : FormData) => {

        if(usuarioExistente){

            var dadosRetorno = await  axios.put<number>('http://localhost:8080/usuarios/'+usuario.id, usuario)

      if (dadosRetorno.status==200){
            alert("Usuário foi atualizado com sucesso");
            router.push("/usuarios");
      }else{
        alert(dadosRetorno.data);
        return;
      }

      router.push("/usuarios");

        }else{

      var dadosRetorno = await  axios.post<number>('http://localhost:8080/usuarios/cadastro', usuario)

      if (dadosRetorno.status==200){
            alert("Usuário foi salvo com sucesso");
            router.push("/usuarios");
      }else{
        alert(dadosRetorno.data);
        return;
      }

      router.push("/usuarios");
    }
    }

    return (
        <form className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg border border-blue-900/20 max-w-md">
            <div className="flex flex-col gap-1">
                <label 
                className="text-sm font-medium text-purple-900">
                    Nome completo:

                </label>
                <input name="nome" 
                value={usuario.nome}
                onChange={(e)=> handlerChange('nome', e.target.value)}
                required
                placeholder="opa"
                className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex flex-col gap-1">
                <label 
                className="text-sm font-medium text-purple-900">
                    CPF:

                </label>
                <input name="CPF" 
                value={usuario.cpf}
                onChange={(e)=> handlerChange('cpf', e.target.value)}
                required
                placeholder="000.000.000-00"
                className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex flex-col gap-1">
                <label 
                className="text-sm font-medium text-purple-900">
                    E-mail:

                </label>
                <input name="email" 
                value={usuario.email}
                onChange={(e)=> handlerChange('email', e.target.value)}
                required
                placeholder="email@email.com.br"
                className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex flex-col gap-1">
                <label 
                className="text-sm font-medium text-purple-900">
                    Senha:

                </label>
                <input name="Senha" 
                value={usuario.senha}
                onChange={(e)=> handlerChange('senha', e.target.value)}
                required
                placeholder="**************"
                className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex items-center justify-end gap-4 mt-2">
                <Link href="/usuarios" className="px-4 py-2 border-2 border-purple-900 text-purple-900 font-semibold rounded-lg hover:bg-purple-900 hover:text-white transition-colors"> Cancelar</Link>
                <button type="submit" className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors">Salvar</button>
            </div>
        </form>
    );
}