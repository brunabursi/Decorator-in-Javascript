class Character {
    attack() {
        return this._attack;
    }

    defend() {
        return this._defense;
    }

    summary(label) {
        console.log(label, `${this.attack()} / ${this.defend()}`)
    }
}

class Human extends Character {
    constructor() {
        super();
        this._attack = 1;
        this._defense = 1;
    }
}

class Orc extends Character {
    constructor() {
        super();
        this._attack = 3;
        this._defense = 3;
    }
}

class Dog extends Character {
    constructor() {
        super();
        this._attack = 2;
        this._defense = 1;
    }
}

class CharacterDecorator extends Character {
    constructor(character) {
        super();
        this.character = character;
    }

    attack() {
        return this.character.attack();
    }

    defend() {
        return this.character.defend();
    }
}

class Sword extends CharacterDecorator {
    attack() {
        return super.attack() + 5;
    }    
}

class Shield extends CharacterDecorator {
    defend() {
        return super.defend() + 4;
    }    
}

class Hammer extends CharacterDecorator {
    attack() {
        return super.attack() + 10;
    }
}

class Mutant extends CharacterDecorator {
    attack() {
        return 10;
    }

    defend() {
        return 10;
    }
}

const bareHuman = new Human();
bareHuman.summary('bareHuman')

const bareOrc = new Orc();
bareOrc.summary('bareOrc')

const doguinho = new Dog();
doguinho.summary('doguinho')

const mutantKillerDog = new Mutant(doguinho);
mutantKillerDog.summary('killer!')

const humanWithSword = new Sword(bareHuman);
humanWithSword.summary('King Arthur:');

const captainAmerica = new Shield(bareHuman);
captainAmerica.summary('Captain America:');

const capAgainstThanos = new Hammer(captainAmerica)
capAgainstThanos.summary('Captain America with lasers:');