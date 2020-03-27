import { Document } from 'mongoose';

export class Tarefa extends Document {
    descricao: string;
    completa: boolean;
}
