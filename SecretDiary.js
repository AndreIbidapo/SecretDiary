class SecretDiary {
  listOfEntires = [];

  constructor(lock) {
    this.lock = lock;
  }

  addEntry(str) {
    if (this.lock.isLocked) {
      throw new Error(`Error in adding entry, Diary is locked`);
    } else {
      this.listOfEntires.push(str);
      console.log("Added entry");
    }
  }

  getEntries() {
    if (this.lock.isLocked) {
      throw new Error(`Error in getting entries, Diary is locked`);
    } else {
      console.log(listOfEntires);
      console.log("Got entried");
    }
  }
}

module.exports = SecretDiary;
