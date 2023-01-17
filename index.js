const SecretDiary = require(`./SecretDiary`);
const Lock = require(`./Lock`);

// instantiate a new Lock object and a new SecretDiary object.
lock = new Lock();

// when making a new Secret Diary, we pass in the lock object.
secretDiary = new SecretDiary(lock);

lock.unlock();
secretDiary.addEntry("New entry");
// lock.lock();
// secretDiary.addEntry("New entry");
