console.log("Hello World")


//number
let a:number = 100;
a = 10;

let done:boolean = true;

let last_Name:string= "anything"

let full_Name: string = `${a + 1} ${last_Name}` // Inferenc CHeck

let arrr: number[] = [1,2 ,3,4,5 ]

let str: string[]= ["masai"]

// Interface and Types -> Creating the blue print of an Object

let ArrOf_Number: Array<number> = [1, 3,4 ,5,6] // Generic Functions



let data: {id: number; name: string; address?:string } ={
    id: 1,
    name: "Masai"
}

data.address="Bangalire"



// Interface and Types -> creating the Blue print or shape of an Object

type Data = { id: number, name: string; address ?:string}

//Interface Data{ id: number, name: string; address ?:string}

let Anything: Data ={
    id: 1, 

    name: "Masai"
}

type Company={
    name: String,
    address: string,
    age: number
}

type SoftwareDeveloper ={
    Skills: string,
    wokring: boolean,

}

let masai: Company = {
    name: "Masai",
    address: "Bangalore",
    age: 2
}


let companies: Company[] = [
    {
        name: "Masai",
        address: "Bangalore",
        age: 2
    },
    {
        name: "Zomato",
        address: "Bangalore",
        age: 2
    }
]

// Union ANd Intersection 

let arrOfStringAndNumber: (number| string)[] = ["Masai", 3]

//GEneric FOrmat 
let arrOfStringAndNumbe: Array<number | string> = ["masai", 3]


//  

const MasaiStudents: Company & SoftwareDeveloper = {
    address: "bangalore",
    age: 24,
    name: "Bjfiief",
    Skills: "Full stack",
    wokring: false
}


/// CartItems 

let CartItems = [
    {
        id:1, products: [{id: 1, name: "Jacket", price: 400, quantity: 2}], total: 450
    },
    {
        id:2, products: [{id: 1, name: "Jacket", price: 400, quantity: 2}], total: 450
    },
    {
        id:3, products: [{id: 1, name: "Jacket", price: 400, quantity: 2}], total: 450
    }
]


