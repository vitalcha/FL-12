class Fighter {
  constructor(player) {
    this.name = player.name;
    this.damage = player.damage;
    this.agility = player.agility;
    this.health = player.health;
    this.strength = player.strength;
    this.winsCount = 0;
    this.lossesCount = 0;
  }

  getName() {
    return this.name;
  }

  getDamage() {
    return this.damage;
  }

  getStrength() {
    return this.strength;
  }

  getAgility() {
    return this.agility;
  }

  getHealth() {
    return this.health;
  }

  attack(fighter) {
    const fullChance = 100;
    let probability = fighter.getAgility() + fighter.getStrength();
    let chance = Math.floor(Math.random() * fullChance);
    if (chance > probability) {
      fighter.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed!`);
    }
  }

  logCombatHistory() {
    return console.log(`Name: ${this.getName()}, Wins: ${this.winsCount}, Losses: ${this.lossesCount}`);
  }

  heal(hp) {
    this.hp += hp;
    if (this.hp > 100) {
      this.hp = 100;
    }
  }

  dealDamage(damage) {
    this.hp -= damage;
  }

  addWin() {
    this.winsCount += 1;
  }

  addLoss() {
    this.lossesCount += 1;
  }
}

const myFighter1 = new Fighter(
  { name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 }
);
const myFighter2 = new Fighter(
  { name: 'Commodus', damage: 20, hp: 100, strength: 40, agility: 20 }
);

let battle = function (fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
    return;
  }
  if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
    return;
  }
  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
  }
  if (fighter2.getHealth() <= 0) {
    fighter2.addLoss();
    fighter1.addWin();
    console.log(`${fighter1.getName()} has won`);
    console.log(fighter1.logCombatHistory());
    console.log(fighter2.logCombatHistory());
    return;
  }
  fighter2.attack(fighter1);
  if (fighter1.getHealth() <= 0) {
    fighter2.addWin();
    fighter1.addLoss();
    console.log(`${fighter2.getName()} has won`);
    console.log(fighter1.logCombatHistory());
    console.log(fighter2.logCombatHistory());
    return;
  }
};


