'use client'

import { Aluno } from "@/app/types/aluno";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AlunoForm from "../../components/AlunoForm";

export default function EditarAluno() {

    const parametros = useParams();
    const codigo = Number(parametros.codigo);

    const [aluno, setAluno] = useState<Aluno>();

    useEffect(() => {

        axios.get<Aluno>(
            'http://localhost:8080/alunos/' + codigo
        )
        .then((resposta) => {
            setAluno(resposta.data);
        });

    }, [codigo]);

    return(
        <div className="bg-cyan-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/alunos" className="text-sm font-medium text-purple-900 hover:underline">
                        Voltar para Listagem
                    </Link>

                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-purple-900">
                            Editar aluno {codigo}
                        </h1>

                        <p className="text-sm text-slate-900">
                            Preencha os dados para editar o aluno
                        </p>
                    </div>
                </div>

                <div>
                    {aluno && (
                        <AlunoForm alunoExistente={aluno}/>
                    )}
                </div>
            </div>
        </div>
    )
}