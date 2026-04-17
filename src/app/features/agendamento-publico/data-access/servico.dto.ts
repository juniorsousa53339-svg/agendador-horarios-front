export interface ServicoDto {
  id: number;
  nome_servico: string;     // exemplo de inconsistência de backend
  duracao_minutos: number;
  valor: number;
  descricao?: string | null;
}
