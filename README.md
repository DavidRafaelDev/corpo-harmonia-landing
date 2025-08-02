# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1ab04cc7-81d4-4c88-8dc1-4cd2b9355a0f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1ab04cc7-81d4-4c88-8dc1-4cd2b9355a0f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- EmailJS (para envio de emails)

## Configuração do Formulário de Contato

Para configurar o envio de emails através do formulário de contato:

1. **Configurar EmailJS**: Siga o guia em `EMAILJS_SETUP.md`
2. **Variáveis de ambiente**: Copie `env.example` para `.env` e configure suas chaves
3. **Testar**: Execute `npm run dev` e teste o formulário

### Configuração Rápida

```bash
# 1. Copiar arquivo de exemplo
cp env.example .env

# 2. Editar .env com suas chaves do EmailJS
# 3. Instalar dependências
npm install

# 4. Executar projeto
npm run dev
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1ab04cc7-81d4-4c88-8dc1-4cd2b9355a0f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
