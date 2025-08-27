// TASK 4
export class Player {
  constructor(name, level) {
    this.name = name;   // key: "name"
    this.level = level; // key: "level"
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
    this.info();
  }
}
