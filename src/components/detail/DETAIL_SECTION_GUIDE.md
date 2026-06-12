# DetailSection Component

Um componente reutilizável para adicionar seções de conteúdo em páginas detail do Grimório.

## Características

- ✅ Múltiplos tipos de conteúdo (texto, listas, grids)
- ✅ Tags técnicas customizáveis
- ✅ Títulos e subtítulos
- ✅ Responsivo
- ✅ Estilo consistente com o projeto
- ✅ Funciona em qualquer página detail

## Uso Básico

```jsx
import DetailSection from '../../../components/detail/DetailSection';
import '../../../styles/DetailSection.styles.css';

// Em um componente detail:
<DetailSection
  tag="[I. SEÇÃO_PRINCIPAL]"
  title="Título da Seção"
  content="Conteúdo em texto livre..."
  type="text"
/>
```

## Tipos de Conteúdo

### 1. Texto (type="text")

```jsx
<DetailSection
  tag="[I. DOUTRINA]"
  title="Doutrinas Esotéricas"
  content="Texto descritivo aqui..."
  type="text"
/>
```

### 2. Lista (type="list")

```jsx
<DetailSection
  tag="[II. PROTOCOLOS]"
  title="Protocolo de Evocação"
  type="list"
  items={[
    "Primeiro passo do ritual",
    "Segundo passo do ritual",
    { title: "Passo Especial", text: "Descrição detalhada" }
  ]}
/>
```

### 3. Grid (type="grid")

```jsx
<DetailSection
  tag="[III. ATRIBUIÇÕES]"
  title="Correspondências"
  type="grid"
  items={[
    { label: "ELEMENTO", value: "Fogo" },
    { label: "PLANETA", value: "Sol" },
    { label: "METAL", value: "Ouro" }
  ]}
/>
```

### 4. Customizado (type="custom")

```jsx
<DetailSection
  tag="[IV. VISUAL]"
  content={
    <div className="custom-content">
      {/* Conteúdo JSX customizado */}
    </div>
  }
  type="custom"
/>
```

## Props Disponíveis

| Prop | Tipo | Descrição |
|------|------|-----------|
| `tag` | string | Tag técnica (ex: "[I. SEÇÃO]") |
| `title` | string | Título da seção |
| `subtitle` | string | Subtítulo opcional |
| `content` | string/JSX | Conteúdo (texto ou JSX customizado) |
| `type` | string | "text" \| "list" \| "grid" \| "custom" |
| `items` | array | Items para listas e grids |

## Exemplo Completo

```jsx
import DetailSection from '../../../components/detail/DetailSection';

const MyDetail = () => {
  return (
    <div className="detail-wrapper">
      <DetailSection
        tag="[I. DESCRIÇÃO]"
        title="Natureza e Função"
        content="Descrição geral do conceito..."
        type="text"
      />

      <DetailSection
        tag="[II. PROTOCOLOS]"
        title="Protocolos de Operação"
        type="list"
        items={[
          "Preparação inicial",
          "Invocação da entidade",
          { title: "Proteção", text: "Manter escudo mágico ativo" }
        ]}
      />

      <DetailSection
        tag="[III. CORRESPONDÊNCIAS]"
        title="Atribuições Esotéricas"
        type="grid"
        items={[
          { label: "ELEMENTO", value: "Fogo" },
          { label: "PLANETA", value: "Sol" },
          { label: "METAL", value: "Ouro" },
          { label: "INCENSO", value: "Olíbano" }
        ]}
      />
    </div>
  );
};
```

## Integração com Páginas Existentes

O componente foi criado para ser reutilizável em qualquer página detail como:
- `ArcanaDetail`
- `MinorArcanaDetail`
- `DaemonDetail`
- `AnjoDetail`
- `QliphothDetail`
- `SephirahDetail`
- `PlanetDetail`
- `SignDetail`

Basta importar, adicionar os estilos e usar!
