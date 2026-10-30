'use client'

import { Turma } from "@/app/types/turma";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TurmaForm from "../../components/TurmaForm";

export default function EditarTurma() {

    const parametros = useParams();
    const codigo = Number(parametros.codigo);

    const [turma, setTurma] = useState<Turma>();

    useEffect(() => {

        axios.get<Turma>(
            'http://localhost:8080/turmas/' + codigo
        )
        .then((resposta) => {
            setTurma(resposta.data);
        });

    }, [codigo]);

    return(
        <div className="bg-cyan-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/turmas" className="text-sm font-medium text-purple-900 hover:underline">
                        Voltar para Listagem
                    </Link>

                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-purple-900">
                            Editar turma {codigo}
                        </h1>

                        <p className="text-sm text-slate-900">
                            Preencha os dados para editar a turma
                        </p>
                    </div>
                </div>

                <div>
                    {turma && (
                        <TurmaForm turmaExistente={turma}/>
                    )}
                </div>
            </div>
        </div>
    )
}