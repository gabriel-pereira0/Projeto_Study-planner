# 📚 Study Planner

> ⚠️ **Observação:** Este repositório não contempla o desenvolvimento da aplicação em si. O projeto base (UI, componentes e funcionalidades) já foi fornecido pronto pelo curso. O foco aqui é **exclusivamente na refatoração do gerenciamento de estado**, substituindo a Context API pelo Redux Toolkit.

Projeto desenvolvido durante curso de **Gerenciamento de Estado em React**, com foco na migração de **Context API** para **Redux Toolkit**.

---

## 🎯 Objetivo do Projeto

O **Study Planner** é uma aplicação de lista de tarefas voltada para estudos. O usuário pode:

- ➕ Adicionar tarefas de estudo
- ✅ Marcar tarefas como concluídas
- 🗑️ Remover tarefas da lista

A aplicação foi entregue pelo curso com a lógica de estado implementada via **Context API**. O exercício proposto consiste em **refatorar toda a camada de estado** substituindo a Context API pelo **Redux Toolkit**.

---

## 🔄 O que foi refatorado

| Antes                         | Depois                                          |
| ----------------------------- | ----------------------------------------------- |
| Context API (`createContext`) | Redux Toolkit (`createSlice`, `configureStore`) |
| `useContext` nos componentes  | `useSelector` e `useDispatch`                   |
| Provider manual no `App.jsx`  | `<Provider store={store}>` do `react-redux`     |
| Estado e actions no context   | Slice com `reducers` e `actions` exportadas     |

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- Vite (bundler do curso)

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gabriel-pereira0/Projeto_Study-planner

# Acesse a pasta do projeto
cd study-planner

# Instale as dependências
npm install
```

### Instale as dependências do Redux

```bash
npm install @reduxjs/toolkit react-redux
```

### Rode o projeto

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 🧠 Conceitos praticados

- **`createSlice`** — criação do slice com estado inicial, reducers e actions em um único lugar
- **`configureStore`** — montagem da store combinando os slices
- **`useSelector`** — leitura do estado global nos componentes
- **`useDispatch`** — disparo de actions nos componentes
- **`<Provider>`** — disponibilização da store para toda a árvore de componentes

---

## 📝 Aprendizados

Este projeto demonstra na prática como o **Redux Toolkit** simplifica o fluxo de estado em relação à abordagem manual com Context API, eliminando boilerplate e tornando o código mais previsível e fácil de manter em aplicações maiores.
