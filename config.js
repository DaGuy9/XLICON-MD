const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09yOTJtQUJTb0wyNjhqTzAvdEI5WVgzd3RmRUhvQUpLeGZzM2x0MFJuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUg1WUFOQkpkOFlnWXNueDlPL1NYUTNwV2VHeWlYbUVKRmZMVU85Ny94OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTmpueURuRlhQWTZLZmQxRUVzQjR3dkJodTVtVFdWZkJEOXBLQUdqRzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVREhqbzFpM3lyTm9BdWdMZG05RjR4RDhYSHlQU2pmYkY1c0dja2JYNjJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPNmJ6MElEd0p5SVVQWlgzQXlYejkzeHNlaWRZZ2greWhHUjV3eHdmMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRPQ0RFVlBINXUvNXNBSjNuK3dhTzVLVTR4Q2oxeDdBMDdWYy9JT0tVenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUplK0Voc2k4Y3UxeXUvNHhrTUFRN0xlMTZGVmdtWk53WEx3Q1R2cmFuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekxlR09PcVJXTlczaXRVRml4b3lXdDJNNHNkZ1ArQVBHOW00L0RqcWp3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktmK3FPZ2MvejhaSlRVaVZmY0FCSEpnY28yY1JCTndOSWFkYXNaOWlidldyV0hDUkVGY0M1YVVpOE1TKyttd1A2eXFKclRHRnZrMDJaaFJqaEdyOUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6IjJjNmc5Q1dyY3pSdnZySmFxZE9oRC93OCs5OWlpNzh4c1hrZC9xcGMxTDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZITTVKRlNIU1hlQWhGUWZKMnd1S3ciLCJwaG9uZUlkIjoiYmM4Y2VjOWItNzM0Yy00NjNmLTgxOTctZGY1MzBhNzE2NDM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink5Q2FBQ0lRMGVKdzRKYzVUK2UzV0I4OTVMVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQktJVmhiWWFBS2Vnc0Zua3B2UUt5Nmxsbm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUhZWlpWWTciLCJtZSI6eyJpZCI6IjIzNDkxMjU3MDU3NjA6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pyh77iP4oiGXn5Mw5hSROKYpu+4jyBEUsOFw4fDmH5e4oiG4pyh77iPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbmdrTzRCRU9xMmhxNEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6NWNBejFsSHlGOEcvZnc0TVJhWE5aYTBvRTJ5N1dQUWUwUWRnbVBoMzJJPSIsImFjY291bnRTaWduYXR1cmUiOiJJL1U4aDYwRG00V2E4bExzeE1LNk1IaDFVZHZMNGVpczF4QmJrT0lEWGR2eERaMER5ZGdNUEZlRzRkR0NMYUU1ZXY3V0R3S2FmNEVTU2IvVFF2NCtBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidXVVNk5Jczd3MUs4Qk5pZHMrdGM4Nnlxc3JEa012Z0NHVGFGOHhqTVl2cVdpdjNJMlVKRW9vUTR6VmtNOTdMNW9PcjN4VGtVcTdyR0lkWUlhL2lmRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI1NzA1NzYwOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMrWEFNOVpSOGhmQnYzOE9ERVdseldXdEtCTnN1MWowSHRFSFlKajRkOWkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDcxODcwNTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTW05In0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  ' LØRD DRÅÇØ',
  packname:  process.env.PACK_NAME || 'made by LØRD DRÅÇØ',
   
  botname:   process.env.BOT_NAME === undefined ? "Dracobot" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Lord DRÅÇØ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '1' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
