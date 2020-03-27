import { Injectable } from '@nestjs/common';
import { Tarefa } from "./Tarefa";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from } from 'rxjs';

@Injectable()
export class TarefasService {
    
    constructor(@InjectModel('Tarefa') private readonly TarefaModel: Model<Tarefa>) {}
    
    async listarTodos() {
        return await this.TarefaModel.find().exec();
    }

    async listarUm(id: string) {
        return await this.TarefaModel.findById(id).exec();
    }

    async cadastrar(tarefa: Tarefa) {
        const cadastrandoTarefa = new this.TarefaModel(tarefa);
        return await cadastrandoTarefa.save();
    }

    async alterar(id: string, tarefa: Tarefa) {
        await this.TarefaModel.updateOne({ _id: id}, tarefa).exec();
        return this.listarUm(id);
    }

    async excluir(id: string) {
        return await this.TarefaModel.deleteOne({ _id: id }).exec();
    }
}
