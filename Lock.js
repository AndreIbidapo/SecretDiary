class Lock {
  // everytime Lock is created, isLocked will always be true.
  isLocked = true;

  // this method will change the state of isLocked to false.
  unlock() {
    this.isLocked = false;
  }
  lock() {
    this.isLocked = true;
  }
}

module.exports = Lock;
