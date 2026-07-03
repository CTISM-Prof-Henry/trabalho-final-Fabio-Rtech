/*
  script.js
  --------------------------------------------------------------
  CORREÇÃO IA: Agora ele faz duas coisas:

  1) Preenche o ano atual no rodapé automaticamente
     (alteração dinâmica de conteúdo + manipulação do DOM).
  2) Destaca no menu qual seção o usuário está vendo enquanto
     rola a página (manipulação do DOM + eventos + função +
     uso de array).
*/

/* ----------------------------------------------------------------
   1) Ano atual no rodapé
---------------------------------------------------------------- */
function atualizarAnoRodape() {
    const spanAno = document.querySelector("#ano-atual");
    if (!spanAno) return; // se o elemento não existir, não faz nada

    const anoAtual = new Date().getFullYear();
    spanAno.textContent = anoAtual;
}

/* ----------------------------------------------------------------
   2) Destacar o link do menu correspondente à seção visível
---------------------------------------------------------------- */
// Array com os ids das seções que aparecem no menu
const secoesDoMenu = ["sobre", "servicos", "galeria", "contato"];

function destacarLinkAtivo() {
    // pega a posição atual da rolagem, com uma margem para compensar
    // o cabeçalho fixo
    const posicaoRolagem = window.scrollY + 150;

    // percorre o array de seções e verifica qual está na tela agora
    secoesDoMenu.forEach(function (idSecao) {
        const secao = document.getElementById(idSecao);
        if (!secao) return;

        const inicioSecao = secao.offsetTop;
        const fimSecao = inicioSecao + secao.offsetHeight;
        const linkDoMenu = document.querySelector('nav a[href="#' + idSecao + '"]');

        if (!linkDoMenu) return; // nem toda seção tem link direto no menu

        if (posicaoRolagem >= inicioSecao && posicaoRolagem < fimSecao) {
            linkDoMenu.classList.add("link-ativo");
        } else {
            linkDoMenu.classList.remove("link-ativo");
        }
    });
}

window.addEventListener("scroll", destacarLinkAtivo);
window.addEventListener("DOMContentLoaded", function () {
    atualizarAnoRodape();
    destacarLinkAtivo();
});
