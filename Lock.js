class Lock {
  isLocked = true;

  unlock() {
    this.isLocked = false;
  }
  lock() {
    this.isLocked = true;
  }
}

module.exports = Lock;
