const request = require('request');
const axios = require('axios');
const fs = require('fs-extra');
module.exports.config = {
  name: "احم",
    version: "1.0.2",
  hasPermssion: 0,
  credits: "Gry KJ",
  description: "Just type the command with prefix in the beginning aziin",
  commandCategory: "معرفتش فين نحطو",
  usages: "e7m",
    cooldowns: 5, 
};


  module.exports.run = function({ api, event, client, __GLOBAL }) {
  
    if (event.senderID == 100061089512442 )
  {
    
  
    axios.get('https://api.night-api.com/images/nsfw/ass', {
    headers: {
        authorization: "753lEcr5hP-YSJ84IgInLcPg6qFlXgW-uLyfCt4WDS"}
     })
    .then(function (response) {
      var imageUrl = response.data.content.url;
      console.log(imageUrl);
      request({ url: imageUrl, encoding: null }, function (error, response, body) {
          if (error) throw error;
          fs.writeFileSync(__dirname + '/cache/ass.jpg', body);
        api.sendMessage({body: `💋💋💋`, attachment: fs.createReadStream(__dirname + `/cache/ass.jpg`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ass.jpg`), event.messageID);
      });
  });
   }
    else {

      api.sendMessage("سير تحوا هاذ الأمر ماشي ذيالك", event.threadID, event.messageID )
    }
  }