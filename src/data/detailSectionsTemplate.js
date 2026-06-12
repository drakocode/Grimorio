/*
 * DetailSection Data Template
 * Use este template para adicionar dados de seções de detalhe em qualquer página detail
 *
 * Estrutura:
 * - tag: Tag técnica (ex: "[I. SEÇÃO]")
 * - title: Título da seção
 * - type: "text", "list", "grid", ou "custom"
 * - content: Conteúdo (para type="text")
 * - items: Array de items (para type="list" ou type="grid")
 */

// Exemplo para Arcana (Tarot)
export const arcanaDetailSections = [
  {
    tag: "[I. INTERPRETAÇÃO_DIRETA]",
    title: "Significado Direto",
    type: "text",
    content: "Adicione aqui o significado direto do arcano quando ele aparece em posição positiva..."
  },
  {
    tag: "[II. INTERPRETAÇÃO_REVERSA]",
    title: "Significado Reverso",
    type: "text",
    content: "Adicione aqui o significado reverso do arcano quando ele aparece invertido..."
  },
  {
    tag: "[III. CORRESPONDÊNCIAS_EXPANDIDAS]",
    title: "Correspondências Esotéricas",
    type: "grid",
    items: [
      { label: "NÚMERO", value: "Será preenchido dinamicamente" },
      { label: "ELEMENTO", value: "Será preenchido dinamicamente" },
      { label: "ASTROLOGIA", value: "Será preenchido dinamicamente" }
    ]
  },
  {
    tag: "[IV. POSIÇÕES_COMUNS]",
    title: "Significado em Diferentes Posições",
    type: "list",
    items: [
      "Posição de Passado: O que já ocorreu ou influências prévias...",
      "Posição de Presente: A situação atual ou desafio imediato...",
      "Posição de Futuro: Possíveis outcomes ou desenvolvimentos futuros..."
    ]
  }
];

// Exemplo para Daemon (Goetia)
export const daemonDetailSections = [
  {
    tag: "[I. MANIFESTAÇÃO_VISUAL]",
    title: "Como o Daemon se Manifesta",
    type: "text",
    content: "Descrição de como o daemon aparece fisicamente ou energeticamente..."
  },
  {
    tag: "[II. ÁREAS_DE_INFLUÊNCIA]",
    title: "Domínios de Atuação",
    type: "list",
    items: [
      "Primeiro domínio de influência",
      "Segundo domínio de influência",
      { title: "Domínio Especial", text: "Descrição de um domínio específico" }
    ]
  },
  {
    tag: "[III. PRECAUÇÕES_ESSENCIAIS]",
    title: "Cuidados na Evocação",
    type: "list",
    items: [
      "Precaução 1: Sempre manter o círculo fechado",
      "Precaução 2: Nunca fazer promessas que não pode cumprir",
      { title: "Proteção Mágica", text: "Use símblos de proteção pessoal" }
    ]
  }
];

// Exemplo para Anjo (Cabala)
export const anjoDetailSections = [
  {
    tag: "[I. QUALIDADES_DIVINAS]",
    title: "Qualidades e Atributos",
    type: "text",
    content: "As qualidades e atributos especiais deste anjo na hierarquia celestial..."
  },
  {
    tag: "[II. COMO_INVOCAR]",
    title: "Métodos de Invocação",
    type: "list",
    items: [
      "Melhor hora para invocação: período específico do dia",
      "Oferendas apropriadas: incensos, velas, etc",
      { title: "Mantras", text: "Nomes sagrados ou vibrações a usar" }
    ]
  },
  {
    tag: "[III. BENEFÍCIOS_ESPERADOS]",
    title: "Benefícios da Conexão",
    type: "list",
    items: [
      "Primeiro benefício potencial",
      "Segundo benefício potencial",
      "Terceiro benefício potencial"
    ]
  }
];

// Exemplo para Planeta (Astrologia)
export const planetDetailSections = [
  {
    tag: "[I. ENERGIA_PLANETÁRIA]",
    title: "Natureza Energética",
    type: "text",
    content: "A natureza fundamental e energia planetária, seu impacto psicológico e espiritual..."
  },
  {
    tag: "[II. CICLOS_ASTROLÓGICOS]",
    title: "Ciclos e Períodos",
    type: "grid",
    items: [
      { label: "CICLO_ORBITAL", value: "Tempo de revolução" },
      { label: "PERÍODO_RETRÓGRADO", value: "Quando e por quanto tempo" },
      { label: "PONTO_DE_EXALTAÇÃO", value: "Signo de maior força" }
    ]
  },
  {
    tag: "[III. INFLUÊNCIA_ZODIACAL]",
    title: "Influência nos Signos",
    type: "list",
    items: [
      "Em Áries: Descrição específica da influência",
      "Em Touro: Descrição específica da influência",
      "Em Gêmeos: Descrição específica da influência"
    ]
  }
];

