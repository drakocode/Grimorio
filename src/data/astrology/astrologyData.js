export const astrologyManifesto = {
  sectionId: "ARC_CELESTIAL_01",
  title: "Celestial Archive",
  description: "O mapeamento geométrico do firmamento. Esta ala do arquivo decodifica as matrizes de dados macrocósmicos e suas reverberações microcósmicas através de transições planetárias, divisões de casas e equações de aspectos angulares."
};

export const astrologySubSectors = [
  {
    id: "AST-SIGNS",
    title: "Zodiacal Archetypes",
    subTitle: "Os Signos do Zodíaco",
    description: "Doze partições geométricas da eclíptica. Cada quadrante atua como um filtro de frequência elemental para a consciência planetária.",
    image: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?q=80&w=600&auto=format&fit=crop",
    metadata: "12_MATRIZES // ELEMENTOS",
    path: "/astrology/signs"
  },
  {
    id: "AST-HOUSES",
    title: "Mundane Sectors",
    subTitle: "As Casas Astrológicas",
    description: "A divisão do espaço local baseada na rotação da Terra. Doze campos estruturais onde os arquétipos celestes encontram ancoragem física.",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=600&auto=format&fit=crop",
    metadata: "12_CAMPOS // DOMÍNIOS",
    path: "/astrology/houses"
  },
  {
    id: "AST-ASPECTS",
    title: "Angular Mechanics",
    subTitle: "Aspectos e Geometria Sacrada",
    description: "Relações matemáticas exatas entre corpos celestes. Dinâmicas de tensão e síntese baseadas em divisões harmônicas do círculo.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=600&auto=format&fit=crop",
    metadata: "CONJUNÇÃO // OPOSIÇÃO",
    path: "/astrology/aspects"
  }
];

export const planetaryTransits = [
  { body: "SOL", position: "18° GÊMEOS", house: "CASA IX", motion: "DIRETO" },
  { body: "LUA", position: "04° ÁRIES", house: "CASA VII", motion: "DIRETO" },
  { body: "MERCÚRIO", position: "29° TOURO", house: "CASA VIII", motion: "ESTACIONÁRIO" },
  { body: "VÊNUS", position: "12° CÂNCER", house: "CASA X", motion: "DIRETO" },
  { body: "MARTE", position: "22° LEÃO", house: "CASA XI", motion: "RETRÓGRADO" }
];

