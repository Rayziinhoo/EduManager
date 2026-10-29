'use client'

import { Turma, TurmaFormProps } from "@/app/types/turma";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TurmaForm({ turmaExistente }: TurmaFormProps) {

    const router = useRouter();

    const [turma, setTurma] = useState<Turma>(
        turmaExistente ||
        new Turma(
            null,
            "",
            new Date().getFullYear(),
            "",
            "",
            "",
            "",
            "ATIVO"
        )
    );

    const handlerChange = (
        campo: 'nome' | 'ano' | 'periodo' | 'turno' | 'sala' | 'disciplina',
        valor: string
    ) => {

        setTurma(
            valorAnterior =>
                new Turma(
                    valorAnterior.id,
                    campo === 'nome' ? valor : valorAnterior.nome,
                    campo === 'ano' ? Number(valor) : valorAnterior.ano,
                    campo === 'periodo' ? valor : valorAnterior.periodo,
                    campo === 'turno' ? valor : valorAnterior.turno,
                    campo === 'sala' ? valor : valorAnterior.sala,
                    campo === 'disciplina' ? valor : valorAnterior.disciplina,
                    valorAnterior.status
                )
        );
    }

    const handlerSalvar = async () => {

        if (turmaExistente) {

            const dadosRetorno = await axios.put<number>(
                'http://localhost:8080/turmas/' + turma.id,
                turma
            );

            if (dadosRetorno.status == 200) {
                alert("Turma foi atualizada com sucesso");
                router.push("/turmas");
            } else {
                alert(dadosRetorno.data);
                return;
            }

        } else {

            const dadosRetorno = await axios.post<number>(
                'http://localhost:8080/turmas/cadastro',
                turma
            );

            if (dadosRetorno.status == 200) {
                alert("Turma foi salva com sucesso");
                router.push("/turmas");
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
                    Nome da turma:
                </label>

                <input
                    name="nome"
                    value={turma.nome}
                    onChange={(e) => handlerChange('nome', e.target.value)}
                    required
                    placeholder="Ex: 1º Ano A"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Ano:
                </label>

                <input
                    type="number"
                    name="ano"
                    value={turma.ano}
                    onChange={(e) => handlerChange('ano', e.target.value)}
                    required
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Período:
                </label>

                <input
                    name="periodo"
                    value={turma.periodo}
                    onChange={(e) => handlerChange('periodo', e.target.value)}
                    required
                    placeholder="Ex: Ensino Fundamental"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Turno:
                </label>

                <select
                    name="turno"
                    value={turma.turno}
                    onChange={(e) => handlerChange('turno', e.target.value)}
                    required
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                >
                    <option value="">Selecione o turno</option>
                    <option value="MATUTINO">Matutino</option>
                    <option value="VESPERTINO">Vespertino</option>
                    <option value="NOTURNO">Noturno</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Sala:
                </label>

                <input
                    name="sala"
                    value={turma.sala}
                    onChange={(e) => handlerChange('sala', e.target.value)}
                    required
                    placeholder="Ex: Sala 01"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Disciplina:
                </label>

                <input
                    name="disciplina"
                    value={turma.disciplina}
                    onChange={(e) => handlerChange('disciplina', e.target.value)}
                    required
                    placeholder="Ex: Matemática"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex items-center justify-end gap-4 mt-2">

                <Link
                    href="/turmas"
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