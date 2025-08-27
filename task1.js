export class Player {
  constructor(name, level) {
    this.name = name;   // Guardamos el nombre del jugador
    this.level = level; // Guardamos el nivel del jugador
  }

  // Método que muestra la información del jugador
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  // Método para subir un nivel
  levelUp() {
    this.level++;  // Aumentamos el nivel en 1
    this.info();   // Mostramos el mensaje actualizado
  }
}
