import Link from "next/link";

export default function AlunoForm() {
    return (
        <form className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg border border-blue-900/20 max-w-md">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Nome completo:

                </label>
                <input name="nome" className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    CPF:

                </label>
                <input name="CPF" className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    E-mail:

                </label>
                <input name="email" className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-purple-900">
                    Senha:

                </label>
                <input name="Senha" className="border border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400">
                </input>
            </div>
            <div className="flex items-center justify-end gap-4 mt-2">
                <Link href="/alunos" className="px-4 py-2 border-2 border-purple-900 text-purple-900 font-semibold rounded-lg hover:bg-purple-900 hover:text-white transition-colors"> Cancelar</Link>
                <button type="submit" className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors">Salvar</button>
            </div>
        </form>
    );
}