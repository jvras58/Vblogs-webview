# Blog - desafio Vlab - Versão Mobile Utilizando WebView do React Native

## 📱 Sobre o Projeto
Este projeto é uma extensão mobile da versão web do Blog Vlab, implementada utilizando WebView do React Native. A aplicação permite acessar todo o conteúdo da plataforma web através de uma interface nativa para dispositivos móveis.

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework que permite o desenvolvimento de aplicações móveis multiplataforma usando React
- **Expo**: Plataforma de desenvolvimento que simplifica a criação de apps React Native
- **EAS**: um serviço de construção em nuvem usado para construir e publicar aplicativos React Native.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática
- **WebView**: Componente que permite renderizar conteúdo web dentro do app nativo

## 🛠️ Pré-requisitos

- Node.js 
- npm

| **Tecnologia**        | **Versão**       |
|-----------------------|------------------|
| **Runtime**           |                  |
| Node.js               | v18.x.x          |
| **Framework**         |                  |
| React Native          | v13.x.x          |
| expo                  | v9.x.x           |
| **Devtime**           |                  |
| npm                   | v9.x.x           |


### 🏗 Arquitetura do Projeto

```
    /
    ├── 📄README.md
    ├── {} app.json         # Configurações do Expo
    ├── {} eas.json         # Configurações do Expo Application Services (EAS)
    ├── 🇹 index.ts
    ├── 📁src/
    │   ├── 📁components/   # Componentes reutilizáveis
    │   │   └── ⚛ Loading.tsx
    │   └── ⚛ App.tsx       # Componente principal
    ├── {} tsconfig.json
    ├── {} package.json

```

## ⚙️ Como Executar

```bash
# Clone o repositório
git clone <url-do-repositório>

# Instale as dependências
npm install

# Execute o projeto
npx expo start
```

> Utilize o expo GO para verificar no dispositivo mobile ou utilize no navegador como preferir...

## 📱 Recursos

- Carregamento otimizado
- Interface nativa
- Suporte a iOS e Android
- Integração completa com a versão web

### Produção (Builds)

1. **Gerar o build:**
   - Android:
     ```bash
     eas build --platform android
     ```
   - iOS:
     ```bash
     eas build --platform ios
     ```

> Após o build um link e fornecido pelo Expo para baixar ou publicar o aplicativo.