export const zodiacSigns = [
  {
    id: "aries",
    name: "Áries",
    englishName: "Aries",
    symbol: "♈",
    element: "Fogo",
    modality: "Cardinal",
    ruler: "Marte",
    dateRange: "21 Março - 19 Abril",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600&auto=format&fit=crop",
    lore: "Áries é o ponto inicial do ciclo zodiacal, o equinócio de primavera no hemisfério norte. Representa a explosão de força vital que rompe a inércia do inverno. Sob a regência de Marte, este arquétipo corporifica o pioneirismo absoluto, a coragem cega, o instinto combativo e a busca incessante por diferenciação individual. É a faísca que inicia o incêndio da criação cósmica.",
    keywords: ["Iniciação", "Ação", "Coragem", "Impulso"]
  },
  {
    id: "taurus",
    name: "Touro",
    englishName: "Taurus",
    symbol: "♉",
    element: "Terra",
    modality: "Fixo",
    ruler: "Vênus",
    dateRange: "20 Abril - 20 Maio",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
    lore: "Touro consolida a energia liberada em Áries, dando-lhe forma física e estabilidade estrutural. Representa a fecundação da terra e o desfrute sensorial da matéria. Sob o domínio de Vênus, este signo governa a conservação de recursos, a paciência construtiva, o apego à segurança biológica e a manifestação da beleza através dos cinco sentidos fundamentais.",
    keywords: ["Estabilidade", "Fecundidade", "Sensorial", "Resistência"]
  },
  {
    id: "gemini",
    name: "Gêmeos",
    englishName: "Gemini",
    symbol: "♊",
    element: "Ar",
    modality: "Mutável",
    ruler: "Mercúrio",
    dateRange: "21 Maio - 20 Junho",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=600&auto=format&fit=crop",
    lore: "Gêmeos introduz o princípio da dualidade, da divisão e da comunicação. Representa a mente racional que conecta dois pontos distintos por meio da palavra e do símbolo. Governado por Mercúrio, é o fluxo contínuo de curiosidade, adaptabilidade intelectual, redes de troca e o aprendizado empírico através da linguagem conceitual.",
    keywords: ["Dualidade", "Intelecto", "Navegação", "Conexão"]
  },
  {
    id: "cancer",
    name: "Câncer",
    englishName: "Cancer",
    symbol: "♋",
    element: "Água",
    modality: "Cardinal",
    ruler: "Lua",
    dateRange: "21 Junho - 22 Julho",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop",
    lore: "Câncer marca a interiorização da consciência nos oceanos da alma e da memória subconsciente. Sob a luz mutável da Lua, rege o útero protetor da família, as fundações psicológicas, a intuição emocional e a necessidade arquetípica de pertencer. É a âncora emocional que sustenta o ego na correnteza do tempo.",
    keywords: ["Matriz", "Intuição", "Memória", "Proteção"]
  },
  {
    id: "leo",
    name: "Leão",
    englishName: "Leo",
    symbol: "♌",
    element: "Fogo",
    modality: "Fixo",
    ruler: "Sol",
    dateRange: "23 Julho - 22 Agosto",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop",
    lore: "Leão irradia a consciência centralizada e individualizada. Sob a regência do Sol, é o princípio do brilho próprio, do orgulho criativo, do calor vital e da autorrealização dramática. Representa o rei no trono interior, buscando a expressão soberana de si e a imortalização da própria essência através da criação.",
    keywords: ["Soberania", "Vitalidade", "Criação", "Centro"]
  },
  {
    id: "virgo",
    name: "Virgem",
    englishName: "Virgo",
    symbol: "♍",
    element: "Terra",
    modality: "Mutável",
    ruler: "Mercúrio",
    dateRange: "23 Agosto - 22 Setembro",
    image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?q=80&w=600&auto=format&fit=crop",
    lore: "Virgem opera a triagem, o refino e a depuração da consciência material. Sob o comando de Mercúrio, este signo de terra analisa cada componente da realidade, eliminando o supérfluo para otimizar os sistemas. Rege a saúde biológica, o serviço técnico, o trabalho de artesão e a busca incessante pela pureza mecânica e funcional.",
    keywords: ["Análise", "Purificação", "Trabalho", "Detalhe"]
  },
  {
    id: "libra",
    name: "Libra",
    englishName: "Libra",
    symbol: "♎",
    element: "Ar",
    modality: "Cardinal",
    ruler: "Vênus",
    dateRange: "23 Setembro - 22 Outubro",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
    lore: "Libra introduz o espelho do outro, a busca geométrica por equilíbrio, simetria e justiça nas relações interpessoais. Governado por Vênus, este arquétipo de ar rege as pontes diplomáticas, a estética refinada, os acordos jurídicos e sociais e a sintonização harmônica entre pólos opostos da realidade.",
    keywords: ["Equilíbrio", "Harmonia", "Diplomacia", "Espelho"]
  },
  {
    id: "scorpio",
    name: "Escorpião",
    englishName: "Scorpio",
    symbol: "♏",
    element: "Água",
    modality: "Fixo",
    ruler: "Plutão / Marte",
    dateRange: "23 Outubro - 21 Novembro",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
    lore: "Escorpião desce aos abismos da psique, onde ocorrem os processos de fusão, morte e transmutação alquímica. Rege os recursos compartilhados, a sexualidade tântrica, os segredos ocultos do poder e a regeneração psicológica através do despojamento absoluto do ego. Sob Plutão, é o limiar de purificação pelo fogo emocional.",
    keywords: ["Transmutação", "Profundidade", "Poder", "Morte"]
  },
  {
    id: "sagittarius",
    name: "Sagitário",
    englishName: "Sagittarius",
    symbol: "♐",
    element: "Fogo",
    modality: "Mutável",
    ruler: "Júpiter",
    dateRange: "22 Novembro - 21 Dezembro",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
    lore: "Sagitário lança sua flecha em direção ao horizonte da verdade última, da filosofia e dos grandes sistemas metafísicos. Governado pelo expansivo Júpiter, este signo busca integrar a moralidade, a aventura transfronteiriça, a sabedoria superior e a fé arquetípica em um sistema de sentido holístico e teleológico.",
    keywords: ["Expansão", "Verdade", "Filosofia", "Busca"]
  },
  {
    id: "capricorn",
    name: "Capricórnio",
    englishName: "Capricorn",
    symbol: "♑",
    element: "Terra",
    modality: "Cardinal",
    ruler: "Saturno",
    dateRange: "22 Dezembro - 19 Janeiro",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    lore: "Capricórnio escala a montanha do tempo e da responsabilidade institucional. Sob o olhar severo de Saturno, este arquétipo corporifica o domínio sobre a matéria, o dever estrutural, o respeito à hierarquia e a consolidação do poder social através do trabalho rigoroso, da disciplina autoimposta e do pragmatismo geométrico.",
    keywords: ["Estrutura", "Disciplina", "Ascensão", "Tempo"]
  },
  {
    id: "aquarius",
    name: "Aquário",
    englishName: "Aquarius",
    symbol: "♒",
    element: "Ar",
    modality: "Fixo",
    ruler: "Urano / Saturno",
    dateRange: "20 Janeiro - 18 Fevereiro",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    lore: "Aquário rompe as barreiras capricornianas por meio da revolução científica, da inovação coletiva e da busca por utopias horizontais. Sob o raio urânico, rege a rede social de mentes livres, a tecnologia desvinculada do dogma e a percepção intuitiva do futuro através da cooperação humanitária e intelectual.",
    keywords: ["Revolução", "Coletivo", "Futuro", "Rede"]
  },
  {
    id: "pisces",
    name: "Peixes",
    englishName: "Pisces",
    symbol: "♓",
    element: "Água",
    modality: "Mutável",
    ruler: "Netuno / Júpiter",
    dateRange: "19 Fevereiro - 20 Março",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=600&auto=format&fit=crop",
    lore: "Peixes dissolve as fronteiras do ego individual no oceano infinito da consciência universal e do amor místico. Governado por Netuno, rege os sonhos, a compaixão sem limites, as ilusões psicológicas e o retorno cíclico da alma ao vácuo primordial, preparando o terreno para o recomeço em Áries.",
    keywords: ["Dissolução", "Compaixão", "Misticismo", "Absoluto"]
  }
];

