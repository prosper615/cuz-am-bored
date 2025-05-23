



console.log("Am very bored right now")



// Pls don't mind i have so much comments





/**
 * Here I have decided to implement a very simple version of anonymous routing
 * 
 * Or kinda showing the concept of onion layer algorithm
 * 
 * Just for play but this basic concept is what is behind stuffs like Tor (an anonymous browser)
 */






/**
 * Since I already know the concept of key exchange, I have no need to implement from scratch for now as this is a quick one
 * 
 * Here you're gonna input your key because I assume that this is not IRL where you should probably have a secure channel for exchange
 */






// so i  imagine i want to send a message to my someone without the  knowing its me

// what i could do is use a proxy ( someone who is an intermediary which doesnt actually erase anonimity)

// So in summary am gonna use a multiple mixing service ( multiple proxies)



// Here am gonna use 3 proxies


function onioning( k : number | string, m: string ){


/**
 * I assume this is a basic Shannon cipher
 * 
 * So am gonna use the one-time pad
 * The key should actually be the same length with the message
 * Yeah one-time pad has perfect security
 * 
 */





const message_to_binary = Array.from(m).map( b=> b.charCodeAt(0 ).toString(2) ).join(" " )

let key_to_binary : string  = ""   

if(  typeof k === "number"){

   key_to_binary = k.toString(2)


  
} else if(typeof  k === "string" ){

   key_to_binary = Array.from(k).map( b=> b.charCodeAt(0).toString(2) ).join(" ")
   


}else{

   

 console.log("Your key input is either a string or a number")



}

/**
 * Yeah using one-time pad cuz i intend the input message not to be too long
 * 
 * One-time pad though perfectly secure is not used irl cause key mus be same size as message
 * 
 * i.e 5gb message = 5gb key, hahaha thats much so must times we just go for less secure but feasible
 */


const onetimepader = [...key_to_binary].map((elem , index)=>{

 const convert_m = message_to_binary[index]

 return Number(elem) ^ Number(convert_m)



})




return onetimepader




}





console.log( onioning(1011, "1011"))







 







