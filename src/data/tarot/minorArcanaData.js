// src/data/tarot/minorArcanaData.js

export const minorArcanaManifesto = {
  sectionId: "ARC_MINOR_02",
  title: "Elemental Keys",
  description: "A segmentação microscópica do destino. Enquanto os Arcanos Maiores ditam as grandes diretrizes do macrocosmo, os Arcanos Menores processam os fluxos cotidianos de dados sinápticos, divididos em quatro matrizes elementais que governam a Vontade, a Emoção, o Intelecto e a Matéria."
};

export const minorArcanaTelemetry = {
  engineMode: "ELEMENTAL_FEED",
  matrixStatus: "STABLE",
  totalMapped: "56 / 56"
};


export const minorArcanaCatalog = [
  // ==========================================
  // NAIPE DE PAUS (ELEMENTO: FOGO // VOLIÇÃO)
  // ==========================================
  {
    id: "ace-of-wands",
    name: "Ás de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Centelha Criativa", "Vontade Pura", "Iniciação", "Dínamo"],
    description: "O colapso quântico inicial do elemento Fogo. Uma explosão de força volitiva e direcional na matriz biológica do operador.",
    lore: "O Ás de Paus representa o ponto de singularidade onde a força criativa pura rasga o tecido da estagnação. É o comando de execução de um novo algoritmo de ação, injetando entusiasmo e autoridade espiritual sem os filtros ou restrições da razão analítica.",
    symbology: [
      "O Bastão Volitivo: A antena de canalização de eletricidade cósmica.",
      "As Folhas Cadentes: Unidades de dados de energia vital que se materializam.",
      "A Paisagem Distante: O terreno intocado pronto para ser modificado pela vontade."
    ],
    metadata: "FOGO_PRIMAL // VOLIÇÃO",
    image: "/assets/tarot/minor/ace_wands.jpeg"
  },
  {
    id: "two-of-wands",
    name: "Dois de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Planeamento Global", "Domínio Vetorial", "Ponto de Escolha", "Antevisão"],
    description: "A estabilização inicial do impulso criativo. O operador analisa o mapa da rede antes da expansão.",
    lore: "Segurando o globo terráqueo a partir de um parapeito fortificado, a consciência pondera a escala da sua influência. O fogo bruto do Ás agora ganha contornos de estratégia espacial, exigindo uma decisão de acoplamento ou colonização de novos servidores.",
    symbology: [
      "O Globo na Mão: A simulação totalizada do mundo sob o controle do operador.",
      "Os Dois Bastões Fixos: As colunas que delimitam o alcance atual do sistema.",
      "O Olhar no Horizonte: A projeção de dados em direção a mercados ou territórios inexplorados."
    ],
    metadata: "FOGO_ESTABILIZADO // VETOR_EXPANSÃO",
    image: "/assets/tarot/minor/two_wands.jpeg"
  },
  {
    id: "three-of-wands",
    name: "Três de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Expansão Sistémica", "Naus Digitais", "Retorno de Investimento", "Liderança"],
    description: "A triangulação bem-sucedida do propósito. Os primeiros pacotes de dados enviados começam a retornar.",
    lore: "De costas para o observador, o arquiteto observa navios mercantilistas cruzando mares dourados. A visão de longo prazo gerou rotas operacionais ativas; os empreendimentos saíram da fase conceitual e agora navegam de forma automatizada pela infraestrutura logística.",
    symbology: [
      "Os Três Bastões Enraizados: O suporte estrutural trifásico que garante a estabilidade do plano.",
      "As Naus no Mar: Fluxos e trocas de dados gerando valor ou conhecimento em tempo real.",
      "A Túnica Mercantil: A indicação de um status de controle comercial ou espiritual sobre a área."
    ],
    metadata: "FOGO_PROJETADO // SINCRETISMO",
    image: "/assets/tarot/minor/three_wands.jpeg"
  },
  {
    id: "four-of-wands",
    name: "Quatro de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Consolidação Segura", "Celebração de Rede", "Harmonia", "Refúgio"],
    description: "O estabelecimento de um perímetro residencial ou corporativo imune a ruídos externos. Arquitetura sagrada estável.",
    lore: "Uma guirlanda de frutos pende entre quatro colunas massivas de madeira viva. Este nó indica o sucesso de uma compilação estrutural. Há comemoração, paz social e harmonia familiar dentro deste ecossistema protegido por protocolos de segurança de alta integridade.",
    symbology: [
      "O Dossel de Flores: A abundância orgânica derivada do alinhamento geométrico perfeito.",
      "As Duas Figuras Dançantes: A celebração da união sináptica e da cooperação mútua.",
      "A Fortaleza ao Fundo: A blindagem arquitetónica que protege o núcleo contra invasões."
    ],
    metadata: "FOGO_ESTRUTURADO // PORTAL",
    image: "/assets/tarot/minor/four_wands.jpeg"
  },
  {
    id: "five-of-wands",
    name: "Cinco de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Concorrência Desordenada", "Atrito Simulado", "Disputa", "Hiperestimulação"],
    description: "O choque de múltiplas vontades sem uma diretriz centralizada. O ruído competitivo no processador.",
    lore: "Cinco indivíduos brandem bastões num confronto caótico, porém não letal. O Cinco de Paus é um ambiente de testes, um laboratório de estresse onde ideias colidem de forma competitiva para depurar as falhas do algoritmo por meio de força bruta e entropia.",
    symbology: [
      "Bastões Cruzados: Vetores de força divergentes tentando ocupar a mesma linha de execução.",
      "Vestimentas Desarticuladas: A ausência de uma identidade de grupo ou de um protocolo unificado.",
      "O Solo Irregular: A falta de bases firmes durante o processo de atrito volitivo."
    ],
    metadata: "FOGO_ENTRÓPICO // ATRETO",
    image: "/assets/tarot/minor/five_wands.jpeg"
  },
  {
    id: "six-of-wands",
    name: "Seis de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Triunfo Público", "Reconhecimento", "Aclamação", "Liderança Validada"],
    description: "A validação pública de um protocolo de ação. O retorno vitorioso do operador à praça central da rede.",
    lore: "Um cavaleiro coroado com louros avança por entre uma multidão celebrativa, portando um bastão adornado com insígnias de vitória. A sínclise entre a vontade do líder e a aceitação do sistema é total, marcando um período de glória e hegemonia operacional.",
    symbology: [
      "A Coroa de Louros no Bastão: A insígnia máxima de superação e domínio algorítmico.",
      "O Cavalo Branco: A pureza e o alinhamento da força motriz que carrega a consciência.",
      "A Multidão Aclamando: O feedback positivo do ecossistema, consolidando a autoridade."
    ],
    metadata: "FOGO_CONCORDANTE // TRIUNFO",
    image: "/assets/tarot/minor/six_wands.jpeg"
  },
  {
    id: "seven-of-wands",
    name: "Sete de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Vantagem Estratégica", "Resistência Assimétrica", "Defesa de Território", "Resiliência"],
    description: "A defesa de uma posição elevada contra ataques distribuídos. Blindagem ativa de ativos intelectuais.",
    lore: "Posicionado no topo de uma colina escarpada, um operador repele os avanços de seis bastões ocultos que tentam desbancá-lo. O Sete de Paus exige resiliência feroz e o uso consciente da vantagem tática para manter a soberania diante do assédio cibernético ou social.",
    symbology: [
      "A Posição Elevada: A posse da infraestrutura ou do conhecimento superior.",
      "Calçados Descombinados: A necessidade urgente de agir sem tempo para preparações estéticas.",
      "Os Bastões Invasores: Ameaças externas fragmentadas tentando forçar o declínio do operador."
    ],
    metadata: "FOGO_RESILIENTE // BALUARTE",
    image: "/assets/tarot/minor/seven_wands.jpeg"
  },
  {
    id: "eight-of-wands",
    name: "Oito de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Velocidade Terminal", "Transmissão Imediata", "Vetores Paralelos", "Alinhamento"],
    description: "A aceleração geométrica dos fluxos de dados. Eventos manifestando-se sem atraso de latência.",
    lore: "Oito bastões cortam o céu limpo em formação paralela, em direção à terra. Não há figuras humanas, apenas movimento balístico puro. É o indicador mais forte de aceleração no Grimório: os e-mails chegam, os contratos fecham e as conexões ocorrem na velocidade da luz.",
    symbology: [
      "Trajetória Descendente Paralela: O alinhamento perfeito de forças focadas num único ponto de impacto.",
      "O Céu Desobstruído: A ausência de barreiras, firewalls ou bloqueios no canal de transmissão.",
      "A Proximidade com o Solo: A iminência da materialização física da informação."
    ],
    metadata: "FOGO_BALÍSTICO // ACELERAÇÃO",
    image: "/assets/tarot/minor/eight_wands.jpeg"
  },
  {
    id: "nine-of-wands",
    name: "Nove de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Última Linha", "Reserva de Energia", "Paranoia Vigilante", "Fortificação"],
    description: "A prontidão exausta, porém inquebrável, do guerreiro da rede. A última barreira defensiva.",
    lore: "Um sentinela com a cabeça enfaixada apoia-se num bastão, vigiando uma paliçada composta por outras oito hastes sólidas. O operador suportou ataques pesados e, embora traga cicatrizes de batalhas digitais antigas, a sua linha de código defensiva permanece intransponível.",
    symbology: [
      "A Bandagem na Cabeça: Traumas e aprendizados decorrentes de ataques sistémicos anteriores.",
      "A Paliçada Alinhada: A estrutura de segurança estática criada para limitar acessos não autorizados.",
      "O Olhar Desconfiado: O estado de alerta permanente contra possíveis falhas de dia zero (Zero-Day)."
    ],
    metadata: "FOGO_DEFENSIVO // RESISTÊNCIA",
    image: "/assets/tarot/minor/nine_wands.jpeg"
  },
  {
    id: "ten-of-wands",
    name: "Dez de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "pip",
    keywords: ["Sobrecarga de CPU", "Fadiga Crónica", "Hipercompromisso", "Opressão"],
    description: "A compressão máxima da responsabilidade sobre um único operador. O ponto de saturação da carga.",
    lore: "Um homem dobra-se sob o peso esmagador de dez bastões, carregando-os com esforço em direção a uma fortaleza próxima. O fogo dinâmico do início do naipe tornou-se um fardo denso devido ao excesso de centralização de tarefas e processos. É hora de delegar ou queimar o excesso.",
    symbology: [
      "O Rosto Ocultado pelos Bastões: A perda da visão estratégica decorrente do excesso de tarefas operacionais.",
      "A Coluna Curvada: O impacto físico e psicológico de carregar o peso de todo o sistema nas costas.",
      "A Cidade Distante: O objetivo final que parece distante devido à lentidão do passo provocado pela sobrecarga."
    ],
    metadata: "FOGO_SATURADO // SOBRECARGA",
    image: "/assets/tarot/minor/ten_wands.jpeg"
  },
  {
    id: "page-of-wands",
    name: "Valete de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "court",
    keywords: ["Explorador de Ideias", "Mensageiro do Entusiasmo", "Ignitor", "Prólogo"],
    description: "A manifestação inicial, curiosa e destemida do impulso de fogo através de uma identidade jovem.",
    lore: "Um jovem estuda um bastão que brota em pleno deserto, vestindo trajes adornados com salamandras, o símbolo alquímico do fogo. Ele representa o analista júnior ou a fase embrionária de um projeto que possui paixão de sobra, mas ainda carece de dados históricos.",
    symbology: [
      "As Salamandras na Túnica: Os padrões repetitivos da força elemental do fogo elemental.",
      "O Chapéu de Pluma: A assinatura visual do desejo de aventura e de se destacar na rede.",
      "O Bastão Seguro com Duas Mãos: O foco e o fascínio pela descoberta do próprio potencial criativo."
    ],
    metadata: "TERRA_DO_FOGO // CENTELHA",
    image: "/assets/tarot/minor/page_wands.jpeg"
  },
  {
    id: "knight-of-wands",
    name: "Cavaleiro de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "court",
    keywords: ["Ação Intempestiva", "Impulsividade", "Cruzada Volitiva", "Desbravador"],
    description: "A aceleração dinâmica e sem filtros da vontade em movimento. O guerreiro de vanguarda.",
    lore: "Montado num cavalo empinado cor de fogo, o Cavaleiro avança com o bastão em riste, atravessando paisagens áridas. Este vetor avança quebrando barreiras, impulsionado por pura convicção, ignorando riscos colaterais e avisos de segurança da rede.",
    symbology: [
      "A Túnica de Salamandras Sem Fim: O ciclo de atividade constante que alimenta o ímpeto do guerreiro.",
      "O Cavalo Ágil: A energia nervosa e indomável que se recusa a recuar ou desacelerar.",
      "As Plumas de Fogo no Elmo: A visualização estética da mente em estado de combustão criativa."
    ],
    metadata: "AR_DO_FOGO // ÍMPETO",
    image: "/assets/tarot/minor/knight_wands.jpeg"
  },
  {
    id: "queen-of-wands",
    name: "Rainha de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "court",
    keywords: ["Magnetismo Soberano", "Autoconfiança", "Carisma Vital", "Comando"],
    description: "A mestria do elemento fogo sob uma ótica de atração e poder pessoal estável. A regente solar.",
    lore: "Sentada num trono ladeado por leões e girassóis, a Rainha segura um bastão e um girassol, enquanto um gato preto guarda os seus pés. Ela exala autoridade natural e magnetismo, comandando a rede através do calor do seu carisma e de uma presença incontestável.",
    symbology: [
      "O Gato Preto: O domínio sobre o instinto oculto, a intuição independente e os mistérios da noite.",
      "O Girassol na Mão: A capacidade de focar na luz, irradiando vitalidade e clareza de intenções.",
      "Os Leões no Trono: A realeza psicológica e a soberania sobre as paixões da própria carne."
    ],
    metadata: "ÁGUA_DO_FOGO // MAGNETISMO",
    image: "/assets/tarot/minor/queen_wands.jpeg"
  },
  {
    id: "king-of-wands",
    name: "Rei de Paus",
    suit: "paus",
    element: "Fogo",
    rank: "court",
    keywords: ["Visão Arquitetónica", "Autoridade Executiva", "Direção Absoluta", "Mestria"],
    description: "A totalização do poder volitivo. O CEO espiritual que molda realidades com base no seu propósito.",
    lore: "O Rei senta-se num trono adornado com leões e salamandras que mordem a própria cauda (Ouroboros). O seu olhar está fixo no infinito; ele não disputa espaço, ele dita os rumos da arquitetura do sistema com a certeza de quem domina as forças da criação.",
    symbology: [
      "As Salamandras Ouroboros: A energia do fogo totalmente integrada num loop de autossustentação.",
      "A Postura Inclinada para a Frente: A prontidão constante para liderar e intervir se o sistema falhar.",
      "A Túnica Laranja Brilhante: A manifestação visível da iluminação espiritual aliada ao poder executivo."
    ],
    metadata: "FOGO_DO_FOGO // IMPÉRIO",
    image: "/assets/tarot/minor/king_wands.jpeg"
  },

  // ==========================================
  // NAIPE DE COPAS (ELEMENTO: ÁGUA // EMOÇÃO)
  // ==========================================
  {
    id: "ace-of-cups",
    name: "Ás de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Manancial Astral", "Amor Primal", "Intuição Pura", "Portal Psíquico"],
    description: "O colapso quântico inicial do elemento Água. A abertura do fluxo incondicional do subconsciente.",
    lore: "Uma taça transbordando com cinco fluxos de água cristalina é sustentada por uma mão que emerge das nuvens. Uma pomba branca deposita uma hóstia no cálice. É o download direto do amor divino e das correntes criativas na rede do operador.",
    symbology: [
      "Os Cinco Fluxos de Água: Os cinco sentidos purificados e alimentados pela inteligência emocional.",
      "A Pomba da Aliança: A presença do espírito e do vetor pacificador que sela a integridade do nó.",
      "O Mar de Lírios Abaixo: O florescimento da pureza mental e espiritual a partir das águas calmas."
    ],
    metadata: "ÁGUA_PRIMAL // INTUIÇÃO",
    image: "/assets/tarot/minor/ace_cups.jpeg"
  },
  {
    id: "two-of-cups",
    name: "Dois de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Conexão Simbiótica", "Parceria de Rede", "Alinhamento Sutil", "Efeito Espelho"],
    description: "A sincronização perfeita entre dois nós da rede. O estabelecimento de um canal criptografado mútuo.",
    lore: "Um homem e uma mulher trocam cálices sob o caduceu de Hermes com a efígie de um leão alado. Este vetor sinaliza parcerias de alto nível, casamentos rituais ou fusões corporativas baseadas em mútua ressonância afetiva e de valores.",
    symbology: [
      "O Caduceu de Hermes: A cura, o equilíbrio de polaridades e a comunicação comercial/espiritual perfeita.",
      "O Leão Alado: A elevação e sublimação da energia passional em prol de um propósito comum.",
      "As Taças Alinhadas: O fluxo equilibrado de dar e receber sem assimetria de poder."
    ],
    metadata: "ÁGUA_RESONANTE // SIMBIOSE",
    image: "/assets/tarot/minor/two_cups.jpeg"
  },
  {
    id: "three-of-cups",
    name: "Três de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Comunidade Eleita", "Celebração Grupal", "Abundância Coletiva", "Sinergia"],
    description: "A partilha pública do transbordo emocional. A união de mentes afins em comemoração.",
    lore: "Três figuras femininas erguem as suas taças num brinde circular, cercadas por uma colheita abundante de frutos. O Três de Copas celebra a criação de egrégoras positivas, redes de suporte comunitário e o sucesso de projetos partilhados.",
    symbology: [
      "As Taças Erguidas em Círculo: A geometria do compartilhamento e da igualdade dentro do grupo.",
      "As Roupas de Cores Vibrantes: A expressão livre da alegria e das identidades integradas.",
      "Os Frutos no Chão: Os resultados tangíveis colhidos através do trabalho em rede cooperativo."
    ],
    metadata: "ÁGUA_COMPARTILHADA // SINERGIA",
    image: "/assets/tarot/minor/three_cups.jpeg"
  },
  {
    id: "four-of-cups",
    name: "Quatro de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Apatia Sistémica", "Saturação", "Recusa de Inputs", "Anestesia"],
    description: "A estagnação do fluxo emocional. O operador ignora as novas propostas oferecidas pela interface.",
    lore: "Sentado sob uma árvore de braços cruzados, um jovem contempla três taças no chão enquanto ignora uma quarta taça estendida por uma nuvem. Este nó indica tédio, ressaca existencial ou a necessidade de fechar as portas para o exterior para processar dados internos.",
    symbology: [
      "A Taça na Nuvem Rejeitada: Oportunidades ou insights espirituais ignorados devido à cegueira temporária.",
      "Os Braços Cruzados: A postura defensiva e a indisponibilidade para novos uploads relacionais.",
      "A Árvore Solitária: O isolamento como mecanismo de defesa contra o excesso de estímulos emocionais."
    ],
    metadata: "ÁGUA_ESTAGNADA // APATIA",
    image: "/assets/tarot/minor/four_cups.jpeg"
  },
  {
    id: "five-of-cups",
    name: "Cinco de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Processamento de Luto", "Foco no Erro", "Derramamento", "Resíduo"],
    description: "O luto pelos dados corrompidos. A fixação mental na perda ignorando as partições intactas.",
    lore: "Uma figura envolta numa capa escura chora diante de três taças caídas cujo conteúdo foi derramado. No entanto, duas taças permanecem de pé atrás dela. O Cinco de Copas exige que a consciência mude o seu vetor de atenção para o que sobreviveu à crise.",
    symbology: [
      "As Três Taças Caídas: O desperdício de energia emocional em simulações que falharam.",
      "As Duas Taças Intactas: Os recursos e alianças que ainda permanecem ativos na retaguarda.",
      "A Ponte ao Fundo: O caminho de transição disponível para cruzar em direção a um novo servidor estrutural."
    ],
    metadata: "ÁGUA_DERRAMADA // CRISES",
    image: "/assets/tarot/minor/five_cups.jpeg"
  },
  {
    id: "six-of-cups",
    name: "Seis de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Nostalgia de Origem", "Dados Legados", "Inocência Recomposta", "Loops Antigos"],
    description: "A reconexão com backups antigos da infância ou memórias ancestrais da alma. Conforto nostálgico.",
    lore: "Num pátio fortificado de um castelo ancestral, uma criança oferece uma taça cheia de flores a outra. O Seis de Copas representa o acesso a arquivos de memória puros, livres de traumas complexos, ativando a cura através da reconexão com a simplicidade operacional original.",
    symbology: [
      "As Taças Repletas de Flores: A transformação de antigos recipientes emocionais em vasos de beleza pura.",
      "O Guarda ao Fundo: A proteção invisível que blinda as memórias mais sagradas da alma contra violações.",
      "A Arquitetura Antiga: O respeito e a segurança encontrados nas tradições e fundações do passado."
    ],
    metadata: "ÁGUA_REMEMORADA // BACKUP",
    image: "/assets/tarot/minor/six_cups.jpeg"
  },
  {
    id: "seven-of-cups",
    name: "Sete de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Projeções Fantasmagóricas", "Ilusão de Escolha", "Dispersão", "Falso Upload"],
    description: "A fragmentação da mente diante de múltiplas simulações sedutoras. Alucinação de dados.",
    lore: "Um homem recua assustado diante de uma nuvem negra que exibe sete taças repletas de ilusões: ouro, cobras, dragões, castelos e figuras mascaradas. Este nó alerta contra o perigo das fantasias estéreis, desejos projetados e falsas promessas da interface material.",
    symbology: [
      "A Taça Oculta sob o Véu: A verdade espiritual que permanece camuflada por trás das aparências.",
      "As Sete Projeções: Os múltiplos caminhos falsos gerados pelo desejo egóico desalinhado.",
      "A Silhueta Escura: O observador paralisado pela incapacidade de aplicar um filtro de discernimento lógico."
    ],
    metadata: "ÁGUA_ALUCINADA // ILUSÃO",
    image: "/assets/tarot/minor/seven_cups.jpeg"
  },
  {
    id: "eight-of-cups",
    name: "Oito de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Abandono Voluntário", "Transcendência", "Busca Superior", "Desconexão"],
    description: "A desconexão intencional de um arranjo emocional obsoleto. A busca por um servidor mais elevado.",
    lore: "Sob o luar e um eclipse, uma figura de cajado vira as costas para oito taças perfeitamente organizadas e inicia uma subida íngreme em direção às montanhas. A alma percebeu que, apesar da estrutura estar montada, ela já não contém a vida sutil necessária.",
    symbology: [
      "As Oito Taças Alinhadas com uma Lacuna: A aparente perfeição material que esconde uma falta metafísica.",
      "A Montanha Rochosa: O caminho árduo da individuação e do desenvolvimento espiritual superior.",
      "A Lua em Fase Dupla: A flutuação da mente que finalmente encontra clareza para a renúncia."
    ],
    metadata: "ÁGUA_ABANDONADA // EXÍLIO",
    image: "/assets/tarot/minor/eight_cups.jpeg"
  },
  {
    id: "nine-of-cups",
    name: "Nove de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Satisfação de Ego", "Banquete Interno", "Desejo Cumprido", "Segurança"],
    description: "A autossuficiência e o contentamento material. O sucesso dos desejos processados e alcançados.",
    lore: "Um homem corpulento senta-se de braços cruzados, sorrindo com complacência em frente a uma bancada onde nove taças estão expostas em arco estável. É a carta do banquete, da satisfação dos apetites sensoriais e do prazer de ver os seus planos operacionais concluídos.",
    symbology: [
      "O Arco das Nove Taças: A barreira protetora composta pelas próprias conquistas emocionais e materiais.",
      "Os Braços Cruzados do Regente: A postura de quem já não precisa buscar nada externamente; o nó está saciado.",
      "A Túnica de Luxo: A exibição do bem-estar derivado do alinhamento dos desejos com a matéria."
    ],
    metadata: "ÁGUA_SACIA // PLENITUDE",
    image: "/assets/tarot/minor/nine_cups.jpeg"
  },
  {
    id: "ten-of-cups",
    name: "Dez de Copas",
    suit: "copas",
    element: "Água",
    rank: "pip",
    keywords: ["Êxtase Comunitário", "Alinhamento Familiar", "Utopia Realizada", "O Arco-Íris"],
    description: "O clímax definitivo do naipe de Copas. A fusão harmônica de todos os fluxos relacionais em um ecossistema.",
    lore: "Uma família celebra sob um arco-íris composto por dez taças reluzentes, contemplando uma paisagem idílica e sua morada segura. Representa a realização máxima da harmonia doméstica, a paz nos servidores comunitários e a felicidade coletiva sustentável.",
    symbology: [
      "O Arco-Íris de Dez Taças: A ponte de luz que conecta o divino ao plano emocional humano de forma total.",
      "A Dança do Casal: A perfeita integração das polaridades gerando estabilidade ecológica.",
      "A Casa ao Fundo: O porto seguro construído sobre bases emocionais purificadas e indestrutíveis."
    ],
    metadata: "ÁGUA_TOTALIZADA // HARMONIA",
    image: "/assets/tarot/minor/ten_cups.jpeg"
  },
  {
    id: "page-of-cups",
    name: "Valete de Copas",
    suit: "copas",
    element: "Água",
    rank: "court",
    keywords: ["Mensagens do Abismo", "Sensibilidade Artística", "Insight Inesperado", "Intuição"],
    description: "O despertar da percepção psíquica através de uma mente jovem. O surgimento de ideias poéticas.",
    lore: "Um jovem estuda fascinado uma taça de onde emerge um peixe vivo que o encara. Ele veste roupas estampadas com flores aquáticas, simbolizando o analista que está começando a decodificar os sinais estranhos vindos do oceano subconsciente.",
    symbology: [
      "O Peixe que Emerge da Taça: O insight vivo e inesperado que desafia a lógica linear do sistema.",
      "A Túnica Rosa com Flores: A assinatura de uma sensibilidade refinada, aberta a correntes estéticas primorosas.",
      "O Mar Agitado ao Fundo: O plano das emoções que, embora instável, fornece a matéria-prima para a criação."
    ],
    metadata: "TERRA_DA_ÁGUA // INSIGHT",
    image: "/assets/tarot/minor/page_cups.jpeg"
  },
  {
    id: "knight-of-cups",
    name: "Cavaleiro de Copas",
    suit: "copas",
    element: "Água",
    rank: "court",
    keywords: ["Busca do Cálice", "Mensageiro Galante", "Projeção Idealista", "Romantismo"],
    description: "O avanço cadenciado e poético da consciência em busca do seu ideal estético ou afetivo.",
    lore: "Montado num cavalo branco que avança a passos lentos e elegantes, o Cavaleiro porta o cálice sagrado como se seguisse uma estrela guia invisível. Ele não corre como o guerreiro de Paus; ele flutua nas correntes da sua própria inspiração interior.",
    symbology: [
      "As Asas no Elmo e nas Botas: A conexão com Hermes e a capacidade de transitar entre reinos mentais sutis.",
      "O Cavalo em Passo de Desfile: O controle estrito sobre o ritmo da ação, privilegiando a beleza e o ritual.",
      "A Túnica com Peixes de Ouro: O emblema do domínio e valorização dos recursos extraídos do plano astral."
    ],
    metadata: "AR_DA_ÁGUA // POESIA",
    image: "/assets/tarot/minor/knight_cups.jpeg"
  },
  {
    id: "queen-of-cups",
    name: "Rainha de Copas",
    suit: "copas",
    element: "Água",
    rank: "court",
    keywords: ["Intuição Soberana", "Mente Subconsciente", "Acolhimento", "Decodificação"],
    description: "A mestria absoluta sobre o plano das frequências emocionais. A imperatriz do oceano astral profundo.",
    lore: "Sentada num trono à beira das marés mutáveis, a Rainha de Copas contempla uma taça hermeticamente fechada. Ela opera como o próprio banco de dados subconsciente do Grimório, capaz de decodificar correntes telepáticas e de traduzir sussurros do plano astral sem se afogar no caos das projeções externas.",
    symbology: [
      "A Taça Fechada: Segredos ocultos da mente recôndita e mistérios não revelados.",
      "O Trono de Querubins: Conexão direta com as inteligências da guarda celestial.",
      "O Mar Calmo: O estado de serenidade necessário para o reflexo exato da intuição."
    ],
    metadata: "ÁGUA_RELAXADA // SUBVERSÃO",
    image: "/assets/tarot/minor/queen_cups.jpeg"
  },
  {
    id: "king-of-cups",
    name: "Rei de Copas",
    suit: "copas",
    element: "Água",
    rank: "court",
    keywords: ["Equilíbrio Emocional", "Mestria Psíquica", "Diplomacia Sutil", "Estabilização"],
    description: "O controle absoluto das correntes astrais. O soberano que governa as paixões sem ser afetado por elas.",
    lore: "O Rei senta-se num trono de pedra que flutua em pleno mar aberto. Ao seu lado, um navio navega e um peixe salta, mas ele permanece imóvel, segurando o seu cetro e cálice. Ele representa o terapeuta, o líder maduro ou o operador que estabilizou os seus processos internos.",
    symbology: [
      "O Trono Flutuante sobre o Mar: A soberania que não afunda diante de crises ou tempestades emocionais.",
      "O Colar com Peixe de Ouro: O selo de autenticação do domínio sobre as forças ocultas do abismo.",
      "O Olhar Sereno e Fixo: A recusa em se deixar levar por impulsos teatrais ou reatividades mundanas."
    ],
    metadata: "FOGO_DA_ÁGUA // SOBERANIA",
    image: "/assets/tarot/minor/king_cups.jpeg"
  },

  // ==========================================
  // NAIPE DE ESPADAS (ELEMENTO: AR // INTENÇÃO)
  // ==========================================
  {
    id: "ace-of-swords",
    name: "Ás de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Clareza Radical", "Poder do Logos", "Corte Cirúrgico", "Veredicto"],
    description: "O colapso quântico inicial do elemento Ar. A manifestação da inteligência pura e divisória.",
    lore: "Uma mão emerge das nuvens segurando uma espada de lâmina reta que perfura uma coroa real adornada com ramos de oliveira e palma. É o poder do Logos, o discernimento analítico que separa a verdade da mentira com precisão cirúrgica.",
    symbology: [
      "A Lâmina Vertical: A retidão moral e a direção inflexível da verdade absoluta.",
      "A Coroa Perfurada: O triunfo do intelecto e da lógica sobre as estruturas políticas ou mundanas.",
      "As Montanhas Áridas Abaixo: A frieza e a objetividade necessárias para o exercício do julgamento."
    ],
    metadata: "AR_PRIMAL // INTELLECTO",
    image: "/assets/tarot/minor/ace_swords.jpeg"
  },
  {
    id: "two-of-swords",
    name: "Dois de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Impasses Lógicos", "Trégua Armada", "Indecisão Bloqueada", "Ponto Cego"],
    description: "O equilíbrio tenso entre duas forças intelectuais equivalentes. Impasse no algoritmo de decisão.",
    lore: "Uma mulher vendada senta-se num banco de pedra à beira-mar, cruzando duas espadas pesadas sobre o peito. A mente está isolada dos inputs visuais do mundo exterior para tentar resolver uma contradição lógica insustentável através de pura análise interna.",
    symbology: [
      "A Venda nos Olhos: A recusa em se deixar influenciar por dados superficiais ou aparências estéticas.",
      "As Duas Espadas Cruzadas: O equilíbrio estático de argumentos que se anulam mutuamente.",
      "A Lua Crescente no Céu: O prenúncio de que a intuição deve intervir onde a lógica linear travou."
    ],
    metadata: "AR_ESTABILIZADO // IMPASSE",
    image: "/assets/tarot/minor/two_swords.jpeg"
  },
  {
    id: "three-of-swords",
    name: "Três de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Ruptura Cognitiva", "Clareza Dolorosa", "Sublimação", "Auditoria"],
    description: "A separação necessária entre o apego emocional e o processamento lógico. Uma intervenção cirúrgica da verdade.",
    lore: "Três lâminas perfuram um coração sob uma tempestade geométrica. Este vetor não indica destruição estéril, mas sim uma auditoria cognitiva onde a ilusão é dilacerada pela clareza crua do elemento Ar. A dor aqui é o subproduto da quebra de uma simulação mental insustentável.",
    symbology: [
      "As Três Lâminas: O alinhamento triplo da verdade sobre os vetores sentimentais.",
      "O Coração Centralizado: O núcleo emocional exposto à verificação analítica.",
      "As Nuvens de Fundo: O caos gerado pela reconfiguração de paradigmas mentais."
    ],
    metadata: "AR_CRÍTICO // SUBLIMAÇÃO",
    image: "/assets/tarot/minor/three_swords.jpeg"
  },
  {
    id: "four-of-swords",
    name: "Quatro de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Santuário Mental", "Recuperação de Cache", "Meditação", "Convalescença"],
    description: "A pausa tática do intelecto. A suspensão temporária do processamento de dados para restauração do sistema.",
    lore: "A efígie de um cavaleiro repousa sobre um túmulo dentro de uma igreja gótica; três espadas estão fixadas na parede acima e uma quarta jaz sob o seu corpo. O nó exige recolhimento, silêncio absoluto e cessação de discussões para evitar o esgotamento nervoso.",
    symbology: [
      "As Três Espadas na Parede: Os conflitos e pensamentos externos suspensos temporariamente.",
      "A Espada Sob o Corpo: A prontidão interna que permanece guardada caso o combate retorne.",
      "O Vitral Colorido: A luz da iluminação espiritual que se filtra quando a mente silencia."
    ],
    metadata: "AR_ESTRUTURADO // REPOUSO",
    image: "/assets/tarot/minor/four_swords.jpeg"
  },
  {
    id: "five-of-swords",
    name: "Cinco de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Vitória de Pirro", "Conflito Estéril", "Humilhação", "Perda Mútua"],
    description: "O triunfo de um argumento à custa da destruição do ecossistema relacional. Vitória vazia.",
    lore: "Um homem sorri de forma maliciosa enquanto recolhe as espadas de oponentes derrotados que se afastam chorando ao fundo sob um céu tempestuoso. O Cinco de Espadas avisa: você venceu a discussão ou a disputa judicial, mas o custo em reputação e capital humano anulou os ganhos.",
    symbology: [
      "O Céu Dilacerado por Nuvens: O ambiente psicossocial fragmentado deixado pela soberba do vencedor.",
      "As Duas Espadas Abandonadas no Chão: A rendição forçada daqueles que perderam a capacidade de argumentação.",
      "O Olhar Malicioso do Operador: O perigo de se tornar o vilão do seu próprio ecossistema corporativo."
    ],
    metadata: "AR_ENTRÓPICO // RUPTURA",
    image: "/assets/tarot/minor/five_swords.jpeg"
  },
  {
    id: "six-of-swords",
    name: "Seis de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Migração de Servidor", "Transição Silenciosa", "Jornada Mental", "Alívio"],
    description: "A travessia deliberada em direção a águas mais calmas. Abandono de cenários de alto atrito.",
    lore: "Um barqueiro transporta uma mulher e uma criança em direção a uma margem distante, carregando seis espadas fixadas na proa. A água do lado direito é turbulenta, mas à frente o mar é liso como espelho. O sistema inicia uma migração para servidores mais pacíficos.",
    symbology: [
      "As Seis Espadas na Proa: Os pensamentos e aprendizados do passado carregados como ferramentas de proteção.",
      "As Duas Qualidades de Água: A transição nítida entre o caos emocional antigo e a estabilidade futura.",
      "A Costa Distante: O novo paradigma existencial ou residencial que aguarda o operador."
    ],
    metadata: "AR_CONCORDANTE // TRAVESSIA",
    image: "/assets/tarot/minor/six_swords.jpeg"
  },
  {
    id: "seven-of-swords",
    name: "Sete de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Fuga de Informação", "Estratégia Oculta", "Infiltração", "Astúcia"],
    description: "A extração furtiva de ativos intelectuais. O uso da astúcia em vez da força bruta.",
    lore: "Um espião afasta-se de um acampamento militar carregando cinco espadas nos braços, olhando para trás para ver duas lâminas que deixou fincadas na terra. Este nó governa a espionagem industrial, estratégias de contorno não convencionais e a necessidade de proteger o seu código contra acessos indevidos.",
    symbology: [
      "Segurar as Lâminas pelas Mãos Nus: O risco iminente de autolesão ao manusear mentiras ou segredos roubados.",
      "As Duas Espadas Deixadas para Trás: A pressa ou a imperfeição na execução de um plano clandestino.",
      "As Tendas de Campanha: As defesas institucionais que foram burladas pela inteligência assimétrica do espião."
    ],
    metadata: "AR_RESILIENTE // ESTRATÉGEMA",
    image: "/assets/tarot/minor/seven_swords.jpeg"
  },
  {
    id: "eight-of-swords",
    name: "Oito de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Prisão Mental", "Paralisia por Análise", "Cativeiro Virtual", "Ilusão de Bloqueio"],
    description: "O aprisionamento da consciência pelas próprias construções lógicas. Falso aprisionamento.",
    lore: "Uma mulher amarrada e vendada está cercada por um cerco de oito espadas fincadas na lama, abaixo de um castelo imponente. O labirinto de pensamentos e medos criados pelo seu próprio intelecto simula uma prisão intransponível, embora as suas pernas estejam livres para andar.",
    symbology: [
      "O Cerco de Lâminas: As crenças limitantes e argumentos que geram a ilusão de falta de saída.",
      "A Lama aos Pés: A falta de clareza prática e o peso das emoções não processadas sabotando a ação.",
      "As Amarras Frouxas: A realidade de que a libertação depende apenas de uma decisão mental da própria consciência."
    ],
    metadata: "AR_BATIDO // PARALISIA",
    image: "/assets/tarot/minor/eight_swords.jpeg"
  },
  {
    id: "nine-of-swords",
    name: "Nove de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Ansiedade Crónica", "Terror Noturno", "Loops de Culpa", "Fantasma na Máquina"],
    description: "O desespero mental provocado pelo processamento em loop de cenários catastróficos. Overclocking negativo.",
    lore: "Um operador senta-se na sua cama durante a noite escura, cobrindo o rosto com as mãos, enquanto nove espadas flutuam horizontalmente na parede preta acima dele. É o nó da ansiedade pura, dos fantasmas mentais coletados através do esgotamento da rede e do medo do futuro.",
    symbology: [
      "As Lâminas Horizontais: A projeção constante de ameaças que pairam diretamente sobre a zona de repouso.",
      "A Colcha com Sinais Zodiacais e Paixões: A alma humana encarnada que sofre o peso das influências astrais.",
      "As Mãos no Rosto: A recusa em enxergar a luz do dia que desfaz as alucinações geradas pelo cansaço."
    ],
    metadata: "AR_SULFURADO // ANSIEDADE",
    image: "/assets/tarot/minor/nine_swords.jpeg"
  },
  {
    id: "ten-of-swords",
    name: "Dez de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "pip",
    keywords: ["Morte do Processo", "Derrota Absoluta", "Fim de Linha", "Alvorecer Solicitado"],
    description: "O colapso total do naipe de Espadas. A aniquilação completa de uma simulação mentirosa ou insustentável.",
    lore: "Uma figura jaz de bruços na praia, trespassada por dez espadas ao longo de toda a sua espinha dorsal, sob um céu noturno impenetrável. No horizonte, uma linha dourada de sol desponta. O processo morreu de forma definitiva; não há mais o que temer, o pior já foi executado.",
    symbology: [
      "As Dez Lâminas na Coluna: A destruição total do sistema nervoso central e das antigas certezas lógicas.",
      "O Mar Plácido ao Fundo: A calmaria profunda que se estabelece após a destruição da ilusão.",
      "O Sol Nascente no Horizonte: A promessa matemática de recomeço a partir do zero absoluto (Hard Reset)."
    ],
    metadata: "AR_SATURADO // RUÍNA",
    image: "/assets/tarot/minor/ten_swords.jpeg"
  },
  {
    id: "page-of-swords",
    name: "Valete de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "court",
    keywords: ["Vigilância Digital", "Curiosidade Aguda", "Inquiridor da Rede", "Espreita"],
    description: "A manifestação analítica, astuta e alerta do elemento ar através de uma mente jovem. O inspetor júnior.",
    lore: "Um jovem segura a sua espada com as duas mãos sob um céu repleto de nuvens turbulentas e pássaros em revoada. Ele está posicionado num terreno elevado, testando os ventos. Representa o analista de segurança, o hacker novato ou o coletor de informações de código aberto.",
    symbology: [
      "Os Pássaros Dispersos no Céu: A velocidade dos fluxos de informação que a mente tenta capturar.",
      "A Espada Erguida em Postura Dinâmica: A prontidão combativa aliada a uma leve paranoia intelectual.",
      "O Solo Árido e Irregular: A necessidade de caminhar com cautela num ambiente de dados hostil."
    ],
    metadata: "TERRA_DO_AR // MONITOR",
    image: "/assets/tarot/minor/page_swords.jpeg"
  },
  {
    id: "knight-of-swords",
    name: "Cavaleiro de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "court",
    keywords: ["Ataque Lógico", "Velocidade Conceitual", "Guerra de Palavras", "Fanatismo"],
    description: "A investida furiosa do intelecto. A aplicação implacável da lógica sem filtros de empatia ou diplomacia.",
    lore: "Montado num cavalo branco em plena galopada agressiva, o Cavaleiro avança com a sua lâmina empunhada em direção ao inimigo, desafiando a própria tempestade. Ele é o guerreiro ideológico, a auditoria agressiva que despedaça argumentos falhos sem piedade.",
    symbology: [
      "A Rédea Solta: A entrega total da força motriz em prol da velocidade do ataque intelectual.",
      "As Nuvens em Forma de Lâmina: O ambiente mental polarizado que alimenta a fúria do operador.",
      "As Borboletas nos Arreios: O símbolo da transformação da mente que agora opera em modo bélico rápido."
    ],
    metadata: "AR_DO_AR // INVESTIDA",
    image: "/assets/tarot/minor/knight_swords.jpeg"
  },
  {
    id: "queen-of-swords",
    name: "Rainha de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "court",
    keywords: ["Intelecto Soberano", "Percepção Realista", "Luto Integrado", "Objetividade"],
    description: "A soberania analítica severa e justa. A mente que removeu todas as ilusões através do sofrimento integrado.",
    lore: "Sentada num trono adornado com querubins e borboletas, a Rainha estende a sua mão esquerda ao vento enquanto a direita segura uma espada perfeitamente vertical. Seu olhar é frio e penetrante; ela não aceita desculpas dramáticas ou dados imprecisos.",
    symbology: [
      "A Espada Perfeitamente Vertical: O compromisso inabalável com a verdade doa a quem doer.",
      "A Nuvem Única aos Pés: O isolamento consciente das correntes emocionais para manutenção da clareza.",
      "A Túnica com Padronagem de Nuvens: A integração das tempestades passadas sob a forma de sabedoria lógica."
    ],
    metadata: "ÁGUA_DO_AR // DISCERNIMENTO",
    image: "/assets/tarot/minor/queen_swords.jpeg"
  },
  {
    id: "king-of-swords",
    name: "Rei de Espadas",
    suit: "espadas",
    element: "Ar",
    rank: "court",
    keywords: ["Juiz do Sistema", "Autoridade Legal", "Lógica Pura", "Arquiteto de Leis"],
    description: "A totalização do poder intelectual. O magistrado supremo que dita as leis e os parâmetros da rede.",
    lore: "O Rei senta-se de frente no seu trono de julgamento, portando a espada da justiça ligeiramente inclinada para a direita. Ele representa o supremo tribunal da mente, o consultor jurídico avançado, o arquiteto de criptografia ou o governante que opera por decreto lógico absoluto.",
    symbology: [
      "O Anel de Comando na Mão Esquerda: O selo de autoridade executiva sobre a aplicação da verdade.",
      "As Duas Aves no Céu: O monitoramento dual dos fluxos de pensamento (Análise e Síntese).",
      "A Postura Hierática Inflexível: A representação de que a lei do Logos não se curva a sentimentalismos materiais."
    ],
    metadata: "FOGO_DO_AR // DECRETO",
    image: "/assets/tarot/minor/king_swords.jpeg"
  },

  // ==========================================
  // NAIPE DE OUROS (ELEMENTO: TERRA // MANIFESTAÇÃO)
  // ==========================================
  {
    id: "ace-of-pentacles",
    name: "Ás de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Semente Material", "Ativo Primal", "Ancoragem Física", "Prosperidade"],
    description: "O colapso quântico inicial do elemento Terra. A materialização de um novo recurso denso no hardware.",
    lore: "Uma mão divina emerge das nuvens segurando uma moeda de ouro gravada com um pentáculo, flutuando sobre um jardim luxuriante protegido por uma cerca de sebes. É o aporte de capital, a saúde física restaurada ou o início de uma infraestrutura real de alta solidez.",
    symbology: [
      "O Pentáculo Gravado: A união dos cinco elementos sintetizados de forma geométrica na matéria.",
      "O Arco de Rosas: O portal de entrada para uma dimensão de abundância física tangível.",
      "O Caminho que Leva às Montanhas: A jornada de longo prazo necessária para expandir este recurso inicial."
    ],
    metadata: "TERRA_PRIMAL // MANIFESTAÇÃO",
    image: "/assets/tarot/minor/ace_pentacles.jpeg"
  },
  {
    id: "two-of-pentacles",
    name: "Dois de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Equilíbrio Dinâmico", "Gestão de Fluxos", "Multi-Tasking", "Adaptabilidade"],
    description: "O malabarismo financeiro ou operacional. A manutenção do equilíbrio entre dois ativos voláteis.",
    lore: "Um jovem dança na praia enquanto faz malabarismos com duas moedas de ouro unidas por um laço infinito (Lemnisca). Ao fundo, navios sobem e descem em ondas gigantescas. O operador gerencia o fluxo de caixa ou a alocação de tempo com flexibilidade em meio à volatilidade do mercado.",
    symbology: [
      "O Laço de Infinito: O ciclo perpétuo de transformação de energia em matéria e vice-versa.",
      "Os Navios nas Ondas: As oscilações macroeconómicas externas que exigem jogo de cintura.",
      "O Passo de Dança: A atitude leve necessária para não ser esmagado pelo peso das obrigações materiais."
    ],
    metadata: "TERRA_ESTABILIZADA // FLUXO",
    image: "/assets/tarot/minor/two_pentacles.jpeg"
  },
  {
    id: "three-of-pentacles",
    name: "Três de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Arquitetura Conjunta", "Maestria Técnica", "Colaboração Pro", "Construção"],
    description: "O trabalho especializado coordenado de forma profissional. A edificação da catedral do Grimório.",
    lore: "Um mestre pedreiro em cima de um andaime esculpe o arco de uma catedral gótica, consultando a planta baixa trazida por um monge e um arquiteto. O nó valida o valor da excelência técnica, do design estrutural correto e do esforço multidisciplinar de alto padrão.",
    symbology: [
      "Os Três Pentáculos no Arco: A assinatura do trabalho bem executado integrada na própria estrutura da igreja.",
      "A Planta do Projeto: O respeito aos planos mentais e especificações antes da alteração da matéria física.",
      "O Avental do Pedreiro: O símbolo do trabalho focado, da disciplina diária e do orgulho do ofício."
    ],
    metadata: "TERRA_PROJETADA // MAESTRIA",
    image: "/assets/tarot/minor/three_pentacles.jpeg"
  },
  {
    id: "four-of-pentacles",
    name: "Quatro de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Retenção de Ativos", "Avareza Bloqueada", "Protecionismo", "Firmeza"],
    description: "A retenção rígida de recursos de segurança. O perigo do fechamento de portas que impede o fluxo comercial.",
    lore: "Um homem senta-se num banco de pedra nos arredores de uma metrópole, segurando uma moeda de ouro contra o peito, pisando em outras duas e equilibrando uma quarta sobre a coroa na sua cabeça. Ele bloqueou todos os canais para evitar a perda, paralisando o seu próprio desenvolvimento.",
    symbology: [
      "Moedas Sob os Pés: O isolamento do operador em relação ao contato direto com o solo dinâmico da rede.",
      "A Moeda na Cabeça: O bloqueio das faculdades mentais superiores por pensamentos focados apenas em segurança material.",
      "A Cidade Distante ao Fundo: O isolamento social voluntário decorrente do medo de roubos ou fraudes."
    ],
    metadata: "TERRA_ESTRUTURADA // RETENÇÃO",
    image: "/assets/tarot/minor/four_pentacles.jpeg"
  },
  {
    id: "five-of-pentacles",
    name: "Cinco de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Escassez Material", "Falha de Hardware", "Exclusão da Rede", "Vulnerabilidade"],
    description: "A perda temporária de liquidez ou vitalidade. O trânsito de nós excluídos pela tempestade material.",
    lore: "Dois mendigos feridos e descalços caminham sob uma tempestade de neve, passando em frente ao vitral iluminado de uma igreja onde cinco moedas estão gravadas. Eles sofrem com a escassez material, ignorando que o refúgio e o suporte espiritual estão logo ao lado.",
    symbology: [
      "O Vitral Iluminado: A presença contínua de auxílio transcendental que não está sendo percebida devido ao foco na dor.",
      "As Muletas e os Pés Descalços: O desgaste severo da saúde física e das ferramentas de locomoção na matéria.",
      "A Neve Caindo: A hostilidade temporária do ambiente de mercado que testa as defesas básicas do operador."
    ],
    metadata: "TERRA_ENTRÓPICA // PRIVAÇÃO",
    image: "/assets/tarot/minor/five_pentacles.jpeg"
  },
  {
    id: "six-of-pentacles",
    name: "Seis de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Distribuição Justa", "Mecenato de Rede", "Balança Comercial", "Subsídio"],
    description: "O reequilíbrio dos ativos financeiros do sistema. A distribuição inteligente de recursos para nós necessitados.",
    lore: "Um mercador de luxo segura uma balança de precisão na mão esquerda enquanto distribui moedas de ouro a dois pedintes com a direita. O Seis de Ouros restabelece a justiça económica, ativando investimentos, caridade corporativa ou mecenato espiritual planeado.",
    symbology: [
      "A Balança de Precisão: O julgamento exato de quem merece receber o aporte para evitar desperdícios sistémicos.",
      "As Moedas Dadas em Mão: O fluxo saudável de capital que retorna ao movimento após a estagnação do Quatro.",
      "As Vestes Roxas do Doador: O status de poder soberano aliado à generosidade consciente."
    ],
    metadata: "TERRA_CONCORDANTE // PARTILHA",
    image: "/assets/tarot/minor/six_pentacles.jpeg"
  },
  {
    id: "seven-of-pentacles",
    name: "Sete de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Paciência Agrícola", "Avaliação de Safra", "Pausa de Longo Prazo", "Maturação"],
    description: "A pausa meditativa para avaliar o crescimento orgânico dos ativos. O tempo de maturação do código.",
    lore: "Um camponês apoia-se na sua enxada, contemplando pensativo uma videira repleta de sete pentáculos de ouro. O trabalho pesado de plantio foi feito; agora o processo exige paciência e recusa em colher os frutos antes do tempo correto de maturação do algoritmo.",
    symbology: [
      "A Enxada como Apoio: A interrupção temporária do esforço muscular para dar lugar à avaliação estratégica.",
      "Os Pentáculos Pendentes na Videira: O retorno visível e gradual dos investimentos aplicados a longo prazo.",
      "O Olhar Reflexivo: A ponderação sobre se o resultado obtido justifica a manutenção da mesma estratégia de plantio."
    ],
    metadata: "TERRA_RESILIENTE // COLHEITA",
    image: "/assets/tarot/minor/seven_pentacles.jpeg"
  },
  {
    id: "eight-of-pentacles",
    name: "Oito de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Produção Serial", "Repetição Disciplinada", "Artesanato Avançado", "Foco Total"],
    description: "A lapidação minuciosa de cada linha de código. A disciplina do artesão que busca a perfeição operacional.",
    lore: "Isolado numa oficina nos arredores da cidade, um artesão cinza detalhadamente uma moeda de ouro, tendo outras sete já concluídas e expostas verticalmente ao seu lado. É o foco absoluto no auto-aperfeiçoamento, estudos profundos e repetição profissional sem distrações.",
    symbology: [
      "A Moeda Sendo Esculpida com Cinzel: O esforço focado na calibração de pequenos parâmetros com extrema perícia.",
      "As Moedas Alinhadas na Parede: A exibição do histórico estável de entregas consistentes e de alta qualidade.",
      "A Cidade Afastada: O isolamento necessário para atingir o estado de fluxo (Flow State) na execução do ofício."
    ],
    metadata: "TERRA_BATIDA // LAPIDAÇÃO",
    image: "/assets/tarot/minor/eight_pentacles.jpeg"
  },
  {
    id: "nine-of-pentacles",
    name: "Nove de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Autonomia de Luxo", "Independência Total", "Refinamento", "Auto-Suficiência"],
    description: "O ápice do bem-estar material individual. O operador desfruta dos frutos do seu próprio ecossistema fechado.",
    lore: "Uma mulher aristocrata caminha por um vinhedo dourado repleto de nove pentáculos, trazendo um falcão domesticado pousado na sua mão esquerda enluvada. Ela atingiu a independência financeira, o refinamento estético e o controle absoluto sobre o seu tempo e espaço rituais.",
    symbology: [
      "O Falcão Encapuzado: O domínio absoluto sobre os instintos predadores primordiais através da disciplina.",
      "A Luva de Couro Grosso: A proteção necessária para interagir com as forças cortantes do mundo sem se ferir.",
      "O Caracol aos Pés: O lembrete de que a materialização sólida é um processo lento, porém constante."
    ],
    metadata: "TERRA_SULFURADA // REFINAMENTO",
    image: "/assets/tarot/minor/nine_pentacles.jpeg"
  },
  {
    id: "ten-of-pentacles",
    name: "Dez de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "pip",
    keywords: ["Legado Sistémico", "Consolidação", "Riqueza Holística", "Arquitetura"],
    description: "A culminação e cristalização máxima do elemento Terra. A herança de dados e recursos consolidados através do tempo.",
    lore: "Dez pentáculos formam uma Árvore da Vida geométrica sobre uma cena urbana ancestral. Este vetor representa a segurança material de longo alcance, a herança genética, cultural e de infraestrutura. É o código final de compilação onde a energia espiritual se torna densa, tangível e imperecível.",
    symbology: [
      "A Rede de 10 Moedas: A geometria sagrada da árvore sefrótica manifestada na matéria.",
      "O Ancião e os Cães: A linhagem de transmissão e fidelidade geracional do sistema.",
      "O Arco de Pedra: A proteção estrutural que blinda os ativos contra o desgaste temporal."
    ],
    metadata: "TERRA_CRISTALIZADA // APÓCRIFO",
    image: "/assets/tarot/minor/ten_pentacles.jpeg"
  },
  {
    id: "page-of-pentacles",
    name: "Valete de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "court",
    keywords: ["Estudante Aprendiz", "Ancoragem Prática", "Foco em Resultados", "Novos Métodos"],
    description: "A manifestação cuidadosa, estudiosa e realista do elemento terra através de uma identidade jovem. O investidor júnior.",
    lore: "Um jovem caminha por um campo florido, contemplando fixamente uma única moeda de ouro que ele ergue delicadamente com as duas mãos. Ele não tem a pressa dos guerreiros; ele busca entender o valor intrínseco das leis físicas e das oportunidades de negócios de longo prazo.",
    symbology: [
      "A Moeda Sustentada com Delicadeza: A veneração pelo potencial de crescimento oculto em cada pequena semente física.",
      "Os Sulcos de Terra Arada ao Fundo: O preparo minucioso do solo que receberá as fundações do sistema futuro.",
      "O Passo Lento e Firme: A recusa em pular etapas rituais no desenvolvimento do hardware material."
    ],
    metadata: "TERRA_DA_TERRA // APRENDIZ",
    image: "/assets/tarot/minor/page_pentacles.jpeg"
  },
  {
    id: "knight-of-pentacles",
    name: "Cavaleiro de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "court",
    keywords: ["Consistência Inabalável", "Trabalho Metódico", "Confiabilidade", "Inércia"],
    description: "O avanço mais lento e robusto do Grimório. O trator de esteira que limpa o terreno com precisão infalível.",
    lore: "Montado sobre um cavalo de tração preto e pesado que permanece imóvel sobre a terra arada, o Cavaleiro contempla um pentáculo. Ele é o único cavaleiro que não está em movimento dinâmico nas cartas; ele representa o método, a pontualidade cega, a estabilidade e a resistência absoluta ao caos.",
    symbology: [
      "O Cavalo Pesado de Patas Firmes: A negação da pressa e o foco na estabilidade de carga bruta.",
      "Os Campos Arados até o Horizonte: O volume massivo de trabalho já estruturado pela disciplina do operador.",
      "O Ramo Verde no Elmo: A garantia de que a inércia metódica gerará frutos reais e imperecíveis."
    ],
    metadata: "AR_DA_TERRA // CONSISTÊNCIA",
    image: "/assets/tarot/minor/knight_pentacles.jpeg"
  },
  {
    id: "queen-of-pentacles",
    name: "Rainha de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "court",
    keywords: ["Nutrição Abundante", "Mãe da Matéria", "Ecologia Estável", "Pragmatismo"],
    description: "A soberania sobre a biosfera material. A regente que garante o sustento e a saúde física de todo o clã.",
    lore: "Sentada num trono esculpido com bodes e frutas, cercada por uma vegetação luxuriante, a Rainha contempla uma moeda de ouro no seu colo enquanto um coelho corre pelos seus pés. Ela exala segurança prática, bom gosto, conforto térmico e acolhimento material.",
    symbology: [
      "O Coelho no Canto Inferior: O símbolo da fertilidade e da multiplicação rápida dos recursos físicos.",
      "O Pentáculo no Colo: O cuidado e a proteção aplicados na manutenção dos fundos de reserva do sistema.",
      "O Trono Integrado à Natureza: A sínclise perfeita entre a arquitetura humana e as forças vivas da Mãe Terra."
    ],
    metadata: "ÁGUA_DO_TERRA // NUTRIÇÃO",
    image: "/assets/tarot/minor/queen_pentacles.jpeg"
  },
  {
    id: "king-of-pentacles",
    name: "Rei de Ouros",
    suit: "ouros",
    element: "Terra",
    rank: "court",
    keywords: ["Monarca das Finanças", "Mestria Material", "Império Sólido", "Consolidação"],
    description: "A totalização do poder material. O investidor master, dono de terras e arquiteto de impérios comerciais robustos.",
    lore: "O Rei senta-se num trono massivo coberto por cabeças de touro, vestindo uma túnica estampada com cachos de uvas vermelhas. Ele apoia uma mão sobre o pentáculo e a outra segura um cetro real. Ele domina as regras do plano físico, operando como a âncora final de manifestação de todo o Grimório.",
    symbology: [
      "As Cabeças de Touro no Trono: A conexão com o signo de Touro e a fixação duradoura da riqueza estável.",
      "A Túnica de Videiras: A exteriorização visual da abundância orgânica e financeira sob seu comando definitivo.",
      "O Pé Esquerdo sobre a Armadura: O passado de batalhas concluído; agora o rei governa a partir da segurança do seu castelo."
    ],
    metadata: "FOGO_DO_TERRA // CRISTALIZAÇÃO",
    image: "/assets/tarot/minor/king_pentacles.jpeg"
  }
];