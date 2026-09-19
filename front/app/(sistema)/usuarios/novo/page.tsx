import Link from "next/link";
import UsuarioForm from "../components/UsuarioForm";

export default function CadastroUsuario(){

    return(
        <div className="bg-cyan-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Link href="/usuarios" className="text-sm font-medium text-purple-900 hover:underline">
                        Voltar para Listagem
                    </Link>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-purple-900">Novo usuário</h1>
                        <p className="text-sm text-slate-900">Preencha os dados para registrar um novo usuário</p>
                    </div>
                </div>
                <div>
                   <UsuarioForm/> 
                </div>
            </div>
        </div>
    )
}