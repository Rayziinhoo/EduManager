import Link from "next/link";
import AlunoForm from "../components/AlunoForm";

export default function CadastroAlunos(){

    return(
        <div className="bg-cyan-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/alunos" className="text-sm font-medium text-purple-900 hover:underline">
                        Voltar para Listagem
                    </Link>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-purple-900">Novo aluno</h1>
                        <p className="text-sm text-slate-900">Preencha os dados para registrar um novo aluno</p>
                    </div>
                </div>
                <div>
                   <AlunoForm/> 
                </div>
            </div>
        </div>
    )
}