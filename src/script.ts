interface Veiculo {
	modelo: string;
	placa: string;
	entrada: Date | string;
	cpf: string;
}
(() => {
	const $ = (query: string): HTMLInputElement | null => document.querySelector(query)

	function calcularTempo(minutos : number){
		const minutosTotais = Math.floor( minutos / 60000);
		const secundosTotais = Math.floor((minutos % 60000) / 1000)
		return `${minutosTotais}m e ${secundosTotais}s : R$ ${(minutosTotais + secundosTotais) * 0.02}`
	}

	function patio() {
		function ler() : Veiculo[]{
				return localStorage.patio ? JSON.parse(localStorage.patio) : []
		}
		function adicionar(veiculo : Veiculo,persistir ?: boolean) {
			const row = document.createElement("tr");

			row.innerHTML = `
			<td>${veiculo.cpf}</td>
			<td>${veiculo.modelo}</td>
			<td>${veiculo.placa}</td>
			<td>${veiculo.entrada}</td>
			<td>
			<button class="btn btn-danger delete" data-placa="${veiculo.placa}">X</button>
			</td>
			`;

			row.querySelector(".delete")?.addEventListener("click",function (){
				remover(this.dataset.placa)
			})
			$("#patio")?.appendChild(row)
			if(persistir)
				salvar([...ler(),veiculo])
		}
		function remover(placa : string) {
			const {entrada,modelo} = ler().find(veiculo => veiculo.placa === placa);

			const tempo = calcularTempo(new Date().getTime() - new Date(entrada).getTime());

			if(!confirm(`O veiculo ${modelo} permaneceu por ${tempo}. Deseja encerrar?`))
				return;
			salvar(ler().filter(veiculo => veiculo.placa !== placa))
			render();
		}
		function salvar(veiculo : Veiculo[]) {
			localStorage.setItem("patio",JSON.stringify(veiculo))
		}
		function render() {
			$("#patio")!.innerHTML = ""; // ! force
			const patio = ler();
			if(patio.length) {
				patio.forEach((veiculo) => adicionar(veiculo));
			}


		}
		return { ler, adicionar, remover, salvar, render 
	}
}
	function limpar() {
		$("body > div > div:nth-child(1) > input")!.value = '';
		$("body > div > div:nth-child(2) > input")!.value = '';
		$("body > div > div:nth-child(3) > input")!.value = '';
	}
	patio().render();
	$("#cadastra")?.addEventListener("click", () => {

		const modeloVeiculo = $("body > div > div:nth-child(1) > input")?.value;
		const placaVeiculo = $("body > div > div:nth-child(2) > input")?.value;
		const cpfCliente = $("body > div > div:nth-child(3) > input")?.value;
		if (!modeloVeiculo || !placaVeiculo || !cpfCliente) {
			alert("Os campos Cpf, modelo,e placa são obrigatorios!")
			return;
		} else {
			patio().adicionar({ modelo: modeloVeiculo, placa: placaVeiculo.toUpperCase(),cpf : cpfCliente,entrada : new Date().toISOString()},true)
			limpar();
		}
	});
})();