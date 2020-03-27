import * as mongoose from 'mongoose';

export const TarefaSchema = new mongoose.Schema({
    descricao: String,
    completa: Boolean
})