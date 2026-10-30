'use client'

import { Aluno } from "@/app/types/aluno";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AlunoFormProps {
    alunoExistente?: Aluno
}

export default function AlunoForm({ alunoExistente }: AlunoFormProps) {

    const router = useRouter();

    const [aluno, setAluno] = useState<Aluno>(
        alunoExistente ||
        new Aluno(
            null,
            "",
            "",
            "",
            "",
            "",
            "",
            "ATIVO",
            "ATIVO"
        )
    );

    const handlerChange = (
        campo:
            | 'nome'
            | 'cpf'
            | 'email'
            | 'dataNascimento'
            | 'matricula'
            | 'dataMatricula'
            | 'situacao',
        valor: string
    ) => {

        setAluno(
            valorAnterior =>
                new Aluno(
                    valorAnterior.id,
                    campo === 'nome' ? valor : valorAnterior.nome,
                    campo === 'cpf' ? valor : valorAnterior.cpf,
                    campo === 'email' ? valor : valorAnterior.email,
                    campo === 'dataNascimento' ? valor : valorAnterior.dataNascimento,
                    campo === 'matricula' ? valor : valorAnterior.matricula,
                    campo === 'dataMatricula' ? valor : valorAnterior.dataMatricula,
                    valorAnterior.status,
                    campo === 'situacao' ? valor : valorAnterior.situacao
                )
        );
    }

    const handlerSalvar = async () => {

        if (alunoExistente) {

            const dadosRetorno = await axios.put<number>(
                'http://localhost:8080/alunos/' + aluno.id,
                aluno
            );

            if (dadosRetorno.status == 200) {
                alert("Aluno foi atualizado com sucesso");
                router.push("/alunos");
            } else {
                alert(dadosRetorno.data);
                return;
            }

        } else {

            const dadosRetorno = await axios.post<number>(
                'http://localhost:8080/alunos/cadastro',
                aluno
            );

            if (dadosRetorno.status == 200) {
                alert("Aluno foi salvo com sucesso");
                router.push("/alunos");
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
                    Nome completo:
                </label>

                <input
                    name="nome"
                    value={aluno.nome}
                    onChange={(e) => handlerChange('nome', e.target.value)}
                    required
                    placeholder="Nome completo"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    CPF:
                </label>

                <input
                    name="cpf"
                    value={aluno.cpf}
                    onChange={(e) => handlerChange('cpf', e.target.value)}
                    required
                    placeholder="000.000.000-00"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    E-mail:
                </label>

                <input
                    type="email"
                    name="email"
                    value={aluno.email}
                    onChange={(e) => handlerChange('email', e.target.value)}
                    required
                    placeholder="email@email.com.br"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Data de nascimento:
                </label>

                <input
                    type="date"
                    name="dataNascimento"
                    value={aluno.dataNascimento}
                    onChange={(e) => handlerChange('dataNascimento', e.target.value)}
                    required
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Matrícula:
                </label>

                <input
                    name="matricula"
                    value={aluno.matricula}
                    onChange={(e) => handlerChange('matricula', e.target.value)}
                    required
                    placeholder="Número da matrícula"
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Data da matrícula:
                </label>

                <input
                    type="date"
                    name="dataMatricula"
                    value={aluno.dataMatricula}
                    onChange={(e) => handlerChange('dataMatricula', e.target.value)}
                    required
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Situação:
                </label>

                <select
                    name="situacao"
                    value={aluno.situacao}
                    onChange={(e) => handlerChange('situacao', e.target.value)}
                    required
                    className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                >
                    <option value="">Selecione a situação</option>
                    <option value="ATIVO">Ativo</option>
                    <option value="INATIVO">Inativo</option>
                    <option value="TRANSFERIDO">Transferido</option>
                    <option value="FORMADO">Formado</option>
                </select>
            </div>

            <div className="flex items-center justify-end gap-4 mt-2">

                <Link
                    href="/alunos"
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