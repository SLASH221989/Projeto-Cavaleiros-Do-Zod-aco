const listaSelecaoCavaleiros = document.querySelectorAll(".cavaleiro");

listaSelecaoCavaleiros.forEach(cavaleiro => {
	cavaleiro.addEventListener("click", () => {
		esconderCartaoCavaleiro();

		const idCavaleiroSelecionado = mostrarCartaoCavaleiroSelecionado(cavaleiro);

		desativarCavaleiroNaListagem();
		ativarCavaleiroSelecionadoNaListagem(idCavaleiroSelecionado);

	})
})


function ativarCavaleiroSelecionadoNaListagem(idCavaleiroSelecionado) {
	const cavaleiroSelecionadoNaListagem = document.getElementById(idCavaleiroSelecionado);
	cavaleiroSelecionadoNaListagem.classList.add("ativo");
}

function desativarCavaleiroNaListagem() {
	const cavaleiroAtivoNaListagem = document.querySelector(".ativo");
	cavaleiroAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoCavaleiroSelecionado(cavaleiro) {
	const idCavaleiroSelecionado = cavaleiro.attributes.id.value;
	const idDoCartaoCavaleiroParaAbrir = "cartao-" + idCavaleiroSelecionado;
	const cartaoCavaleiroParaAbrir = document.getElementById(idDoCartaoCavaleiroParaAbrir);
	cartaoCavaleiroParaAbrir.classList.add("aberto");
	return idCavaleiroSelecionado;
}

function esconderCartaoCavaleiro() {
	const cartaoCavaleiroAberto = document.querySelector(".aberto");
	cartaoCavaleiroAberto.classList.remove("aberto");
}