export const astrologicalHouses = [
  {
    id: "house-1",
    number: "I",
    title: "Casa I (Ascendente)",
    rulingSign: "Áries",
    classification: "Angular",
    theme: "Identidade, Ego, Aparência Física, Começos",
    description: "A cúspide da primeira casa representa o Ascendente, o ponto onde a consciência se encarna na matéria física. Governa o temperamento nativo, a aparência do invólucro corporal, a percepção inicial do ambiente exterior e a forma ativa como o indivíduo projeta sua força de vontade no mundo."
  },
  {
    id: "house-2",
    number: "II",
    title: "Casa II",
    rulingSign: "Touro",
    classification: "Sucedente",
    theme: "Recursos, Valores Pessoais, Autoestima, Matéria",
    description: "Mapeia as posses materiais, o fluxo financeiro de sobrevivência e os valores internos que determinam o senso de autovalorização. Representa a infraestrutura tangível que o ego acumula para se sentir ancorado na biosfera, bem como os talentos nativos convertidos em sustento físico."
  },
  {
    id: "house-3",
    number: "III",
    title: "Casa III",
    rulingSign: "Gêmeos",
    classification: "Cadente",
    theme: "Comunicação, Mente Concreta, Irmãos, Entorno",
    description: "Governa o intelecto lógico imediato, o aprendizado primário, a alfabetização técnica e a linguagem. Regula o transporte a curta distância, a vizinhança, os contatos diários espontâneos e as dinâmicas fraternais de socialização."
  },
  {
    id: "house-4",
    number: "IV",
    title: "Casa IV (Fundo do Céu)",
    rulingSign: "Câncer",
    classification: "Angular",
    theme: "Lar, Origens, Família de Alma, Subconsciente",
    description: "Ancorada no nadir do mapa natal, representa as raízes biológicas e as fundações psicológicas do ser. Rege a casa de infância, a herança ancestral familiar, a sensação de segurança privada e os processos mais secretos e submersos da intimidade psicológica."
  },
  {
    id: "house-5",
    number: "V",
    title: "Casa V",
    rulingSign: "Leão",
    classification: "Sucedente",
    theme: "Autoexpressão, Romance, Progênie, Criatividade",
    description: "Representa a esfera do lazer, do jogo, da expressão artística autêntica e da irradiação do ego. Rege as paixões românticas e eróticas, a geração de filhos físicos ou projetos intelectuais, e toda atividade executada pelo puro prazer da manifestação."
  },
  {
    id: "house-6",
    number: "VI",
    title: "Casa VI",
    rulingSign: "Virgem",
    classification: "Cadente",
    theme: "Trabalho Diário, Saúde Física, Rotina, Ajustes",
    description: "Regula o funcionamento diário da máquina biológica (higiene, nutrição, enfermidades e fisiologia) e a rotina laboral concreta do trabalhador assalariado. Trata da submissão técnica às regras, do serviço prestado ao coletivo e do aprimoramento minucioso dos hábitos de vida."
  },
  {
    id: "house-7",
    number: "VII",
    title: "Casa VII (Descendente)",
    rulingSign: "Libra",
    classification: "Angular",
    theme: "Relações Estáveis, Casamento, Inimigos Declarados",
    description: "O ponto descendente onde a consciência se depara com o espelho do outro. Rege os contratos legais bilaterais, casamentos, alianças comerciais e processos jurídicos contra inimigos abertamente declarados, estabelecendo os termos de reciprocidade."
  },
  {
    id: "house-8",
    number: "VIII",
    title: "Casa VIII",
    rulingSign: "Escorpião",
    classification: "Sucedente",
    theme: "Fusão Psíquica, Recursos Alheios, Morte, Oculto",
    description: "A casa da crise evolutiva, dos mistérios iniciáticos e das transições físicas e metafísicas. Regula os impostos, heranças, o dinheiro do cônjuge, a intimidade sexual como fusão psíquica profunda, os segredos psicológicos reprimidos e os processos de renascimento."
  },
  {
    id: "house-9",
    number: "IX",
    title: "Casa IX",
    rulingSign: "Sagitário",
    classification: "Cadente",
    theme: "Sabedoria Superior, Viagens Longas, Filosofia, Leis",
    description: "Mapeia a expansão de horizontes geográficos e intelectuais. Rege os estudos acadêmicos e teológicos de alto nível, os dogmas religiosos, as leis constitucionais, as viagens transoceânicas e a busca existencial por uma síntese doutrinária."
  },
  {
    id: "house-10",
    number: "X",
    title: "Casa X (Meio do Céu)",
    rulingSign: "Capricórnio",
    classification: "Angular",
    theme: "Status Público, Carreira, Destino Social, Autoridade",
    description: "O ponto culminante do céu natal. Corporifica a projeção pública do indivíduo, a carreira profissional, o prestígio social, a reputação conquistada perante a sociedade e as figuras arquetípicas de autoridade estatal e paterna."
  },
  {
    id: "house-11",
    number: "XI",
    title: "Casa XI",
    rulingSign: "Aquário",
    classification: "Sucedente",
    theme: "Grupos, Projetos de Futuro, Amizades, Esperanças",
    description: "Rege os planos intelectuais a longo prazo, as redes sociais de colaboração humanitária, os clubes ou agremiações ideológicas e os círculos de amizades que operam por afinidade mental e utopias comuns de evolução humana."
  },
  {
    id: "house-12",
    number: "XII",
    title: "Casa XII",
    rulingSign: "Peixes",
    classification: "Cadente",
    theme: "Confinamento, Inimigos Ocultos, Inconsciente Coletivo",
    description: "A última morada, o espaço de isolamento, sacrifício e transcendência. Rege os asilos, prisões, hospitais, os inimigos ocultos conspirando na sombra, os carmas não resolvidos da alma e o acesso direto ao depósito insondável do inconsciente coletivo."
  }
];

