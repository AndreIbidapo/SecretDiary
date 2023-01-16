const SecretDiary = require(`./SecretDiary`);
const Lock = require(`./Lock`);

lock = new Lock();
secretDiary = new SecretDiary(lock);

lock.unlock();
secretDiary.addEntry("New entry");
// lock.lock();
// secretDiary.addEntry("New entry");
