let nouns = ["Marry","Brown","Lily","Span","Kiky"];
let verbs = ["ate","swallowed","chewed","threw","took"];
let adjectives = ["happy","satisfied","delighted","lucky","sorry"];

let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)] 
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)] 

let sentence = `${noun} ${verb} a cookie and felt very ${adjective}.`

console.log(sentence)
document.write(sentence)

