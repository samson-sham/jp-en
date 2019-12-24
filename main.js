const DICT = require('./dictionary.json');

function toRomaji(src) {
    const {kata2hira, composite, hira} = DICT;
    let toStr = src;
    if (/[\u{30A0}-\u{30FF}]/u.test(toStr)) {
        toStr = [...toStr].map(char => kata2hira[char] || char).join("");
    }
    toStr = toStr.replace(new RegExp("[\u{3040}-\u{309F}](ぁ|ぃ|ぅ|ぇ|ぉ|ゃ|ゅ|ょ)", "ug"), match => composite[match]);
    toStr = [...toStr].map(char => hira[char] || char).join("");
    // ー, っ
    toStr = toStr.replace(/(\w)ー/g, "$1$1");
    toStr = toStr.replace(/っ(\w)/g, "$1$1");
    return toStr;
}
module.exports = exports = {
    toRomaji
};