import Link from "next/link";
import TurmaForm from "../components/TurmaForm";

export default function CadastroTurma(){

    return(
        <div className="bg-cyan-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/turmas" className="text-sm font-medium text-purple-900 hover:underline">
                        Voltar para Listagem
                    </Link>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-purple-900">Nova turma</h1>
                        <p className="text-sm text-slate-900">Preencha os dados para registrar uma nova turma</p>
                    </div>
                </div>
                <div>
                   <TurmaForm/> 
                </div>
            </div>
        </div>
    )
}