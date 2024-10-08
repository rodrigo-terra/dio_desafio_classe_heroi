// Classe para representar um herói
class hero {
  // Construtor para inicializar as propriedades
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para atacar com base no tipo do herói
  atacar() {
    let ataque;

    // Condicional para determinar o ataque daseado no tipo
    switch(this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;

      case "guerreiro":
        ataque = "espada";
        break;

      case "monge":
        ataque = "artes marciais";
        break;

      case "ninja":
        ataque = "shuriken";
        break;

      default:
        ataque = "ataque desconhecido"; // Caso o tipo seja invalido
    }

    // Exibir a mensagem do ataque
    console.log(`- O ${this.tipo} ${this.nome}, atacou usando ${ataque}!`);
    console.log("");
  }
}

// Criando herois de difeerentes tipos
const hero1 = new hero("Merlin", 100, "mago");
const hero2 = new hero("Leonidas", 43, "guerreiro");
const hero3 = new hero("Jet Li", 34, "monge");
const hero4 = new hero("Naruto", 19, "ninja");

// Invocar o método atacar para cada herói
hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();