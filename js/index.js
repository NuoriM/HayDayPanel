// Att. todos os dados precisam ser convertidos para minutos!
// Soja - 20 min
// Trigo - 2 min 
// Milho - 5 min
// Cana-de-açúcar - 30 min
// Cenoura - 10 min

// Ração de Galinha 3x - 5 min - 2 trigos e 1 milho
// Ração de Vaca 3x - 10 min - 1 milho e 2 sojas
// Ração de Porco 3x - 20 min - 2 cenouras e 1 soja
//Rlx


(async function(){
	var materiais_base = [];
	var materiais_compostos = [];

	//Metodo que carrega os materiais base
	async function carregarMateriaisBase(){
		return await $.getJSON("data/materiais_base/materiais_base.json");
	}

	//Metodo que carrega os materiais compostos
	async function carregarMateriaisCompostos(){
		return await $.getJSON("data/materiais_compostos/materiais_compostos.json");
	}

	//Atribui nas listas os materiais respectivos
	materiais_base = await carregarMateriaisBase();
	materiais_compostos = await carregarMateriaisCompostos();
	
})(); 

