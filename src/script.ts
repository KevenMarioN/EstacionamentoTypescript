interface Veiculo {
	modelo: string;
	placa: string;
	entrada?: Date;
}
(() => {
	const $ = (query: string): HTMLInputElement | null => document.querySelector(query)

	function patio() {
		function ler() {

		}
		function adicionar({ modelo, placa, entrada = new Date()}: Veiculo) {
			const row = document.createElement("tr");

			row.innerHTML = `
			<td>${modelo}</td>
			<td>${placa}</td>
			<td>${entrada}</td>
			<td>
			<button class="btn btn-danger" data-placa="${placa}">X</button>
			</td>
			`;
			$("#patio")?.appendChild(row)
		}
		function remover() {

		}
		function salvar() {

		}
		function render() {

		}
		return { ler, adicionar, remover, salvar, render 
	}
}

	$("#cadastra")?.addEventListener("click", () => {

		const modeloVeiculo = $("body > div > div:nth-child(1) > input")?.value;
		const placaVeiculo = $("body > div > div:nth-child(2) > input")?.value;
		if (!modeloVeiculo || !placaVeiculo) {
			alert("Os campos nome e placa são obrigatorios!")
			return;
		} else {
			patio().adicionar({ modelo: modeloVeiculo, placa: placaVeiculo })
		}
	});
})();