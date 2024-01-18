/*
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe

- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/
class hero {
    constructor(nome, idade, tipo, ataque){
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
      this.ataque = ataque;
    }  
    atacar(){
        console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${this.ataque}!`);
      }
  }
  
let mago = new hero("Sadin", 300, "mago", "magia");
let guerreiro = new hero("Wegg", 38, "guerreiro", "espada");
let monge = new hero("Nirva", 79, "monge", "artes marciais");
let ninja = new hero("Shun", 43, "ninja", "shuriken");
  
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();