// Exemplo para Sephirah (Árvore da Vida)
export const sephirahDetailSections = [
  {
    tag: "[I. FLUXO_ENERGÉTICO]",
    title: "Fluxo de Energia Divina",
    type: "text",
    content: "Como a energia divina flui através desta sephirah e sua função na hierarquia..."
  },
  {
    tag: "[II. CORRESPONDÊNCIAS_COMPLETAS]",
    title: "Mapas de Correspondência",
    type: "grid",
    items: [
      { label: "DIVINDADE", value: "Será preenchido dinamicamente" },
      { label: "ARCANJO", value: "Será preenchido dinamicamente" },
      { label: "PLANETA", value: "Será preenchido dinamicamente" },
      { label: "VIRTUDE", value: "Virtude associada" }
    ]
  },
  {
    tag: "[III. PRÁTICAS_MEDITATIVAS]",
    title: "Técnicas de Acesso",
    type: "list",
    items: [
      "Meditação: Visualize a cor da sephirah",
      "Vibração: Intone o nome divino associado",
      { title: "Ritual", text: "Executar ritual específico para ativar a esfera" }
    ]
  }
];

// Exemplo para Qlipha (Árvore da Morte)
export const qliphahDetailSections = [
  {
    tag: "[I. NATUREZA_ABISSAL]",
    title: "Essência Abissal",
    type: "text",
    content: "A natureza destrutiva e caótica desta qlipha e suas manifestações negativas..."
  },
  {
    tag: "[II. PROTEÇÃO_CONTRA_INFLUÊNCIAS]",
    title: "Defesa contra Forças Negativas",
    type: "list",
    items: [
      "Proteção 1: Escudo energético específico",
      "Proteção 2: Invocação de poderes opostos",
      { title: "Ritual de Purificação", text: "Executar para remover influências" }
    ]
  },
  {
    tag: "[III. TRANSMUTAÇÃO_EVOLUTIVA]",
    title: "Transformação Consciente",
    type: "list",
    items: [
      "Reconhecer o padrão negativo",
      "Transformar em energia construtiva",
      "Elevar a vibração através da consciência"
    ]
  }
];

// Exemplo para Signo (Astrologia)
export const signDetailSections = [
  {
    tag: "[I. ARQUÉTIPO_PSICOLÓGICO]",
    title: "Psicologia e Caráter",
    type: "text",
    content: "O arquétipo psicológico e características de personalidade tipicamente associadas..."
  },
  {
    tag: "[II. COMPATIBILIDADES]",
    title: "Afinidades Astrológicas",
    type: "grid",
    items: [
      { label: "SIGNO_COMPATÍVEL_1", value: "Melhor afinidade" },
      { label: "SIGNO_COMPATÍVEL_2", value: "Boa afinidade" },
      { label: "SIGNO_DESAFIADOR", value: "Requer mais trabalho" }
    ]
  },
  {
    tag: "[III. PERÍODOS_SIGNIFICATIVOS]",
    title: "Momentos-Chave no Ano",
    type: "list",
    items: [
      "Período Solar: Quando o signo está mais ativo",
      "Trânsito Lunar: Influência quando a Lua passa",
      "Retrogradi Planetária: Impactos especiais durante retrogressão"
    ]
  }
];

// Exemplo para Minor Arcana
export const minorArcanaDetailSections = [
  {
    tag: "[I. SIGNIFICADO_NUMEROLÓGICO]",
    title: "Vibração Numérica",
    type: "text",
    content: "O significado numerológico e vibração do número do arcano menor..."
  },
  {
    tag: "[II. INFLUÊNCIA_ELEMENTAL]",
    title: "Força Elemental",
    type: "grid",
    items: [
      { label: "ELEMENTO", value: "Será preenchido dinamicamente" },
      { label: "NAIPE", value: "Será preenchido dinamicamente" },
      { label: "ENERGIA", value: "Tipo de energia manifestada" }
    ]
  },
  {
    tag: "[III. INTERPRETAÇÃO_PRÁTICA]",
    title: "Uso em Leituras",
    type: "list",
    items: [
      "Em contextos de amor e relacionamentos",
      "Em questões financeiras e materiais",
      "Em desenvolvimento pessoal e espiritual"
    ]
  }
];
