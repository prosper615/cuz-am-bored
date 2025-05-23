




// Note: This is a simplified demonstration and not a full implementation of anonymous routing.

// I have  extensive comments for clarity and learning purposes.



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





/**
 * So I imagine I want to send a message to someone without them knowing it's me (i.e. anonymous routing).
 *
 * What I could do is use a proxy (someone who is an intermediary which doesn't actually erase anonymity).
 *
 * So in summary am gonna use a multiple mixing service (multiple proxies).
 */








function anon (){


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


return onioning


}









/**
 * Now am kinda introducing the proxies (intermediaries).
 *
 * Here am gonna use 3 proxies.
 *
 * What just happens is that the sender exchanges a key with each proxy.
 *
 * Then message is encrypted with the first, second uses his/her key to encrypt the result of the first proxy, and so on.
 */


const assignproxy = anon()

const first_proxy = assignproxy(101, "101")

const second_proxy = assignproxy(101101, first_proxy.join(" ") )

const third_proxy = assignproxy(1000001, second_proxy.join(" " ) )

console.log( first_proxy , second_proxy , third_proxy)




/**
 * So the final message is delivered to the destination without the recipient knowing the source.
 *
 * but this can be gamed in the case of collusion among the parties who serve as proxies amongst other things.
 *
 * Yeah this was a form of digressing on what I was going down on, hope when I get back there is a flow.
 *
 * That's all for now. Just experimenting and learning as I go.

 */



 







