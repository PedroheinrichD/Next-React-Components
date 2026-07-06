# 1. Levantamento de requisitos (escopo do exercício)

- Obrigatório: 1 pergunta, 4 alternativas, indicar a correta visualmente
- Nice to have (depois): lista de perguntas, navegação entre elas, contador "1 de X perguntas"

# 2. Modelagem de dados (data modeling)

- Cada pergunta será um objeto dentro de uma lista (array), contendo:
  - **id**: identificador único da pergunta
  - **pergunta**: enunciado (string)
  - **alternativas**: lista com as 4 opções (string[])
  - **respostaCorreta**: string com o texto da alternativa certa (ex: "Corante")

- Formato do mock (arquivo `.ts` com dados estáticos): array de objetos seguindo essa estrutura, importado onde for necessário.

# 3. Arquitetura de componentes (component tree / hierarquia)

Estrutura de pastas decidida:

```
app/
  page.tsx
  components/
    Quiz.tsx
    Alternative.tsx
  data/
    Questions.ts
  types/
    Question.ts
```

- **Quiz.tsx**: importa os dados diretamente de `data/Questions.ts`, renderiza a pergunta atual e mapeia a lista de alternativas, importando `Alternative.tsx` pra cada uma. Também guarda a lógica de verificação da resposta correta.
- **Alternative.tsx**: recebe dados via props (texto da alternativa, se está selecionada, se é a correta) e cuida da aparência/clique.

Fluxo de dados (top-down): array nasce em `data/Questions.ts` → importado em `Quiz.tsx` → `Quiz.tsx` extrai a pergunta atual e passa as alternativas via props pro `Alternative.tsx`.

# 4. Definição de contratos (props/interfaces dos componentes)

*(Pendente de fechar — como o `Quiz.tsx` importa os dados diretamente, ele não recebe `question`/`alternatives` como props externas. Falta definir o contrato de props do `Alternative.tsx`: provavelmente `texto`, `isSelected`, `isCorrect`, `onClick`.)*

# 5. Gerenciamento de estado (state management)

- O state da alternativa selecionada mora em `Quiz.tsx` (componente pai mais próximo que precisa da informação).
- *(Pendente: dar um nome mais descritivo ao state, ao invés de "alternative".)*

# 6. Fluxo de interação (event handling)

- onClick em cada alternativa → aciona função → guarda a alternativa selecionada no state → atualiza → re-renderiza

# 7. Renderização condicional (conditional rendering)

- Selecionada + correta → verde
- Selecionada + errada → vermelho
- Não selecionada → cor neutra
- *(Pendente decidir: depois de responder, as outras alternativas mostram se eram certas/erradas, ou só a clicada muda de cor?)*
