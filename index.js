function shout(goodbye) {
    return goodbye.toUpperCase()
}
function whisper(hello) {
    return hello.toLowerCase()
}
function logShout(goodbye) {
    console.log(goodbye.toUpperCase())
}
function logWhisper(goodbye) {
    console.log(goodbye.toLowerCase())
}
function sayHiToHeadphonedRoommate(string){
    if (string == string.toLowerCase()) {
        return "I can't hear you!"
    }
    if (string == string.toUpperCase()) {
        return "YES INDEED!"
    }
    if (string == "Let's have dinner together!") {
        return "I would love to!"
    }
}