
// Aqui é o modelo que a UI consome
export interface Servico {
  id: string;
  nome: string;
  duracaoMin: number;
  preco: number;
  descricao?: string;
}
