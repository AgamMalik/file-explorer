const {execSync} = require('child_process');

try{
    const result = child_process.execSync(`du -sh "/mnt/f/WEBD/Projects/9.Node\ project-\ File\ Explorer"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}