const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}
//Add Registry Notes:

// Define the ban list and the user list
// Function to add a user if they are not in the ban list

//CHALLENGE 01 Notes:
// Initialize the boolean flag
// Check if the user exists in the ban list
//checkBan = true = Set flag to true if the user is banned
// if (!checkBan) = Add user only if they are not banned
function AddUserToRegistry() {
  if(settings.addRegistry === true){
    let checkBan = false;
    
    readline.question("What is the username?", _user=>{
    if (banned.includes(_user)) {
        checkBan = true; 
    } if (!checkBan) {
        users.push(_user);
        console.log(`${_user} has been added.`);
    } else {
        console.log(`${_user} is banned and cannot be added.`);
    }
    StartApp();
  }) 
}else {
  console.log("Permission Denied!")
}
}
//Check Registry Notes:
 //loop through all the users and log them
function CheckRegistry() {
  if(settings.checkRegistry === true){
    for(let i=0; i<users.length; i++){
        console.log(`The user is ${users[i]}`) 
    }
    StartApp();
  }else {
    console.log("Permission Denied!")
  }
}
//Ban user notes:
  //use readline to prompt for the name of the user to be banned
function BanUser(){
  if(settings.banPerson === true){
  readline.question("What user are you banning?", _banUser=>{
    banned.push(_banUser);
    console.log(banned);
    StartApp();  
})
}else {
  console.log("Permission Denied!")
}
}
//Check banned list notes:
  //loop through all the banned users and log them
function CheckBanned(){
  if(settings.checkBan === true){
  for(let i=0; i<banned.length; i++){
    console.log(`The banned user is ${banned[i]}`)
    
}
StartApp();
}else {
  console.log("Permission Denied!")
}
}

function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    
    if (_command === "quit") {
      readline.close();
      //quit app
    }else if(_command === "add"){
      //add new user
      AddUserToRegistry();
    }else if(_command === "check"){
      //check registry list
      CheckRegistry();
  }else if(_command === "ban"){
    //ban user
    BanUser();
}else if(_command === "check ban list"){
  //check banned list
  CheckBanned();
}else if(_command === "allow add") {
  settings.addRegistry= !settings.addRegistry;
  StartApp();
}else if(_command === "allow check") {
  settings.checkRegistry= !settings.checkRegistry;
  StartApp();
}else if(_command === "allow ban") {
  settings.banPerson= !settings.banPerson;
  StartApp();
}else if(_command === "allow check ban list") {
  settings.checkBan= !settings.checkBan;
  StartApp();
}
  });
}

StartApp();

/* reviewed by Thea
I helped out with challenge two.
  Understood what I said clearly and implemented it well!
Very good, clear, notes, very understandable. I like how she added them right beside the code to make it a lot more understandable.
*/
