# Lab para tradução - React

- Criação do ambiente (React/Next.js/TypeScript):

```bash
npx create-next-app@latest react-translate --typescript
```

Criei também um docker-compose e um Dockerfile para execução local:
```bash
docker compose watch
```

Para instalação da biblioteca de internacionalização (i18next):

```bash
npm install react-i18next i18next --save

npm install i18next-http-backend i18next-browser-languagedetector --save
```

- OBS:
    - **i18next-browser**-languagedetector: caso queira detectar automaticamente a linguagem do browser do usuário

    - **i18next-http-backend**: carregamento dinâmico das linguagens (não pré-builda tudo)

