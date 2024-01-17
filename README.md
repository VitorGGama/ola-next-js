# Anotações gerais sobre Next.js

Next.js é um framework Fullstack que permite criar
aplicações React modernas e otimizadas para mecanismos de busca.

Next.js faz a renderização do HTML no servidor, ou seja, é `ssr`
`Server Side rendering`.

Para criar e navegar por páginas na aplicação Next.js, basta criar
componentes/páginas no diretório `pages` que automaticamente elas estarão disponiveis
para navegação atarvés de rotas.

## Sobre o arquivo \_app.js e \_document.js

Arquivo de configuração global para personalizar o comportamento
da aplicação Next.js.

### \_app.js

- Adicionar componentes globais ao app
- Pode ser usado para layuot e estilos globais
- Tem uma finalidade semelhante ao App.js ou index.js do React
- Renderizado no client e no Server

### \_document.js

- Usado para personalizar o HTML de todas as paginas em relação ao <head>
- Pode ser para metas tags, scripts, estilos globais
- É carregado no sevidor na renderização inicial
