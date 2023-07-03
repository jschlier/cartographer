export class Card {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.filePath = '../assets/cards/' + id + '.png';
    }
}

export class SeasonCard extends Card {
    constructor(id, name, decrees, units) {
        super(id, name);
        this.decrees = decrees;
        this.units = units;
    }
}

export class DecreeCard extends Card {
    constructor(id, name, description) {
        super(id, name);
        this.description = description;
    }
}

export class ExplorationCard extends Card {
    constructor(id, name, costs = 0) {
        super(id, name);
        this.costs = costs;
    }
}

export class AmbushCard extends ExplorationCard {
    constructor(id, name) {
        super(id, name);
    }
}