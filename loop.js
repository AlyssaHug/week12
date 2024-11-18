const names = [
    "alyssa", "gwen", "katie", "riley", "maddie"
]

let settings = {
    allowAdd:true
}
//counting up from 0
/*
console.log("How many items is in names?", names.length);
for(let i=0; i<names.length; i++){
    console.log("hi", names[i]);
}
*/


//counting down from biggest number

/*console.log("How many items is in names?", names.length);
for(let i=names.length-1; i>=0; i--){
    console.log("hi", names[i]);
}
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function StartApp(){
    readline.question("What is your command?", _command =>{
        if(_command === "quit"){
            readline.close();
        }else if(_command === "add"){
            //add new name
            AddName();
        }else if(_command === "remove"){
            //remove a name
            RemoveName();
        }else if(_command === "read"){
            //read all names
            ReadNames();
        }else if(_command === "login"){
            //pick a name to say hi
            Login();
        }else if(_command === "allow add") {
            settings.allowAdd= !settings.allowAdd;
            StartApp();
        }
    })
}


function AddName(){
    if(settings.allowAdd === true){
        console.log("This adds")
        readline.question("What is the name?", _name=>{
            names.push(_name);
            console.log(names);
            StartApp();  
    })
 } else {
        console.log("Permission Denied!")
    }
    }
    //array push

function RemoveName(){
    RemovedName = names.shift();
    console.log("This removes")
    //array shift
    names.shift();
    console.log("Removed: ", RemovedName);
StartApp();
//can ask for an index and use array.splice(index, 1)
}

function ReadNames(){
    console.log("This reads names")
    for(let i=0; i<names.length; i++){
        console.log(`The name is ${names[i]}`)
        
    }
    StartApp();
}

function Login(){
    console.log("This is the login")
    readline.question("What user would you like to login as?", _index=>{
        console.log(`You are logged in as ${names[_index]}`)
        StartApp();
    })
}

StartApp();