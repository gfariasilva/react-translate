# Lab para tradução - React

## Configuração do ambiente

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

## Arquivos de tradução

Em seguida, cria-se os arquivos de tradução:

```
public/locales/
└─ en/              # Traduções para inglês
   ├─ common.json   # Traduções compartilhadas entre páginas (navbar, botões, etc.)
   └─ home.json     # Traduções específicas para páginas (home, por exemplo)
└─ pt/
   ├─ common.json
   └─ home.json
```

A ideia é utilizar esses namespaces para carregar apenas os textos necessários no futuro:
```ts
useTranslation('common'); // Carrega apenas textos compartilhados
useTranslation(['common', 'home']); // Carrega ambos
```

## Arquivos de configuração
Cria-se os arquivos:

```
lib/
└─ i18n.config.ts   # Configurações -> locales permitidos, etc.
└─ i18n.server.ts   # Definição em si do objeto i18n a ser utilizado na página
```

Cada arquivo está comentado e definido no local explicitado acima.

## Estruturação de rotas / folders

A ideia da estruturação é a seguinte:

```
src/app/
└─ [locale]/
   ├─ layout.tsx
   ├─ page.tsx
   ├─ about/
   │  └─ page.tsx
   └─ (components)/
      └─ LangSwitcher.tsx
```

Dessa forma, ao usuário acessar qualquer endpoint, o locale vai ser atribuído de acordo com o parâmetro de URL `locale`.

