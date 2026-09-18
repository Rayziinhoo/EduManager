export class Aluno{

    constructor(
        public id: number | null,
        public nome: string,
        public cpf: string,
        public email: string,
        public dataNascimento: string,
        public matricula: string,
        public dataMatricula: string,
        public status: string,
        public situacao: string)
        {        

    }
}