# GLB Slider - Prova de Conceito (POC)

Uma prova de conceito para um novo componente de carrossel destinado ao produto O Globo, desenvolvido com Vite, TypeScript e Embla Carousel.

## 🌐 Demo ao Vivo

**[Ver Projeto Rodando ➜ https://oglobo-slider.vercel.app](https://oglobo-slider.vercel.app)**

## 🎯 Objetivo

Este projeto serve como POC para avaliar e demonstrar um novo design de carrossel para ser implementado no produto O Globo. O componente foi desenvolvido com foco em:

-   **Performance**: Utilizando Embla Carousel para máxima eficiência
-   **Responsividade**: Layout adaptável a diferentes tamanhos de tela
-   **Acessibilidade**: Controles de navegação intuitivos
-   **Moderna Stack**: TypeScript + Vite para desenvolvimento ágil
-   **Bundle Size**: Biblioteca leve e otimizada

## 🚀 Tecnologias Utilizadas

-   **[Vite](https://vitejs.dev/)** - Build tool e servidor de desenvolvimento
-   **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
-   **[Embla Carousel](https://www.embla-carousel.com/)** - Carrossel leve e extensível
    -   📚 [Ver documentação ➜ https://www.embla-carousel.com/get-started/](https://www.embla-carousel.com/get-started/)
-   **CSS3** - Estilização personalizada
-   **HTML5** - Estrutura semântica

## 📋 Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/carneironline/oglobo-slider.git
cd oglobo-slider
```

2. Instale as dependências:

```bash
npm install
```

## 🏃‍♂️ Como Executar

### Desenvolvimento

```bash
npm run dev
```

Acesse <http://localhost:5173> para ver o projeto em execução.

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🎨 Estrutura do Projeto

```text
glb-slider/
├── src/
│   ├── carousel-embla/
│   │   └── embla.js         # Implementação com
│   ├── partials/
│   │   └── card.hbs         # Html do card
│   ├── main.ts              # Ponto de entrada principal
│   ├── style.css            # Estilos globais
│   ├── card.css             # Estilos dos cards de conteúdo
│   └── vite-env.d.ts        # Tipagens do Vite
├── public/                  # Arquivos estáticos
├── index.html               # Template HTML principal
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Este arquivo
```

## ⚙️ Configuração do Carrossel

### Embla configuração padrão

```typescript
const emblaDefaultOptions = {
    loop: false,
    slidesToScroll: 'auto',
    duration: 60,
    dragFree: true,
};
```

## 🎭 Componentes

### Card de Conteúdo

Cada slide contém um card estruturado com:

-   **Imagem**: Placeholder de 234x102px
-   **Título**: Texto destacado em azul (#1e4c9a)
-   **Descrição**: Texto descritivo
-   **Botões de Ação**: "Inscrever" e "Preview"

### Controles de Navegação

-   Navegação por toque/arraste otimizada
-   Scroll livre (drag free)
-   Paginação com dots
-   Performance otimizada para mobile

## 🎨 Estilos

### Layout

-   **Card**: 234px × 402px
-   **Border-radius**: 10px
-   **Espaçamento**: 16px entre slides
-   **Gap**: 20px entre seções

## 📱 Responsividade

O carrossel é responsivo e se adapta automaticamente:

-   Slides com largura automática
-   Layout flexível que se ajusta ao container pai
-   Otimização para diferentes dispositivos

## 🔧 Scripts Disponíveis

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm run build`   | Gera build otimizado para produção |
| `npm run preview` | Visualiza a build de produção      |

## ✨ Vantagens do Embla Carousel

### Por que Embla Carousel?

-   **Peso**: ~15KB minificado - extremamente leve
-   **Performance**: Otimizado para performance máxima
-   **Flexibilidade**: Altamente customizável e extensível
-   **Acessibilidade**: Built-in support para screen readers
-   **Framework Agnostic**: Funciona com qualquer framework
-   **Mobile First**: Otimizado para dispositivos móveis

## 📈 Próximos Passos

Esta POC serve como base para discussões sobre:

1. **Integração**: Como incorporar no ambiente de produção do O Globo
2. **Customização**: Ajustes visuais e de comportamento específicos
3. **Performance**: Testes de performance em diferentes dispositivos
4. **Acessibilidade**: Melhorias para atender padrões WCAG
5. **Testes**: Implementação de testes unitários e de integração
6. **Plugins**: Avaliação de plugins adicionais do Embla

## 🧪 Testes de Performance

Para testar performance do carrossel:

1. Abra o DevTools do navegador
2. Vá para a aba Performance
3. Analise métricas de:
    - First Paint
    - Time to Interactive
    - Bundle Size (~15KB)
    - Memory Usage

## 📄 Licença

Este projeto é uma prova de conceito interna para O Globo.

---

**Desenvolvido por**: [Rodrigo Carneiro | @carneironline](https://github.com/carneironline)  
**Versão**: 0.0.0  
**Status**: Prova de Conceito - Embla Carousel
