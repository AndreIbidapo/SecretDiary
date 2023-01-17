# SecretDiary

Completed version. Decoupling Lock and Secret Diary.

## Lock

Initially `isLocked = true` when Lock is instantiated.

`unlock()` and `lock()` hanges the state of `isLocked`.

## Secret Diary

The constructor takes in an arguement of `lock` which will then allow you to access the state of `isLocked` inside the Lock class.

Based on the return value of `islocked` the user can therfore `addEntry(str)` and `getEntry()`.
