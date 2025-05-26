

/**
 * @description Here am gonna implement basic ( just a quick one ) RSA algorithm  
 */

/**
 * @description RSA algorithm is just based on the fact that computers could easily find two distinct prime numbers but could not factor
  their product 
 */

/**
 *Lets gooooo 
 */

/**
 *  Noticed am useto using functions in my program. lol
 */





import { primalitychecker as checkprimenumber } from "./bored2.js"

type primenumber = number



function relatively_prime (rp1: primenumber, rp2: primenumber){

// I assume rp1 to be the dividend and rp2 the divisor so rp1 should be > rp2

if(  rp1 < rp2) { [rp1, rp2] = [ rp2, rp1]   } 


while (rp2 !== 0){ 

let theremainder = rp1 % rp2

rp1 = rp2

rp2 =  theremainder



}


return rp1 === 1



}











/**
 * public_exponent is a number that is relatively prime to the multiplication of prime1 * prime2
 * it's also called the public exponent
 * @type {primenumber}
 */  

function rsaing (  prime1: primenumber , prime2: primenumber , public_exponent: primenumber) {




const  themodulus =  prime1 * prime2


const eulers_totient = (prime1 - 1 ) * ( prime2 - 1)


const  private_exponent = public_exponent ** -1 % eulers_totient


/**
 * @type {primenumber} relatively_prime below is the number that is relatively prime to  eulers_totient
 */

/**
 * @description so the function  ; relatively_prime () i implemented above test for relative primality of two numbers
 */


if( relatively_prime( eulers_totient, public_exponent) == true  ){



return {


publickey : { public_exponent , themodulus},


privatekey : {private_exponent, themodulus }




}



}else{

 
return ` check if the multiple of ${prime1}-1 and ${prime2}-1 which is the euler's toitient is relatively prime to ${public_exponent} which is the public exponent
`



}


}



// checking it out  with parameters that satisfy the conditon

console.log( rsaing( 81, 53, 17))


// also checking out with the wrong parameters

// console.log( rsaing( 81, 53,  16))






/**
 * Now  the formula for encryption and decryption respectively are:
 * 
 * @description take c as ciphertext , m as message( or plaintext )
 * 
 * Encryption formula: 
 * c = m ** publicexponent % modulus
 * 
 * Decryption formula: 
 * m = c ** privateexponent % modulus
 */


 








