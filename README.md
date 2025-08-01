# GLB Slider - Prova de Conceito (POC)

Uma prova de conceito para um novo componente de carrossel destinado ao produto O Globo, desenvolvido com Vite, TypeScript e Swiper.js.

## 🎯 Objetivo

Este projeto serve como POC para avaliar e demonstrar um novo design de carrossel para ser implementado no produto O Globo. O componente foi desenvolvido com foco em:

-   **Performance**: Utilizando Swiper.js para navegação fluida
-   **Responsividade**: Layout adaptável a diferentes tamanhos de tela
-   **Acessibilidade**: Controles de navegação intuitivos
-   **Moderna Stack**: TypeScript + Vite para desenvolvimento ágil

## 🚀 Tecnologias Utilizadas

-   **[Vite](https://vitejs.dev/)** - Build tool e servidor de desenvolvimento
-   **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
-   **[Swiper.js](https://swiperjs.com/)** - Biblioteca de carrossel moderna
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
│   ├── main.ts          # Ponto de entrada e configuração do Swiper
│   ├── swiper.css       # Estilos específicos do carrossel
│   ├── card.css         # Estilos dos cards de conteúdo
│   └── vite-env.d.ts    # Tipagens do Vite
├── public/              # Arquivos estáticos
├── index.html           # Template HTML principal
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração do TypeScript
└── README.md           # Este arquivo
```

## ⚙️ Configuração do Carrossel

O carrossel está configurado com as seguintes características:

-   **slidesPerView**: `'auto'` - Slides com largura automática
-   **spaceBetween**: `16px` - Espaçamento entre slides
-   **centeredSlides**: `false` - Slides alinhados à esquerda
-   **pagination**: Paginação clicável com bullets dinâmicos

### Personalização

Para modificar o comportamento do carrossel, edite o arquivo `src/main.ts`:

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
    // Adicione suas configurações aqui
};
```

## 🎭 Componentes

### Card de Conteúdo

Cada slide contém um card estruturado com:

-   **Imagem**: Placeholder de 234x102px
-   **Título**: Texto destacado em azul (#1e4c9a)
-   **Descrição**: Texto descritivo
-   **Botões de Ação**: "Inscrever" e "Preview"

### Paginação

-   Bullets circulares customizados (14x14px)
-   Estado ativo destacado em azul (#007aff)
-   Posicionamento estático abaixo do carrossel

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
-   **Gap**: 20px entre carrossel e paginação

## 📱 Responsividade

O carrossel é responsivo e se adapta automaticamente:

-   Slides com largura automática (`slidesPerView: 'auto'`)
-   Layout flexível que se ajusta ao container pai
-   Paginação centralizada e responsiva

## 🔧 Scripts Disponíveis

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm run build`   | Gera build otimizado para produção |
| `npm run preview` | Visualiza a build de produção      |

## 📈 Próximos Passos

Esta POC serve como base para discussões sobre:

1. **Integração**: Como incorporar no ambiente de produção do O Globo
2. **Customização**: Ajustes visuais e de comportamento
3. **Performance**: Otimizações específicas para o contexto de uso
4. **Acessibilidade**: Melhorias para atender padrões WCAG
5. **Testes**: Implementação de testes unitários e de integração

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
**Status**: Prova de Conceito
