class Ship {
  constructor(length) {
    this.length = length;

    this.hitNumber = 0;
    this.isSunk = false;
  }

  hit() {
    this.hitNumber++;
    this.checkIfSunk();
  }

  checkIfSunk() {
    if (this.hitNumber >= this.length) {
      this.isSunk = true;
    }
  }
}

export {
  Ship,
};
