# GLB Slider - Prova de Conceito (POC)

Uma prova de conceito para um novo componente de carrossel destinado ao produto O Globo, desenvolvido com Vite, TypeScript e comparando duas bibliotecas modernas: Swiper.js e Embla Carousel.

## 🌐 Demo ao Vivo

**[Ver Projeto Rodando ➜ https://oglobo-slider.vercel.app](https://oglobo-slider.vercel.app)**

## 🎯 Objetivo

Este projeto serve como POC para avaliar e demonstrar um novo design de carrossel para ser implementado no produto O Globo. O componente foi desenvolvido com foco em:

-   **Performance**: Comparação entre Swiper.js e Embla Carousel
-   **Responsividade**: Layout adaptável a diferentes tamanhos de tela
-   **Acessibilidade**: Controles de navegação intuitivos
-   **Moderna Stack**: TypeScript + Vite para desenvolvimento ágil
-   **Análise Comparativa**: Dois carrosséis lado a lado para análise

## 🚀 Tecnologias Utilizadas

-   **[Vite](https://vitejs.dev/)** - Build tool e servidor de desenvolvimento
-   **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
-   **[Swiper.js](https://swiperjs.com/)** - Biblioteca de carrossel moderna
    -   📚 [Ver exemplos de uso ➜ https://swiperjs.com/demos](https://swiperjs.com/demos)
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
│   ├── carousel-swipe/
│   │   └── swiper.js        # Implementação com Swiper.js
│   ├── carousel-embla/
│   │   └── embla.js         # Implementação com Embla Carousel
│   ├── main.ts              # Ponto de entrada principal
│   ├── style.css            # Estilos globais
│   ├── card.css             # Estilos dos cards de conteúdo
│   └── vite-env.d.ts        # Tipagens do Vite
├── public/                  # Arquivos estáticos
├── index.html               # Template HTML principal
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
└── README.md               # Este arquivo
```

## 🔄 Comparação de Bibliotecas

### Swiper.js

-   **Peso**: ~50KB minificado
-   **Características**: Rico em features, API robusta
-   **Configuração**: Mais opções built-in
-   **Performance**: Excelente para casos complexos

### Embla Carousel

-   **Peso**: ~15KB minificado
-   **Características**: Leve, modular, extensível
-   **Configuração**: Minimalista e flexível
-   **Performance**: Otimizado para performance

## ⚙️ Configuração dos Carrosséis

### Swiper Configuration

```typescript
const swiperParams: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
};
```

### Embla Configuration

```typescript
const emblaOptions = {
    align: 'start',
    containScroll: 'trimSnaps',
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

#### Swiper.js

-   Paginação com bullets dinâmicos
-   Navegação por toque/arraste
-   Scroll automático responsivo

#### Embla Carousel

-   Navegação por toque/arraste otimizada
-   Scroll livre (drag free)
-   Performance otimizada para mobile

## 🎨 Estilos

### Cores Principais

-   **Azul Primário**: `#1e4c9a` (títulos)
-   **Azul Ativo**: `#007aff` (paginação ativa)
-   **Cinza Base**: `#efefef` (fundo dos cards)
-   **Texto**: `#0d0d0d` (descrições)

### Layout

-   **Card**: 234px × 402px
-   **Border-radius**: 10px
-   **Espaçamento**: 16px entre slides
-   **Gap**: 20px entre seções

## 📱 Responsividade

Ambos os carrosséis são responsivos e se adaptam automaticamente:

-   Slides com largura automática
-   Layout flexível que se ajusta ao container pai
-   Otimização para diferentes dispositivos

## 🔧 Scripts Disponíveis

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm run build`   | Gera build otimizado para produção |
| `npm run preview` | Visualiza a build de produção      |

## 📊 Análise Comparativa

### Quando usar Swiper.js:

-   Projetos que precisam de muitas features built-in
-   Casos que requerem paginação complexa
-   Necessidade de efeitos visuais avançados

### Quando usar Embla Carousel:

-   Performance crítica (mobile-first)
-   Bundle size é uma preocupação
-   Necessidade de customização total
-   Projetos que valorizam simplicidade

## 📈 Próximos Passos

Esta POC serve como base para discussões sobre:

1. **Escolha da Biblioteca**: Decidir entre Swiper.js ou Embla baseado nos resultados
2. **Integração**: Como incorporar no ambiente de produção do O Globo
3. **Customização**: Ajustes visuais e de comportamento específicos
4. **Performance**: Testes de performance em diferentes dispositivos
5. **Acessibilidade**: Melhorias para atender padrões WCAG
6. **Testes**: Implementação de testes unitários e de integração

## 🧪 Testes de Performance

Para testar performance entre as duas bibliotecas:

1. Abra o DevTools do navegador
2. Vá para a aba Performance
3. Compare métricas de:
    - First Paint
    - Time to Interactive
    - Bundle Size
    - Memory Usage

## 🤝 Contribuição

Para contribuir com melhorias nesta POC:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é uma prova de conceito interna para O Globo.

---

**Desenvolvido por**: [Rodrigo Carneiro | @carneironline](https://github.com/carneironline)  
**Versão**: 0.0.0  
**Status**: Prova de Conceito - Análise Comparativa
