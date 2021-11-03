(() => {
	const $ = (query : string) : HTMLInputElement | null => document.querySelector(query)

	function patio(){
		function ler () {

		}
		function adicionar(){

		}
		function remover(){

		}
		function salvar(){
			
		}
		function render(){

		}
	}

	$("#cadastra")?.addEventListener("click",() => {
		const modeloVeiculo = $("#modelo")?.value;
		const placaVeiculo = $("#placa")?.value;
		console.log(modeloVeiculo,placaVeiculo)
		if(!modeloVeiculo || !placaVeiculo){
			alert("Os campos nome e placa são obrigatorios!")
			return;
		}
	});
})();