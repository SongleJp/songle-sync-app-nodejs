// Songle Sync API
var SW = require("songle-api");

// トークンの情報を取ってくる
var settings = require("./settings");

// ビート情報と基本情報をもらってくる
var player = new SW.Player({
    accessToken: settings.tokens.access
});
player.addPlugin(new SW.Plugin.Beat());
// player.addPlugin(new SongleWidget.Plugin.Chord());
// player.addPlugin(new SongleWidget.Plugin.Melody());
// player.addPlugin(new SongleWidget.Plugin.Chorus());
player.addPlugin(new SW.Plugin.SongleSync());

// 何かあったらコンソールに書き出す
player.on("play", (ev) => console.log("play"));
player.on("seek", (ev) => console.log("seek"));
player.on("pause", (ev) => console.log("pause"));
player.on("beatEnter", (ev) => console.log("beat:", ev.data.beat.position));

// 死なないようにする
setInterval(() => { }, 1000);
