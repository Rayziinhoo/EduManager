export class Turma{

    constructor(
        public id: number | null,
        public nome: string,
        public ano: number,
        public periodo: string,
        public turno: string,
        public sala: string,
        public disciplina: string,
        public status: string,)
        {        

    }
}