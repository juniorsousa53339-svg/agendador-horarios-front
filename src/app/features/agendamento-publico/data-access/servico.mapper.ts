import { Servico } from '../models/servico.model';
import { ServicoDto } from './servico.dto';

export function mapServicoDtoToModel(dto: ServicoDto): Servico {
  return {
    id: String(dto.id),
    nome: dto.nome_servico,
    duracaoMin: dto.duracao_minutos,
    preco: dto.valor,
    descricao: dto.descricao ?? undefined,
  };
}
