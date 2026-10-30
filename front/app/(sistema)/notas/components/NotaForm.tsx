'use client'

import { Nota } from "@/app/types/nota";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface NotaFormProps {
    notaExistente?: Nota
}

export default function NotaForm({ notaExistente }: NotaFormProps) {

    const router = useRouter();

    const [nota, setNota] = useState<Nota>(
        notaExistente ||
        new Nota(
            null,
            0,
            "",
            "ATIVO",
            0
        )
    );

    const handlerChange = (
        campo: 'valor' | 'dataAvaliacao' | 'media',
        valor: string
    ) => {

        setNota(
            valorAnterior =>
                new Nota(
                    valorAnterior.id,
                    campo === 'valor'
                        ? Number(valor)
                        : valorAnterior.valor,

                    campo === 'dataAvaliacao'
                        ? valor
                        : valorAnterior.dataAvaliacao,

                    valorAnterior.status,

                    campo === 'media'
                        ? Number(valor)
                        : valorAnterior.media
                )
        );
    }

    const handlerSalvar = async () => {

        if (notaExistente) {

            const dadosRetorno = await axios.put<number>(
                'http://localhost:8080/notas/' + nota.id,
                nota
            );

            if (dadosRetorno.status == 200) {
                alert("Nota foi atualizada com sucesso");
                router.push("/notas");
            } else {
                alert(dadosRetorno.data);
                return;
            }

        } else {

            const dadosRetorno = await axios.post<number>(
                'http://localhost:8080/notas/cadastro',
                nota
            );

            if (dadosRetorno.status == 200) {
                alert("Nota foi salva com sucesso");
                router.push("/notas");
            } else {
                alert(dadosRetorno.data);
                return;
            }
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handlerSalvar();
            }}
            className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg border border-blue-900/20 max-w-md"
        >

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Valor:
                </label>

                <input
                    type="number"
                    name="valor"
                    value={nota.valor}
                    onChange={(e) => handlerChange('valor', e.target.value)}
                    required
                    min="0"
                    step="0.01"
                    placeholder="Ex: 8.50"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Data da avaliação:
                </label>

                <input
                    type="date"
                    name="dataAvaliacao"
                    value={nota.dataAvaliacao}
                    onChange={(e) => handlerChange('dataAvaliacao', e.target.value)}
                    required
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Média:
                </label>

                <input
                    type="number"
                    name="media"
                    value={nota.media}
                    onChange={(e) => handlerChange('media', e.target.value)}
                    required
                    min="0"
                    step="0.01"
                    placeholder="Ex: 7.00"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex items-center justify-end gap-4 mt-2">

                <Link
                    href="/notas"
                    className="px-4 py-2 border-2 border-purple-900 text-purple-900 font-semibold rounded-lg hover:bg-purple-900 hover:text-white transition-colors"
                >
                    Cancelar
                </Link>

                <button
                    type="submit"
                    className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors"
                >
                    Salvar
                </button>

            </div>

        </form>
    );
}