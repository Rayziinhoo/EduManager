"use client"
import Link from "next/link";
import UsuarioForm from "../../components/UsuarioForm";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Usuario } from "@/app/types/usuario";
import axios from "axios";

export default function EditarUsuario(){

    const parametro = useParams();
    const router = useRouter();

    const codigo = Number(parametro.codigo);

    const [usuario, setUsuario] = useState<Usuario|null>(null)

    useEffect(()=>{
        buscarDados();
    },[]);

    const buscarDados = async() => {

        const valorUsuarioBack = await axios.get<Usuario>('http://localhost:8080/usuarios/'+codigo);

        if(valorUsuarioBack.status==200){
            setUsuario(valorUsuarioBack.data);
        }else{
            router.push("/usuarios")
        }
        

    }

    if(!usuario) return(<div className="p-8"> Carregando Dados ...</div>)

    return(
        <div className="bg-cyan-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/usuarios" className="text-sm font-medium text-purple-900 hover:underline">
                        Voltar para Listagem
                    </Link>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-purple-900">Editar usuário {codigo} </h1>
                        <p className="text-sm text-slate-900">Preencha os dados para editar o usuário</p>
                    </div>
                </div>
                <div>
                   <UsuarioForm usuarioExistente={usuario}/> 
                </div>
            </div>
        </div>
    )
}