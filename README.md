# Comprar App

Aplicativo de compras desenvolvido com React Native e Expo.

## 🚀 Desenvolvimento

### Pré-requisitos

- Node.js (versão 20 ou superior)
- npm ou yarn

### Instalação

```bash
npm install
```

### Comandos Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento Expo
- `npm run android` - Inicia o app no Android
- `npm run ios` - Inicia o app no iOS
- `npm run web` - Inicia o app no navegador web

## 📦 Deploy para GitHub Pages

O deploy para GitHub Pages é feito automaticamente através do GitHub Actions quando você faz push para a branch `main`.

### Configuração Inicial

1. No repositório do GitHub, vá em **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O workflow irá executar automaticamente no próximo push para a branch `main`

### Deploy Manual

Se você preferir fazer o deploy manualmente:

```bash
npm run build:web
npm run deploy
```

**Nota:** O deploy manual requer que você tenha configurado o gh-pages e tenha permissões de push no repositório.

### Acesso à Aplicação

Após o deploy, sua aplicação estará disponível em:
```
https://kiovaz.github.io/comprar-react-native/
```

## 🔧 Configurações

O arquivo `app.json` contém as configurações do Expo, incluindo:
- `experiments.baseUrl`: Configurado para `/comprar-react-native` para funcionar corretamente no GitHub Pages

## 📝 Estrutura do Projeto

```
.
├── src/
│   ├── app/          # Páginas do Expo Router
│   ├── components/   # Componentes reutilizáveis
│   ├── assets/       # Imagens e recursos
│   └── types/        # Tipos TypeScript
├── assets/           # Assets raiz
├── .github/
│   └── workflows/    # GitHub Actions workflows
└── app.json          # Configurações do Expo
```

## 🛠️ Tecnologias

- React Native
- Expo
- TypeScript
- Expo Router
- React Native Web
