(() => {
	const $ = (query : string) : HTMLInputElement | null => document.querySelector(query)

	function patio(){
		function ler () {

		}
		function adicionar(){
			const modeloVeiculo = $("body > div > div:nth-child(1) > input")?.value;
			const placaVeiculo = $("body > div > div:nth-child(2) > input")?.value;
			console.log(modeloVeiculo,placaVeiculo)
			if(!modeloVeiculo || !placaVeiculo){
				alert("Os campos nome e placa são obrigatorios!")
				return;
		}
		}
		function remover(){

		}
		function salvar(){

		}
		function render(){

		}

		return { ler,adicionar,remover,salvar,render}
	}

	$("#cadastra")?.addEventListener("click",() => {
		patio().adicionar();
	});
})();