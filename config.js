/* ---------------------------------------------------------------------------------/
/                                                                                   /
/  My intro bro ok
𝐇𝐢
𝐁𝐨𝐭 𝐛𝐲   𝘾ᴙ𝗧𝗮𝗳𝘁𝘆.𝗣𝗮𝗻𝗱𝗮 𝐢𝐬 𝐀𝐋𝐈𝐕𝐄
ʀᴇᴍᴇᴍʙᴇʀ ᴛʜᴇ ɴᴀᴍᴇ: MUBASHIR
 *City*  _karachi_
 *Work* _IT and Islamic University in karachi_ 
⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⡀⢀⢀⢀⢀⢀⢀⢀⢀
⢀⢀⢀⢀⢀⢀⢀⡤⠒⠋⠉⠁⢀⠉⠉⠑⠲⢄⡀⢀⢀⢀
⢀⢀⢀⢀⢀⠔⢁⡠⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠉⢢⡀⢀
⢀⢀⢀⢠⠃⣴⡇.  𝘾ᴙ𝗧𝗮𝗳𝘁𝘆.𝗣𝗮𝗻𝗱𝗮.⢀⢀⠱⡄
⢀⢀⢠⠃⢀⣿⣧  ⣀68227467⢀ ⢀⢀⢀⠈⣆⠹⡀
⢀⢀⡸⢀⢀⠹⣿⣿⣿⣿⣿⣿⣶⣶⣶⣤⡀⢀⢀⣴⡿⢀⡇
⢀⢀⡇⢀⢀⢀⠤⣾⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⢀⡇
⢀⢀⢱⢀⣠⣤⣶⣿⣿⣧⣉⣿⣿⡟⣃⣿⢿⡿⢀⢀⢀⢀⡇
⢀⢀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢀⢀⢀⢀⢀⡰⠁
⢀⢀⢀⠘⣿⣿⣿⣿⣿⣏⡀⢀⣸⣿⣿⢀⢀⢀⢀⢀⡰⠃
⢀⢀⢀⢀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⡏⢀⢀⢀⣠⠞⠁⢀
⢀⢀⢀⢀⢀⢀⠈⠙⠿⢿⣿⣿⣿⣿⣇⡠⠔⠊⠁⢀⢀⢀
⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀
 Wa.me/923010989686
⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀"       /
/                                                                                   / 
/-----------------------------------------------------------------------------------/
/ Author and Main Developer: 𝘾ᴙ𝗧𝗮𝗳𝘁𝘆.𝗣𝗮𝗻𝗱𝗮                                                 /
/ Github: https://github.com/Jukkialine.com                                     /
/ Powered By: Team 𝘾ᴙ𝗧𝗮𝗳𝘁𝘆.𝗣𝗮𝗻𝗱𝗮                                                            /
/-----------------------------------------------------------------------------------/
/             Meet Team ATLAS who holds all rights to this repository:              /
/                                                                                   /
/ 1. Pratyush - https://github.com/pratyush4932                                     /
/ 2. Ahmii - https://github.com/Ahmii-kun                                          /               
/ 3. Kai - https://github.com/Kai0071                                               /                    
/ 4. Devime - https://github.com/Devime69                                           /
/ 5. Jay JayOps - https://github.com/jayjay-ops                                     /
/                                                                                   /
/ ----------------------------------------------------------------------------------/
/                                                                                   /
/      With all of our hard work and defication you can enjoy this awesome bot!     /  
/                                                                                   / 
/----------------------------------------------------------------------------------*/


require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "923051038557";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://fantox:xrto71r@cluster0.dnlowts.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || 𝘾ᴙ𝗧𝗮𝗳𝘁𝘆.𝗣𝗮𝗻𝗱𝗮 MD`;
global.author = process.env.AUTHOR || "by: Team 𝘾ᴙ𝗧𝗮𝗳𝘁𝘆.𝗣𝗮𝗻𝗱𝗮";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

