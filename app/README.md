# Projeto React com TailwindCSS - Mini Port

Este projeto é uma aplicação **React** utilizando **TypeScript** e **TailwindCSS** para estilização. Ele apresenta um layout simples e responsivo de um perfil de usuário.

## Funcionalidades

### 1. **Interface do Usuário**
   - Exibe informações sobre o usuário, como nome, cargo e foto de perfil.
   - Utiliza uma estrutura flexível para se adaptar a diferentes tamanhos de tela.

### 2. **Layout Responsivo**
   - O layout se adapta automaticamente para telas pequenas (como dispositivos móveis).
   - O TailwindCSS facilita a criação de um design responsivo sem a necessidade de escrever muito CSS.

### 3. **Componentes**
   - **Imagem de Perfil**: Exibe uma foto do usuário com um formato circular.
   - **Bio**: Seção de texto que descreve a experiência e as habilidades do usuário.
   - **Stacks**: Exibe as tecnologias que o usuário domina.

## Como Rodar o Projeto

1. **Clone o repositório:**
   git clone https://github.com/matteussaraujo/mini-port
   cd mini-port

2. Instale as dependências:
  npm install

3. Inicie o servidor de desenvolvimento:
    npm run dev
   
4. Acesse o projeto no navegador: O projeto estará disponível em http://localhost:3000.

5. Estrutura do Projeto
   /src
  /assets
    /img
      - foto-perfil.png
  /components
    - App.tsx
  /styles
    - index.css
  - main.tsx
/tailwind.config.js
/tsconfig.json
/package.json
/vite-env.d.ts

## Descrição dos Arquivos
- App.tsx: Componente principal da aplicação, que exibe o perfil do usuário.
- index.css: Arquivo de estilo que inclui o TailwindCSS.
- main.tsx: Arquivo de entrada da aplicação, onde o React é inicializado.
- tailwind.config.js: Arquivo de configuração do TailwindCSS.
- tsconfig.json: Configuração do TypeScript.

## Dependências
- React: Biblioteca JavaScript para construção de interfaces de usuário.
- TailwindCSS: Framework CSS para construção de interfaces responsivas e personalizáveis.
- TypeScript: Superset do JavaScript que adiciona tipagem estática e recursos de orientação a objetos.
- Vite: Build tool para aplicações modernas, com foco em velocidade.

## Scripts
- npm run dev: Inicia o servidor de desenvolvimento.
- npm run build: Compila o projeto para produção.
- npm run lint: Verifica a qualidade do código com ESLint.
- npm run preview: Visualiza a versão de produção localmente.


  