export const astrologicalAspects = [
  {
    id: "conjunction",
    name: "Conjunção",
    degree: "0°",
    symbol: "☌",
    nature: "Neutro / Foco Intenso",
    description: "Ocorre quando dois corpos celestes ocupam a mesma longitude zodiacal. Funde as energias planetárias de forma indivisível, criando um foco de força hiperconcentrado que pode atuar como impulsionador cego ou sobrecarga psíquica.",
    tension: 80
  },
  {
    id: "sextile",
    name: "Sextil",
    degree: "60°",
    symbol: "⚹",
    nature: "Harmônico / Oportunidade",
    description: "Uma relação angular de 60 graus que ativa elementos compatíveis (Fogo/Ar ou Terra/Água). Abre canais sutis de cooperação intelectual e material, necessitando, contudo, de uma ação intencional do operador para extrair o potencial latente.",
    tension: 20
  },
  {
    id: "square",
    name: "Quadratura",
    degree: "90°",
    symbol: "□",
    nature: "Dinâmico / Tensão Máxima",
    description: "Estabelece um ângulo reto de 90 graus entre planetas situados em signos de mesma qualidade/modality (ex: Cardinal para Cardinal). Desencadeia choques de atrito estrutural e crises constantes, forçando a consciência a agir para superar bloqueios.",
    tension: 100
  },
  {
    id: "trine",
    name: "Trígono",
    degree: "120°",
    symbol: "△",
    nature: "Harmônico / Fluidez Natural",
    description: "Um aspecto perfeito de 120 graus que conecta planetas na mesma triplicidade elemental (ex: três signos de Fogo). Representa o fluxo desobstruído de força, talentos herdados de vidas passadas e caminhos de menor resistência biológica e psicológica.",
    tension: 10
  },
  {
    id: "opposition",
    name: "Oposição",
    degree: "180°",
    symbol: "☍",
    nature: "Dinâmico / Polaridade e Balanço",
    description: "Um alinhamento de 180 graus que divide o zodíaco em dois eixos polares complementares. Provoca oscilações dramáticas, projeções de sombra psicológica no outro e a necessidade crucial de reconciliar pólos opostos através da integração harmônica.",
    tension: 90
  }
];