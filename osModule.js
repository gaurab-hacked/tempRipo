const os = require('os');

//Info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`system uptime ${os.uptime()} sec`);
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs); 