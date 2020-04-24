class Character {
  constructor(name, health, attack, side) {
    (this.name = name),
      (this.health = health),
      (this.attack = attack),
      (this.side = side);
  }
}

const anakin = new Character("Anakin", 100, 30, "light");
const obiwan = new Character("Obiwan", 120, 40, "light");
const dooku = new Character("Dooku", 130, 20, "dark");
const vader = new Character("Vader", 150, 50, "dark");

export const characters = [anakin, obiwan, dooku, vader];
