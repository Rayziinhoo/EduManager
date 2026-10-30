'use client'

import { Nota } from "@/app/types/nota";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NotaForm from "../../components/NotaForm";

export default function EditarNota() {

    const parametros = useParams();
    const codigo = Number(parametros.codigo);

    const [nota, setNota] = useState<Nota>();

    useEffect(() => {

        axios.get<Nota>(
            'http://localhost:8080/notas/' + codigo
        )
        .then((resposta) => {
            setNota(resposta.data);
        });

    }, [codigo]);

    return(
        <div className="bg-cyan-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/notas" className="text-sm font-medium text-purple-900 hover:underline">
                        Voltar para Listagem
                    </Link>

                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-purple-900">
                            Editar nota {codigo}
                        </h1>

                        <p className="text-sm text-slate-900">
                            Preencha os dados para editar a nota
                        </p>
                    </div>
                </div>

                <div>
                    {nota && (
                        <NotaForm notaExistente={nota}/>
                    )}
                </div>
            </div>
        </div>
    )
}