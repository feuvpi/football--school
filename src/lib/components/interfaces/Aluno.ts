import type { Avaliacao } from "./Avaliacao";
import type { Observacao } from "./Observacao";

export interface jogador {
    id: number;
    nome: string;
    dataNascimento: Date;
    altura: number;
    peso: number;
    dominancia: string;
    avaliacoes: Avaliacao[];
    observacoes: Observacao[];
}