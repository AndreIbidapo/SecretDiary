class SecretDiary {
  // everytime SecretDiary is instantiated, an array of entries is also created.
  entries = [];

  // creating a new SecretDiary will take in a class of Lock.
  constructor(lock) {
    this.lock = lock;
  }

  // takes in a string,
  // then uses `this.lock` to access isLocked state.
  // based on the return value, it will either throw an error or push the string to the `entries` array.
  addEntry(str) {
    if (this.lock.isLocked) {
      throw new Error(`Error in adding entry, Diary is locked`);
    } else {
      this.entries.push(str);
      console.log("Added entry");
    }
  }

  getEntries() {
    if (this.lock.isLocked) {
      throw new Error(`Error in getting entries, Diary is locked`);
    } else {
      console.log(entries);
      console.log("Got entried");
    }
  }
}

module.exports = SecretDiary;
