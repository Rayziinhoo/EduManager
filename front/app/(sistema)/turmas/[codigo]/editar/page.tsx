"use client"

import { Turma } from "@/app/types/turma";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import TurmaForm from "../../components/TurmaForm";
import axios from "axios";

export default function EditarTurma(){
    const parametro = useParams();
    const router = useRouter();

    const codigo = Number(parametro.codigo);

    const [turma, setTurma] = useState<Turma|null>(null)

    useEffect(()=>{
        buscarDados();
    },[]);

    const buscarDados =async () => {

        const valorTurmaBack = await axios.get<Turma>(''+codigo);

        if(valorTurmaBack.status==200){
            setTurma(valorTurmaBack.data);
        }else{
           router.push("")
        }
        
    }

    if(!turma) return(<div className="p-8"> Carregando Dados ...</div>)

    return(
        <div>
            <div>
                <div>
                    <Link href="/turmas">
                    Voltar para Listagem
                    </Link>
                    <div>
                        <h1>Editar Turma {codigo}</h1>
                        <p>Preencha os dados para editar o usuário</p>
                    </div>
                </div>
                {/* <div>
                    <TurmaForm turmaExistente={turma}/>
                </div> */}
            </div>
        </div>
    )
}