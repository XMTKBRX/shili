module.exports.config = {
    name: "عن",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐊𝐈𝐓𝐄 凧",
    description: "",
    commandCategory: "معلومات",
    usages: "add bot",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`يمكنك استخدام:\n\n${prefix}${this.config.name} المستخدم => سيقوم بعرض معلوماتك.\n\n${prefix}${this.config.name} المستخدم @[تاق] => سيقوم بعرض معلومات الصديق.\n\n${prefix}${this.config.name} المجموعة => سيقوم بعرض معلومات المجموعة (عدد الاعضاء, الاسم والمزيد,...)\n\n${prefix}${this.config.name} المجموعة او المستخدم[uid || tid] => سيقوم بمنحك معلومات عن المجموعة او المستخدم اللتي ادخلت الUid خاصته :\n\n${prefix}${this.config.name} الادمن => معلومات خاصة بمالك البوت`, event.threadID, event.messageID);
    if (args[0] == "المجموعة") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
       if(!imgg) api.sendMessage(`اسم المجموعة: ${threadInfo.threadName}\nTID: ${args[1]}\nطلبات الموافقة: ${pd}\nالايموجي: ${threadInfo.emoji}\nمعلومات: \n»${threadInfo.participantIDs.length} عضو و ${threadInfo.adminIDs.length} ادمن.\n»منهم ${nam} ولد و ${nu} فتاة.\n»عدد الرسائل: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`اسم المجموعة: ${threadInfo.threadName}\nTID: ${args[1]}\nطلبات العضوية: ${pd}\nالايموجي: ${threadInfo.emoji}\nمعلومات: \n»${threadInfo.participantIDs.length} عضو و ${threadInfo.adminIDs.length}ادمن.\n»منهم ${nam} ولد و ${nu} فتاة.\n»عدد الرسائل: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "غير مفعل" : sex == true ? "مفعل" : "مفعل";
          if(!img) api.sendMessage(`اسم المجموعة: ${threadInfo.threadName}\nTID: ${event.threadID}\nطلبات العضوية: ${pd}\nالايموجي: ${threadInfo.emoji}\nمعلومات: \n»${threadInfo.participantIDs.length} اعضاء و ${threadInfo.adminIDs.length} ادمن.\n»منهم ${nam} ولد و ${nu} فتاة .\n»عدد الرسائل: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`اسم المجموعة: ${threadInfo.threadName}\nTID: ${event.threadID}\nالمتصفح: ${pd}\nالايموجي: ${threadInfo.emoji}\nالمعلومات: \n»${threadInfo.participantIDs.length} عضو و ${threadInfo.adminIDs.length} ادمن.\n»منهم ${nam} ولد و ${nu} بنت.\n»عدد الرسائل: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
                    if (args.length == 0) return api.sendMessage(`يمكنك استخدام:\n\n${prefix}${this.config.name} user => سيقوم بعرض معلوماتك.\n\n${prefix}${this.config.name} user @[Tag] => سيقوم بعرض معلومات الصديق.\n\n${prefix}${this.config.name} box => سيقوم بعرض معلومات المجموعة (عدد الاعضاء, الاسم والمزيد,...)\n\n${prefix}${this.config.name} المجموعة او المستخدم [uid || tid] => سيقوم بمنحك معلومات عن المجموعة اللتي ادخلت الUid خاصتها :\n\n${prefix}${this.config.name} الادمن => معلومات خاصة بمالك البوت`, event.threadID, event.messageID);
    if (args[0] == "الادمن") {
      var callback = () => api.sendMessage(
  {body:`———»ADMIN BOT«———
   ❯ Name: Gry KJ 
   ❯ Facebook: https://www.facebook.com/6JFL
   ❯ Thanks for using ${global.config.BOTNAME} bot`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1544cbc-ab63-4949-93f4-75ac61dd30b3/dfiqsg0-c0c8d147-07d5-4d47-8b1e-b132b386b7a6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxNTQ0Y2JjLWFiNjMtNDk0OS05M2Y0LTc1YWM2MWRkMzBiM1wvZGZpcXNnMC1jMGM4ZDE0Ny0wN2Q1LTRkNDctOGIxZS1iMTMyYjM4NmI3YTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.374IiD5hbM39gdzffOiRIV1UC_YCmBFms8uiZwjcrnQ`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "المستخدم") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? " للاسف لا ارسل طلب صداقة !" : data[id].isFriend == true ? "أجل !" : "بالطبع";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "🏳️‍🌈";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\nرابط الملف الشخصي: ${url}` + `\nاسم  المستخدم: ${sn}\nUID: ${id}\nالجنس: ${gender}\nالصداقة مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "للاسف لا ارسل طلب صداقة !" : data[mentions].isFriend == true ? "اجل!" : "بالطبع";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "🏳️‍🌈";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\nرابط الملف الشخصي: ${url}` + `\nاسم المستخدم: ${sn}\nUID: ${mentions}\nالجنس: ${gender}\nالصداقة  مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "للاسف لا ارسل طلب صداقة!" : data[args[1]].isFriend == true ? "اجل!" : "بالطبع";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "🏳️‍🌈";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\nرابط الملف الشخصي: ${url}` + `\nاسم المستخدم: ${sn}\nUID: ${args[1]}\nالجنس: ${gender}\nالصداقة مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
      }