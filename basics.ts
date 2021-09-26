let username: string = 'Jack';
let hasLoggedIn: boolean = true;

username += " HerringTon";

console.log(username)


let mynumber: number = 10;

let myRegex: RegExp = /foo/

//arrays

const names: string[] = username.split(" ")

console.log(names)

//generic types

const myValues: Array<number|string> = [1, 2,3, "asdf"];


interface Person{
    first: string;
    last: string
}

//object
const myPerson: Person = {
    first: "jay",
    last: "desai"
}


//records

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

if(ids[30] === "D"){
    
}

//loops

for(let i= 0; i< 10; i++){
    console.log(i)
}


[1,2,"a"].forEach(v => console.log(v))
const out: number[] = [1,2,3].map(v => v * 10)
