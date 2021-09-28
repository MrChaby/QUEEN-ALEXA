const {MessageType, GroupSettingChange, Mimetype} = require('@adiwajshing/baileys');
const WhatsAlexa = require('../events');
const Config = require('../config');
const os = require("os");
const axios = require('axios')
const fs = require('fs');
var rgms = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const hi = "*_Sry Nigga_* 😹😈💔\n*_something went wrong i can feel it 🎇🎠_*"
const cwebp = require('cwebp-bin');
var rrrr = Buffer.from(rgms.cd, 'base64')
const Heroku = require('heroku-client');
var ssss = rrrr.toString('utf-8')
rgms.pay = ssss
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

WhatsAlexa.addCommand({pattern: 'fuke ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

    if (match[1] == '') {
    var msg = await message.reply('*_Fuke Off 😹_*');
        await message.client.toggleDisappearingMessages(message.jid, 604800);
        await message.client.toggleDisappearingMessages(message.jid, 0);
        await message.client.sendMessage(message.jid,hi,MessageType.text);
    }
    else {
        return await message.client.sendMessage(message.jid, '*_Fuke You Nigga_* 😹😈💔', MessageType.text)};
}));