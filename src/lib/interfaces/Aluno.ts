import type { Avaliacao } from "./Avaliacao";
import type { Observacao } from "./Observacao";

export interface Aluno {
    id: number;
    nome: string;
    dataNascimento: Date;
    altura: number;
    peso: number;
    createdAt: Date;
    dominancia: string;
    avaliacoes: Avaliacao[];
    observacoes: Observacao[];
}

export const mockAlunos: Aluno[] = [
    // Aluno 1
    {
      id: 1,
      nome: "John Doe",
      dataNascimento: new Date("1990-01-01"),
      altura: 1.8,
      peso: 75,
      createdAt: new Date("2022-01-01"),
      dominancia: "Destro",
      avaliacoes: [
        {
          jogadorId: 1,
          data: new Date("2022-01-01"),
          agilidade: 8,
          velocidade: 7,
          passe: 9,
          conducao: 6,
          dominio: 10,
        },
        {
          jogadorId: 1,
          data: new Date("2022-02-01"),
          agilidade: 7,
          velocidade: 8,
          passe: 8,
          conducao: 7,
          dominio: 9,
        },
        {
          jogadorId: 1,
          data: new Date("2022-03-01"),
          agilidade: 9,
          velocidade: 9,
          passe: 10,
          conducao: 8,
          dominio: 8,
        },
      ],
      observacoes: [
        {
          observacao: "Excelente atleta",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Bom trabalho em equipe",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Precisa melhorar a técnica de passe",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 2
    {
      id: 2,
      nome: "Jane Smith",
      dataNascimento: new Date("1992-02-02"),
      altura: 1.7,
      peso: 65,
      createdAt: new Date("2022-01-01"),
      dominancia: "Canhoto",
      avaliacoes: [
        {
          jogadorId: 2,
          data: new Date("2022-01-01"),
          agilidade: 7,
          velocidade: 8,
          passe: 9,
          conducao: 7,
          dominio: 8,
        },
        {
          jogadorId: 2,
          data: new Date("2022-02-01"),
          agilidade: 8,
          velocidade: 9,
          passe: 10,
          conducao: 8,
          dominio: 9,
        },
        {
          jogadorId: 2,
          data: new Date("2022-03-01"),
          agilidade: 9,
          velocidade: 10,
          passe: 8,
          conducao: 9,
          dominio: 7,
        },
      ],
      observacoes: [
        {
          observacao: "Ótima atleta",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a resistência",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Bom trabalho em equipe",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 3
    {
      id: 3,
      nome: "Carlos Oliveira",
      dataNascimento: new Date("1995-05-15"),
      altura: 1.75,
      peso: 70,
      createdAt: new Date("2022-01-01"),
      dominancia: "Destro",
      avaliacoes: [
        {
          jogadorId: 3,
          data: new Date("2022-01-01"),
          agilidade: 6,
          velocidade: 7,
          passe: 8,
          conducao: 7,
          dominio: 7,
        },
        {
          jogadorId: 3,
          data: new Date("2022-02-01"),
          agilidade: 7,
          velocidade: 8,
          passe: 7,
          conducao: 8,
          dominio: 8,
        },
        {
          jogadorId: 3,
          data: new Date("2022-03-01"),
          agilidade: 8,
          velocidade: 9,
          passe: 9,
          conducao: 7,
          dominio: 9,
        },
      ],
      observacoes: [
        {
          observacao: "Bom desenvolvimento",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a agilidade",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Bom controle de bola",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 4
    {
      id: 4,
      nome: "Ana Clara",
      dataNascimento: new Date("1998-03-22"),
      altura: 1.65,
      peso: 60,
      createdAt: new Date("2022-01-01"),
      dominancia: "Canhoto",
      avaliacoes: [
        {
          jogadorId: 4,
          data: new Date("2022-01-01"),
          agilidade: 8,
          velocidade: 8,
          passe: 9,
          conducao: 6,
          dominio: 8,
        },
        {
          jogadorId: 4,
          data: new Date("2022-02-01"),
          agilidade: 7,
          velocidade: 7,
          passe: 8,
          conducao: 8,
          dominio: 9,
        },
        {
          jogadorId: 4,
          data: new Date("2022-03-01"),
          agilidade: 9,
          velocidade: 9,
          passe: 9,
          conducao: 8,
          dominio: 8,
        },
      ],
      observacoes: [
        {
          observacao: "Ótima performance",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a condução",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Bom passe",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 5
    {
      id: 5,
      nome: "Lucas Mendes",
      dataNascimento: new Date("1993-07-30"),
      altura: 1.8,
      peso: 78,
      createdAt: new Date("2022-01-01"),
      dominancia: "Destro",
      avaliacoes: [
        {
          jogadorId: 5,
          data: new Date("2022-01-01"),
          agilidade: 6,
          velocidade: 7,
          passe: 8,
          conducao: 7,
          dominio: 7,
        },
        {
          jogadorId: 5,
          data: new Date("2022-02-01"),
          agilidade: 7,
          velocidade: 8,
          passe: 7,
          conducao: 8,
          dominio: 8,
        },
        {
          jogadorId: 5,
          data: new Date("2022-03-01"),
          agilidade: 8,
          velocidade: 9,
          passe: 9,
          conducao: 7,
          dominio: 9,
        },
      ],
      observacoes: [
        {
          observacao: "Bom jogador",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a velocidade",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Boa técnica",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 6
    {
      id: 6,
      nome: "Mariana Santos",
      dataNascimento: new Date("1996-11-11"),
      altura: 1.6,
      peso: 55,
      createdAt: new Date("2022-01-01"),
      dominancia: "Canhoto",
      avaliacoes: [
        {
          jogadorId: 6,
          data: new Date("2022-01-01"),
          agilidade: 9,
          velocidade: 8,
          passe: 8,
          conducao: 9,
          dominio: 7,
        },
        {
          jogadorId: 6,
          data: new Date("2022-02-01"),
          agilidade: 8,
          velocidade: 7,
          passe: 7,
          conducao: 8,
          dominio: 8,
        },
        {
          jogadorId: 6,
          data: new Date("2022-03-01"),
          agilidade: 7,
          velocidade: 9,
          passe: 9,
          conducao: 7,
          dominio: 9,
        },
      ],
      observacoes: [
        {
          observacao: "Excelente desempenho",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a resistência",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Boa condução de bola",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 7
    {
      id: 7,
      nome: "Pedro Costa",
      dataNascimento: new Date("1997-09-14"),
      altura: 1.82,
      peso: 80,
      createdAt: new Date("2022-01-01"),
      dominancia: "Destro",
      avaliacoes: [
        {
          jogadorId: 7,
          data: new Date("2022-01-01"),
          agilidade: 7,
          velocidade: 7,
          passe: 8,
          conducao: 8,
          dominio: 8,
        },
        {
          jogadorId: 7,
          data: new Date("2022-02-01"),
          agilidade: 6,
          velocidade: 8,
          passe: 7,
          conducao: 7,
          dominio: 9,
        },
        {
          jogadorId: 7,
          data: new Date("2022-03-01"),
          agilidade: 8,
          velocidade: 9,
          passe: 9,
          conducao: 9,
          dominio: 9,
        },
      ],
      observacoes: [
        {
          observacao: "Bom controle de bola",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a agilidade",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Boa velocidade",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 8
    {
      id: 8,
      nome: "Juliana Pereira",
      dataNascimento: new Date("1994-06-18"),
      altura: 1.68,
      peso: 62,
      createdAt: new Date("2022-01-01"),
      dominancia: "Canhoto",
      avaliacoes: [
        {
          jogadorId: 8,
          data: new Date("2022-01-01"),
          agilidade: 8,
          velocidade: 8,
          passe: 9,
          conducao: 6,
          dominio: 8,
        },
        {
          jogadorId: 8,
          data: new Date("2022-02-01"),
          agilidade: 7,
          velocidade: 7,
          passe: 8,
          conducao: 8,
          dominio: 9,
        },
        {
          jogadorId: 8,
          data: new Date("2022-03-01"),
          agilidade: 9,
          velocidade: 9,
          passe: 9,
          conducao: 8,
          dominio: 8,
        },
      ],
      observacoes: [
        {
          observacao: "Boa habilidade técnica",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a velocidade",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Bom trabalho em equipe",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 9
    {
      id: 9,
      nome: "Rafael Lima",
      dataNascimento: new Date("1999-12-21"),
      altura: 1.85,
      peso: 77,
      createdAt: new Date("2022-01-01"),
      dominancia: "Destro",
      avaliacoes: [
        {
          jogadorId: 9,
          data: new Date("2022-01-01"),
          agilidade: 7,
          velocidade: 8,
          passe: 9,
          conducao: 6,
          dominio: 8,
        },
        {
          jogadorId: 9,
          data: new Date("2022-02-01"),
          agilidade: 8,
          velocidade: 9,
          passe: 10,
          conducao: 7,
          dominio: 9,
        },
        {
          jogadorId: 9,
          data: new Date("2022-03-01"),
          agilidade: 9,
          velocidade: 9,
          passe: 10,
          conducao: 8,
          dominio: 8,
        },
      ],
      observacoes: [
        {
          observacao: "Bom controle de bola",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a velocidade",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Bom passe",
          data: new Date("2022-03-01"),
        },
      ],
    },
    // Aluno 10
    {
      id: 10,
      nome: "Gabriela Silva",
      dataNascimento: new Date("1991-10-05"),
      altura: 1.72,
      peso: 68,
      createdAt: new Date("2022-01-01"),
      dominancia: "Canhoto",
      avaliacoes: [
        {
          jogadorId: 10,
          data: new Date("2022-01-01"),
          agilidade: 8,
          velocidade: 7,
          passe: 9,
          conducao: 6,
          dominio: 8,
        },
        {
          jogadorId: 10,
          data: new Date("2022-02-01"),
          agilidade: 7,
          velocidade: 7,
          passe: 8,
          conducao: 8,
          dominio: 9,
        },
        {
          jogadorId: 10,
          data: new Date("2022-03-01"),
          agilidade: 9,
          velocidade: 9,
          passe: 9,
          conducao: 8,
          dominio: 8,
        },
      ],
      observacoes: [
        {
          observacao: "Boa jogadora",
          data: new Date("2022-01-01"),
        },
        {
          observacao: "Precisa melhorar a técnica",
          data: new Date("2022-02-01"),
        },
        {
          observacao: "Bom domínio de bola",
          data: new Date("2022-03-01"),
        },
      ],
    }
  ];
  