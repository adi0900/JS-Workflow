let adi = "hello" + "World"
const name = "GG"
console.log("adi");
console.log(`my name is ${name} and i would like to say ${adi}`);

const gameName = new String('Pokemon')
console.log(gameName[0]);
console.log(gameName.__proto__);    // ==>> don't know what is the use of this...

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString); 

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const nameString = String("         Aditya      ")
console.log(nameString);
console.log(nameString.trim());

const url = "https://anilist.co/user/DreamEater/"
console.log(url.replace('am', 'AM'));
console.log(url.includes('E'));

console.log(gameName.split('e'));