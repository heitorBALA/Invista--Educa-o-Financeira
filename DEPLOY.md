# Como Colocar o Site no Ar (Deploy)

Aqui está um guia passo a passo para colocar seu projeto **Invistaí** online. A maneira mais fácil e recomendada para projetos Vite/React é usar a **Vercel** ou **Netlify**.

## Opção 1: Vercel (Recomendado)

A Vercel é a criadora do Next.js e tem um suporte excelente para projetos Vite.

1.  **Crie uma conta na Vercel**: Acesse [vercel.com](https://vercel.com) e crie uma conta (pode usar o GitHub).
2.  **Instale a CLI da Vercel (Opcional, mas fácil)**:
    - No terminal do seu projeto, rode: `npm i -g vercel`
    - Depois rode: `vercel`
    - Siga as instruções na tela (login, confirmar projeto, etc). A Vercel detectará automaticamente que é um projeto Vite.
3.  **Via Dashboard (Sem código)**:
    - Suba seu código para o GitHub.
    - No painel da Vercel, clique em "Add New..." -> "Project".
    - Importe seu repositório do GitHub.
    - A Vercel detectará as configurações. Clique em "Deploy".

## Opção 2: Netlify

O Netlify também é muito simples e popular.

1.  **Crie uma conta no Netlify**: Acesse [netlify.com](https://netlify.com).
2.  **Arraste e Solte (Drag & Drop)**:
    - No seu computador, rode o comando de build: `npm run build`
    - Isso criará uma pasta `dist` no seu projeto.
    - Vá para o painel do Netlify e arraste essa pasta `dist` para a área de upload. O site estará no ar em segundos.
3.  **Via GitHub (Automático)**:
    - Conecte seu GitHub ao Netlify.
    - Escolha o repositório.
    - O comando de build deve ser `npm run build` e o diretório de publicação `dist`.

## Comandos Importantes

Antes de fazer o deploy, certifique-se de que tudo está funcionando:

-   **Testar localmente**: `npm run dev`
-   **Gerar versão final**: `npm run build`
-   **Testar versão final**: `npm run preview`

## Configurações Específicas

Seu projeto usa **Vite**. As plataformas acima detectam isso automaticamente, mas se perguntarem:

-   **Build Command**: `npm run build`
-   **Output Directory**: `dist` (ou `dist/public` conforme seu `vite.config.ts`)
    - *Nota*: Verifiquei seu `vite.config.ts` e o `outDir` está configurado para `dist/public`. Então, na Vercel/Netlify, o diretório de saída deve ser **`dist/public`**.

```typescript
// vite.config.ts
build: {
  outDir: path.resolve(import.meta.dirname, "dist/public"),
  emptyOutDir: true,
},
```
