# 📚 Study Planner

Projeto desenvolvido em **React** com foco na refatoração do gerenciamento de estado da aplicação, substituindo a **Context API** por **Redux Toolkit**.

> ⚠️ **Observação:** A interface, componentes e funcionalidades base da aplicação foram disponibilizados pelo curso. O desenvolvimento realizado neste repositório consiste na refatoração completa do gerenciamento de estado utilizando Redux Toolkit.

## 🌐 Projeto Online

👉 **Acesse o projeto:** https://SEU-LINK-VERCEL.app/

## 📋 Funcionalidades

- Adição de tarefas de estudo
- Marcação de tarefas como concluídas
- Remoção de tarefas
- Gerenciamento global de estado com Redux Toolkit
- Atualização da interface utilizando React Redux

## 🛠️ Tecnologias utilizadas

- React
- Redux Toolkit
- React Redux
- JavaScript
- Vite

## 💻 Sobre o projeto

Este projeto foi desenvolvido durante um curso de Gerenciamento de Estado em React com o objetivo de substituir a implementação baseada em **Context API** por uma arquitetura utilizando **Redux Toolkit**, aplicando boas práticas para gerenciamento de estado em aplicações React.

## 🔄 Refatoração realizada

Durante o desenvolvimento, foram realizadas as seguintes alterações:

| Antes                         | Depois                                           |
| ----------------------------- | ------------------------------------------------ |
| Context API (`createContext`) | Redux Toolkit (`createSlice` e `configureStore`) |
| `useContext`                  | `useSelector` e `useDispatch`                    |
| Provider manual               | `<Provider store={store}>`                       |
| Estado distribuído no Context | Estado centralizado em um Slice                  |

## 🚀 Aprendizados

Durante este projeto, pratiquei:

- Criação de slices utilizando `createSlice`;
- Configuração da store com `configureStore`;
- Gerenciamento de estado global com Redux Toolkit;
- Utilização dos Hooks `useSelector` e `useDispatch`;
- Integração do React Redux com aplicações React;
- Organização de código seguindo boas práticas de gerenciamento de estado.

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/gabriel-pereira0/Projeto_Study-planner
```

2. Acesse a pasta do projeto:

```bash
cd study-planner
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Abra no navegador:

```text
http://localhost:5173
```
