// creation de la classe pokemon
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        // je définis les propriétés
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

// définir si le pokemon attaque 
    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(defender) {
        if (this.isLucky()) {
            const damage = this.attack - defender.defense;
            if (damage > 0) {
                defender.hp -= damage;
            }
            // messages qui s'affichent dans la console
            console.log(this.name + " attaque " + defender.name + " et inflige " + damage + " dégâts.");
        } else {
            console.log(this.name + " rate son attaque contre " + defender.name + "...");
        }
    }
}
// je crée mes deux pokemon
const pokemon1 = new Pokemon("Rattatac", 30, 15, 80, 0.85);
const pokemon2 = new Pokemon("Evoli", 25, 20, 100, 0.75);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {

    // le premier pokemon attaque le second
    pokemon1.attackPokemon(pokemon2);
    // message qui s'affiche dans la console
    console.log(pokemon2.name + " a " + pokemon2.hp + " hp restants.");

    // vérifier si le second pokemon est mort
    if (pokemon2.hp <= 0) {
        // message qui s'affiche dans la console
        console.log(pokemon2.name + " est vaincu. " + pokemon1.name + " gagne le combat!");
        //fin1
        break;
    }

    // le deuxième pokemon attaque le premier
    pokemon2.attackPokemon(pokemon1);
    // message qui s'affiche dans la console
    console.log(pokemon1.name + " a " + pokemon1.hp + " hp restants.");

    // vérifier si le premier pokemon est mort
    if (pokemon1.hp <= 0) {
        // message qui s'affiche dans la console
        console.log(pokemon1.name + " est vaincu. " + pokemon2.name + " gagne le combat!");
        //fin2
        break;
    }
}
