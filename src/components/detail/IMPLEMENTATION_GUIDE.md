# Implementação de DetailSection em Todas as Páginas Detail

## Visão Geral

Um template e exemplo foram criados para facilitar a adição de seções de conteúdo estruturado em todas as páginas detail do Grimório.

## ✅ Arquivo de Template

**`src/data/detailSectionsTemplate.js`**

Contém exemplos de estruturas de dados para cada tipo de página:
- `arcanaDetailSections` - Tarot Major Arcana
- `daemonDetailSections` - Goetia
- `anjoDetailSections` - Cabala Anjos
- `planetDetailSections` - Astrologia Planetas
- `sephirahDetailSections` - Árvore da Vida
- `qliphahDetailSections` - Árvore da Morte
- `signDetailSections` - Astrologia Signos
- `minorArcanaDetailSections` - Tarot Minor Arcana

## ✅ Exemplo Implementado

**ArcanaDetail.jsx** (Tarot Major Arcana)

- Imports: `DetailSection`, `arcanaDetailSections`, `DetailSection.styles.css`
- Renderização: 4 seções de detalhes com estruturas diferentes
- Estilos: `.arcana-detail-sections` adicionado em ArcanaDetail.styles.css

## 🔧 Como Implementar em Outras Páginas

### Passo 1: Adicionar dados ao arquivo de dados

Exemplo: `src/data/goetia/goetiaData.js`

```javascript
// No final do arquivo, adicione:
export const daemonDetailSections = {
  manifestation: {
    tag: "[I. MANIFESTAÇÃO_VISUAL]",
    title: "Como o Daemon se Manifesta",
    type: "text",
    content: "Descrição de manifestação..."
  },
  influence: {
    tag: "[II. ÁREAS_DE_INFLUÊNCIA]",
    title: "Domínios de Atuação",
    type: "list",
    items: [
      "Domínio 1",
      "Domínio 2",
      { title: "Especial", text: "Descrição" }
    ]
  },
  // ... adicione mais seções conforme necessário
};
```

### Passo 2: Atualizar a página detail

Exemplo: `src/pages/goetia/daemons/DaemonDetail.jsx`

```javascript
import DetailSection from '../../../components/detail/DetailSection';
import { daemonDetailSections } from '../../../data/goetia/goetiaData';
import '../../../styles/DetailSection.styles.css';

// Em um componente detail, após o footer adicione:
<div className="daemon-detail-sections">
  <DetailSection {...daemonDetailSections.manifestation} />
  <DetailSection {...daemonDetailSections.influence} />
  <DetailSection {...daemonDetailSections.cautions} />
</div>
```

### Passo 3: Adicionar estilos

No arquivo de estilos correspondente (ex: `DaemonDetail.styles.css`):

```css
.daemon-detail-sections {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(176, 141, 87, 0.2);
  display: flex;
  flex-direction: column;
  gap: 40px;
}
```

## 📋 Páginas para Implementar

Baseado no padrão de ArcanaDetail, implemente em:

1. **Tarot:**
   - [ ] `MinorArcanaDetail.jsx`

2. **Astrologia:**
   - [ ] `PlanetDetail.jsx`
   - [ ] `SignDetail.jsx`

3. **Goetia:**
   - [ ] `DaemonDetail.jsx`

4. **Cabala:**
   - [ ] `AnjoDetail.jsx`
   - [ ] `QliphothDetail.jsx`
   - [ ] `SephirahDetail.jsx`

## 🎯 Estrutura de DetailSection

### Tipos Disponíveis

1. **text** - Conteúdo textual simples
   ```javascript
   { tag: "...", title: "...", type: "text", content: "..." }
   ```

2. **list** - Lista com bullets
   ```javascript
   { tag: "...", title: "...", type: "list", items: ["item1", "item2", ...] }
   ```

3. **grid** - Grid de label/value
   ```javascript
   { tag: "...", title: "...", type: "grid", items: [
     { label: "LABEL", value: "value" },
     ...
   ]}
   ```

4. **custom** - JSX customizado
   ```javascript
   { tag: "...", type: "custom", content: <CustomJSX /> }
   ```

## 💡 Dicas

- Mantenha os tags técnicos (ex: `[I. SEÇÃO]`) para consistência
- Use cores padrão do projeto: `--color-gold`, `--color-crimson`, etc.
- Estruture dados em objetos nomeados para melhor organização
- Teste responsividade em diferentes tamanhos de tela
- DetailSection.styles.css já está otimizado para mobile

## 📝 Nota

O componente `DetailSection` é totalmente genérico e reutilizável. Todos os estilos já estão no arquivo `DetailSection.styles.css`, então basta adicionar os dados e renderizar o componente!
