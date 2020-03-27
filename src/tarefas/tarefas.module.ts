import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './shared/tarefas.service';
import { TarefaSchema } from './schemas/tarefas.schemas';
import { from } from 'rxjs';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Tarefa', schema: TarefaSchema}])
    ],
    controllers: [TarefasController],
    providers: [TarefasService]
})
export class TarefasModule {}
