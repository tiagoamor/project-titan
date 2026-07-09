# Project Titan — App de Treino

App de treino em página única (HTML), hospedado no Netlify, focado em força/hipertrofia
com periodização de 12 semanas. Interface no estilo iOS (Liquid Glass).

## Recursos

- **Divisão Push / Pull / Legs / Upper** (+ Cardio e Extras), com 12 semanas em fases:
  Fundação → Intensificação → Pico → Deload (reps e RIR por fase).
- **Biblioteca de ~90 exercícios**: máquinas Hammer Strength / Life Fitness (com fotos)
  e exercícios livres de **barra, halteres e cabos** (com ícones).
- **Registro por série**: carga (digitada) e repetições (com botões +/–), gráfico de evolução.
- **Substituir exercício por músculo** (troca de aparelho) e **dica de execução** em cada exercício.
- **Construtor de protocolo** com gerador por regras — cada clique monta uma combinação diferente
  (compostos primeiro, variando equipamento/ângulo, volume e frequência por diretrizes atuais).
- **Sincronização na nuvem** (Netlify Functions + Blobs): dados salvos online, recuperação
  automática se o app for limpo, e **multiusuário por código** (cada pessoa vê só os seus dados).
- **Backup** exportar/importar (.json), **modo escuro** e **impressão** da ficha completa (A4 paisagem).
- **Navegação iOS**: barra inferior (Treino · Progresso · Ajustes), steppers e tela de Progresso.

## Arquivos

- `index.html` — o app (autossuficiente; é este que deve ser hospedado).
- `netlify/functions/sync.mjs`, `package.json`, `netlify.toml` — backend de sincronização (Netlify Blobs).
- `apple-touch-icon.png` — ícone da tela de início.
- `Estrategia_Titan_12semanas.pdf` — estratégia de treino (12 semanas).
- `Titan_Folha_Registro_12sem.pdf` — folha de registro (A4 paisagem).
- `project_titan_app_v*.html` — versões anteriores (histórico).

## Publicar (Netlify via GitHub)

1. Suba os arquivos para o repositório (o Netlify está ligado a ele por deploy contínuo).
2. A cada commit no `main`, o Netlify publica automaticamente em ~1–2 min.
3. No iPhone: abrir o link no Safari → Compartilhar → **Adicionar à Tela de Início**.

## Sincronização na nuvem

- Ligada automaticamente; cada pessoa recebe um **código** próprio (⚙ Configurações → ☁).
- Use o **mesmo código** nos seus outros aparelhos para sincronizar os dados.
- Nada de senhas/URLs: o app fala com a própria função do site.

## Versão

Atual: **v12**. O histórico completo fica nos commits do GitHub.
