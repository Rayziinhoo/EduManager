'use client'

import { useRouter } from "next/navigation";

export default function Login() {
    
    const router = useRouter();

    const handlerLogin = async(formData: FormData) => {
        
        router.push("/home")
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-blue-900">
                        Entrar no Sistema
                    </h1>
                    <p className="text-sm text-slate-900">Insira suas credenciais para acessar o painel</p>
                </div>
                <form action={handlerLogin} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-blue-900">
                            E-MAIL
                        </label>
                        <input name="email" placeholder="Digite seu e-mail" className="border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"></input> 
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-blue-900">
                            SENHA
                        </label>
                        <input name="senha" placeholder="Digite sua senha" className="border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"></input> 
                    </div>
                    <button type="submit" className="mt-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-colors">
                        Entrar
                    </button>
                </form>


            </div>



        </div>


    );
}