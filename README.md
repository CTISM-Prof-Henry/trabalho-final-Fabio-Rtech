[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GWai-EX3)
# trabalho-final-paginas-web

> [!NOTE]
> Siga para a Seção [Ajuda](AJUDA.md) para visualizar dicas de como baixar os arquivos do GitHub para seu computador e
> enviá-los de volta para o GitHub depois de modificá-los. 

Neste repositório você deve desenvolver o trabalho final da disciplina de **Construção de Páginas Web.**
O objetivo da atividade é desenvolver um pequeno site utilizando **HTML, CSS e JavaScript**, aplicando os conceitos estudados em aula.

O projeto deve ser publicado no **GitHub Pages** e apresentado em aula para o professor.

## 📌 Checklist

* [x] meu site tem pelo menos um arquivo do tipo `.html` 
* [x] estou usando CSS externo, em um arquivo separado `.css`
* [x] estou usando Javascript externo, em um arquivo separado `.js`
* [x] os arquivos do meu site estão na pasta `site`
* [x] a pasta `site` tem um arquivo `index.html`, que é a página inicial do meu site; sem esse arquivo, o GitHub Pages 
      não vai funcionar
* [x] estou ciente que, se eu modificar ou excluir arquivos que não estejam na pasta `site` 
      (por exemplo, `.github` ou `README.md`), isso pode afetar o funcionamento do meu site
* [x] respondi todas as perguntas e preenchi todos os checkboxes abaixo
* [x] meu site está hospedado no GitHub Pages, no link `https://ctism-prof-henry.github.io/trabalho-final-Fabio-Rtech/`

## 📖 Descrição do projeto

Descreva abaixo **sobre o que se trata seu site:**

- **Tema:**
- O site apresenta os serviços da barbearia Old School Flow, possuí uma proposta clássica/vintage, optei por uma paleta escura com dourado e creme.
- **Público-alvo:**
- Publico masculino, na faixa etária de 20 a 40 anos que procura nostalgia das barbearias dos anos 2000 em diante.
- **Funcionalidades:**
- Navegação por âncoras, tem o menu fixo que direciona o visitante para as seções da página.
- Lista de cortes e tratamentos oferecidos, com descrições e preços.
- Possui galeria com algumas imagens relacionados aos serviços prestados.
- Tem localização e formas de entrar em contato para gerar agendamento.

## Uso de IA

Se você utilizou uma IA, marque a caixa abaixo e preencha os campos:

* [x] declaro que utilizei uma IA para me auxiliar na elaboração do trabalho, mas que domino os conceitos vistos em aula
  e saberei explicá-los quando indagado pelo professor.

* **IA utilizada:**
* **Forma de utilização da IA:**
  * [x] fiz perguntas pontuais à IA, mas eu programei o código do meu site
  * [x] dei um prompt para a IA, ela me deu um código e eu colei o código nos arquivos do meu site

## 🧩 Componentes HTML utilizados

Marque com `[x]` os elementos que **foram implementados no seu site**. Você não precisa implementar todos.

### 🏗 HTML

#### Estrutura básica

- [x] `<!DOCTYPE html>`
- [x] `<html>`
- [x] `<head>`
- [x] `<title>`
- [x] `<body>`

#### Estrutura semântica

- [x] `<header>`
- [x] `<nav>`
- [x] `<main>`
- [x] `<section>`
- [x] `<article>`
- [ ] `<aside>`
- [x] `<footer>`

#### Conteúdo

- [x] Títulos (`h1`, `h2`, `h3`, etc.)
- [x] Parágrafos (`p`)
- [x] Imagens (`img`)
- [x] Links (`a`)
- [x] Listas:
  - [ ] `ul`
  - [ ] `ol`

#### Formulários

- [ ] `<form>`
- [ ] `<input>`
- [ ] `<label>`
- [ ] `<textarea>`
- [x] `<button>`

### 🎨 CSS

- Seletor de...
  - [x] Classes (`.classe`)
  - [x] IDs (`#id`)
  - [x] pseudoclasse (`#a::hover`)
- [x] Cores
- [x] Tipografia (e.g. `font-family`)
- [x] Margem e padding
- [x] Layout com `flexbox`
- [x] Layout com `grid`
- [x] Responsividade (`media queries`)
- [x] Animações ou transições

## ⚙️ JavaScript

- [x] Manipulação do DOM
- [x] Eventos (`click`, `submit`, etc.)
- [ ] Validação de formulário
- [ ] Alteração dinâmica de conteúdo
- [x] Uso de funções
- [x] Uso de arrays ou objetos
- [ ] Uso de `fetch` ou API externa
- [ ] local Storage


## 📂 Estrutura do projeto

Descreva brevemente a organização dos arquivos do seu projeto.

Exemplo:

```
site/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## 💡 Observações

Utilize este espaço para comentar:

- dificuldades encontradas: A dificuldade começou em escolher sobre o que fazer o site,
 estava completamente perdido e troquei de ideia mais de uma vez.
 proximo ao prazo de entrega do trabalho decidi fazer o site sobre uma barbearia ficticia.
 Tive difiuldade com o JS na parte do rodapé e em configurar alguns efeitos nos botões do site.
- decisões de design:
  Escolha de cores com tom pastel e escuro como preto/dourado/creme para contraste, remetendo a algo mais "Vintage".
  Utilizei duas fontes de texto que achei interessante para a proposta do site e que são de facil visualização.
  O menu fica fixo no topo e muda de aparencia ao rolar a página, percebi que é uma decisão de UX comum em sites para não ocupar muito espaço.
  Com ajuda de IA, criei elementos "Old School" decorativos
  Grid ao inves de lista simples
- melhorias que podem ser feitas no futuro:
  Futuramente seria interessante a utilização de um banco de dados para criar uma pagina focada no agendamento de serviços e login para ocliente.
  Focar mais no JS e aplicar melhores animações de movimento.
  Aplicar localStorage Para salvar o último serviço escolhido no formulário, ou um favoritar corte na galeria.
