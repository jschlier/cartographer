import {AmbushCard, DecreeCard, ExplorationCard, SeasonCard} from './Card';

export class Deck {
    currentIndex = 0;
    cards = {
        ambushes: [
            new AmbushCard(1,'Goblinattacke'),
            new AmbushCard(2,'Grottenschratüberfall'),
            new AmbushCard(3,'Koboldansturm'),
            new AmbushCard(4, 'Gnollangriff')
        ],
        explorations: [
            new ExplorationCard(5,'Tempelruinen'),
            new ExplorationCard(6,'Verfallener Außenposten'),
            new ExplorationCard(7,'Großer Strom', 1),
            new ExplorationCard(8,'Ackerland', 1),
            new ExplorationCard(9,'Weiler', 1),
            new ExplorationCard(10,'Vergessener Wald', 1),
            new ExplorationCard(11,'Hinterlandbach', 2),
            new ExplorationCard(12,'Gehöft', 2),
            new ExplorationCard(13,'Obsthain', 2),
            new ExplorationCard(14,'Baumwipfeldorf', 2),
            new ExplorationCard(15,'Sumpf', 2),
            new ExplorationCard(16,'Fischerdorf', 2),
            new ExplorationCard(17,'Splitterland')
        ],
        seasons: [
            new SeasonCard(18, 'Frühling', ['A', 'B'], 8),
            new SeasonCard(19, 'Sommer', ['B', 'C'],8),
            new SeasonCard(20, 'Herbst', ['C', 'D'],7),
            new SeasonCard(21, 'Winter', ['D', 'A'],6)
        ],
        decrees: {
            forest: [
                new DecreeCard(26, 'Schildwald'),
                new DecreeCard(27, 'Grünfläche'),
                new DecreeCard(28, 'Düsterwald'),
                new DecreeCard(29, 'Pfad des Waldes')
            ],
            waterAndFields: [
                new DecreeCard(30, 'Bewässerungskanal'),
                new DecreeCard(31, 'Tal der Magier'),
                new DecreeCard(32, 'Goldener Kornspeicher'),
                new DecreeCard(33, 'Ausgedehnte Strände')
            ],
            villages: [
                new DecreeCard(34, 'Bastionen in der Wildnis'),
                new DecreeCard(35, 'Metropole'),
                new DecreeCard(36, 'Schillernde Ebene'),
                new DecreeCard(37, 'Schild des Reichs')
            ],
            area: [
                new DecreeCard(38, 'Grenzland'),
                new DecreeCard(39, 'Unzugängliche Baronie'),
                new DecreeCard(40, 'Die Lange Straße'),
                new DecreeCard(41, 'Die Kessel')
            ]
        }
    }

    constructor() {
        this.cards.ambushes = this.shuffle(this.cards.ambushes);
    }

    shuffle(array) {
        // this method shuffles an array according to the Fisher–Yates shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    getSeasons() {
        return this.cards.seasons;
    }

    getRandomDecrees() {
        let decrees = [];

        for (const value of Object.values(this.cards.decrees)) {
            decrees.push(value[Math.random() * value.length >> 0]);
        }

        decrees = this.shuffle(decrees);

        return {
            A: decrees.shift(),
            B: decrees.shift(),
            C: decrees.shift(),
            D: decrees.shift()
        };
    }

    nextSeason() {
        this.currentIndex = 0;
        this.cards.explorations.push(this.cards.ambushes.pop());
        return this.shuffle(this.cards.explorations);
    }

    draw() {
        const currentIndex = this.currentIndex++;
        const drawnCard = this.cards.explorations[currentIndex];

        if (drawnCard instanceof AmbushCard) {
            this.cards.explorations.splice(currentIndex, 1);
        }

        return drawnCard;
    }
}
