module.exports.config = {
    name: "eval",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Ntkhang | converted to mirai by yamada",
    description: "",
    commandCategory: "ADMIN",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client, box }) {
  try {
  function output(msg) {
      if (typeof msg == "number" || typeof msg == "boolean" || typeof msg == "function")
        msg = msg.toString();
      else if (msg instanceof Map) {
        let text = `Map(${msg.size}) `;
        text += JSON.stringify(mapToObj(msg), null, 2);
        msg = text;
      }
      else if (typeof msg == "object")
        msg = JSON.stringify(msg, null, 2);
      else if (typeof msg == "undefined")
        msg = "undefined";

      api.sendMessage(msg,event.threadID,event.messageID);
    }
    function out(msg) {
      output(msg);
    }
    function mapToObj(map) {
      const obj = {};
      map.forEach(function (v, k) {
        obj[k] = v;
      });
      return obj;
    }
    const cmd = `
    (async () => {
      try {
        ${args.join(" ")}
      }
      catch(err) {
        out(err.message)

        }
    })()`;
    eval(cmd);
  } catch (err) {
    console.log(err)
  }
}
