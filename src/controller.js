// Homecontroller
const path = require('path')
const os = require('os')
const fs = require('fs')

const envFile = path.resolve(__dirname, '../.env')
const readEnvFile = () => fs.readFileSync(envFile,'utf-8').split(os.EOL)

const index = (req, res) => {
    res.render('index', {title: "Powerful Email sender"})
}

const email = (req, res) => {
    res.render('email',{title: "Send Email"})
}
const settings = (req, res) => {
    res.render('settings',{title: "System Settings"})
}

const saveSetting = (req, res) => {
    const formReq = req.body
    // console.log(formReq)
    // console.log(formReq['SITE_NAME'])
    formReq.types.forEach((element , index)=> {
        // console.log(element, formReq[`${element}`])
        saveEnv(element, formReq[`${element}`])
    });   
    console.log(process.env)
    
    res.status(200).redirect('/settings');

}
const getEnvValue = (key) => {
    const matchL = readEnvFile().find((line) => line.split("=")[0] === key)
    return matchL !== undefined ? matchL.split("=")[1] : null
}
// update env file
const saveEnv = (key, value) => {
    const envVars = readEnvFile();
    const targetLine = envVars.find((line) => line.split("=")[0] === key);
    if (targetLine !== undefined) {
        // update existing line
        const targetLineIndex = envVars.indexOf(targetLine);
        // replace the key/value with the new value
        envVars.splice(targetLineIndex, 1, `${key}="${value}"`);
    } else {
        // create new key value
        envVars.push(`${key}="${value}"`);
    }
    // write everything back to the file system
    fs.writeFileSync(envFile, envVars.join(os.EOL));
}
module.exports = {
    index, email,settings,saveSetting
}