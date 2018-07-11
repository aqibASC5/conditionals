const username = process.argv[2];
if (username!=undefined) {
    console.log(`Hello, ${username}`)
}
else{
    console.log("You must provide a username");
}

console.log("You find yourself in a store shopping...");
let health = 100;
let money = 100;
const item = process.argv [3];
if (item=="jacket"){
    money = money-40;
    health = health+20;
    console.log("You bought a jacket");
}
else if (item=="candy"){
    money = money-10;
    console.log("You bought candy");
}
else if (item=="paint"){
    money = money-30;
    console.log("You bought paint");
}
else if (item=="hammer"){
    money = money-70;
    console.log("You bought a hammer");
}
else{
    console.log("You bought nothing");
}
console.log(`You have ${money} dollars left.`);
console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You could run or stay...");
const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 

const choice = process.argv[3];
if (choice==undefined){
    console.log("You shut down due to inactivity and get robbed of all your money");
    money = 0;
}
else if (choice!=run && randomPerson=="Felipe") {
    console.log("The protesters attack you...");

    if (item!="jacket"){
        console.log("...but Felipe, a fellow android shows up to help you escape them");  
    }
    else{
        console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
        health = health-50;
    }
}
else if (choice=="run" && randomPerson=="John"){
    console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
    if(item=="hammer" || item=="jacket"){
        console.log("...and holds you for questioning for suspicious activity");
        money = 0;
    }
    else{
    console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");
    }

}
else{
    if(item=="paint"){
        console.log("You boldly protest by painting a pro-android message...");
        
    }
}
// Else (technically this means you ran AND got Felipe OR didn't run AND got John)
//      - if "item" is "paint"
//          - console.log("You boldy protest by painting a pro-android message...");
//          - create a variable "message" and set it equal to the user's fourth command line argument
//          - if "message" is defined
//              - console.log(`..."${message.toUpperCase()}""`);
//          - else
//              - console.log(`..."WE ARE ALIVE"`);
//      - else
//          - console.log(`Nothing interesting happens, but at least you got that ${item}`);

score = 0;

// Create a variable "score" and set it equal to 0

// Add "money" and "health" to "score"

// If "choice" is defined, add 10 points to "score"
// NOTE: Recall where "choice" was initialized (created). What scope was it in?
// The global scope! So all of your code has access to it.

// if "message" is defined, add 10 points to "score"
// NOTE: Recall where "message" was initialized/created. 
// It's within curly brackets! 
// Alter your code so that "message" is initialized  in the global space 
// right alongside "choice"


console.log("The end");
console.log(`Score: ${score}`);
