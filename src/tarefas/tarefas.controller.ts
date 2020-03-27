import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TarefasService } from './shared/tarefas.service';
import { Tarefa } from "./shared/Tarefa";

@Controller('tarefas')
export class TarefasController {

    constructor(
        private tarefasService: TarefasService
) {  }

    @Get()
    async listarTodos() : Promise<Tarefa[]> {
        return this.tarefasService.listarTodos();
    }

    @Get(':id')
    async listarUm(@Param('id') id: string) : Promise<Tarefa> {
        return this.tarefasService.listarUm(id);
    }

    @Post()
    async cadastrar(@Body() tarefa: Tarefa) : Promise<Tarefa> {
        return this.tarefasService.cadastrar(tarefa);
    }

    @Put(':id')
    async alterar(@Param('id') id: string, @Body() tarefa: Tarefa) : Promise<Tarefa> {
        return this.tarefasService.alterar(id, tarefa);
    }

    @Delete(':id')
    async excluir(@Param('id') id:string) {
        this.tarefasService.excluir(id);
    }

}
