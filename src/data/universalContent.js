export const universalContent = {
  signos: {
    aries: {
      title: "Áries",
      symbol: "♈",
      subtitle: "A Força Primordial do Fogo e o Impulso Guerreiro",
      banner: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200",
      info: [
        { label: "Elemento", value: "Fogo" },
        { label: "Regente", value: "Marte" },
        { label: "Modalidade", value: "Cardinal" },
        { label: "Polaridade", value: "Masculina / Ativa" }
      ],
      sections: [
        { title: "A Essência do Guerreiro", content: "Áries representa o Big Bang do zodíaco. É o arquétipo do pioneiro, daquele que rasga a escuridão com a espada da vontade. Sob a regência de Marte, este signo manifesta a coragem bruta necessária para iniciar novos ciclos cósmicos." },
        { title: "Simbolismo Alquímico", content: "O glifo de Áries assemelha-se aos chifres de um carneiro, mas hermeticamente representa a fonte da vida brotando da terra, ou o jorro de sangue arterial que nutre o corpo místico do universo." }
      ],
      relatedCategory: "signos",
      relatedIds: ["touro", "gemeos"] // Aponta para outros nós da mesma categoria
    },
    touro: {
      title: "Touro",
      symbol: "♉",
      subtitle: "A Estabilidade da Matéria e o Templo dos Sentidos",
      banner: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200",
      info: [
        { label: "Elemento", value: "Terra" },
        { label: "Regente", value: "Vênus" },
        { label: "Modalidade", value: "Fixo" },
        { label: "Polaridade", value: "Feminina / Receptiva" }
      ],
      sections: [
        { title: "A Consolidação da Matéria", content: "Onde Áries inicia o fogo, Touro constrói o altar. Este arquétipo gerencia a paciência, a acumulação de energia vital e a sacralização do mundo tangível através dos cinco sentidos." }
      ],
      relatedCategory: "signos",
      relatedIds: ["aries", "gemeos"]
    },
    gemeos: {
      title: "Gêmeos",
      symbol: "♊",
      subtitle: "A Palavra Alada e o Fluxo Conectivo do Cosmos",
      banner: "https://images.unsplash.com/photo-1532968315712-a1f0d7016366?w=1200",
      info: [
        { label: "Elemento", value: "Ar" },
        { label: "Regente", value: "Mercúrio" },
        { label: "Modalidade", value: "Mutável" }
      ],
      sections: [{ title: "A Mente Conectiva", content: "O arquétipo do mensageiro, dividindo-se entre o mundo espiritual e o plano material." }],
      relatedCategory: "signos",
      relatedIds: ["aries", "touro"]
    }
  },
  
  // Exemplo de como a Goetia ou Tarot se encaixam EXATAMENTE na mesma estrutura futura:
  goetia: {
    bael: {
      title: "Bael",
      symbol: "🜏",
      subtitle: "O Primeiro Rei do Lemegeton",
      banner: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200",
      info: [
        { label: "Rank", value: "Rei" },
        { label: "Planeta", value: "Sol" },
        { label: "Metal", value: "Ouro" },
        { label: "Legiões", value: "66 Legiões" }
      ],
      sections: [
        { title: "Manifestação e Selo", content: "Bael se manifesta com voz rouca e possui a capacidade de conferir invisibilidade e sabedoria estratégica àqueles que compreendem sua assinatura geométrica." }
      ],
      relatedCategory: "goetia",
      relatedIds: ["agaress"] // Id de outra entidade da goetia que você criar
    }
  }
};