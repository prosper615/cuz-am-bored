



// Here am gonna implement basic ( just a quick one ) key exchange DH  






    function checkifprimitive ( theprime: number, thegenerator: number) : boolean {
    
    let InitialIterating = 1   
    
    let InitialIteratingStop = theprime - 1
    
    
    let PushSeePrimitiveResults = []
    
    
    while( InitialIterating <= InitialIteratingStop){
    
        let SeePrimitive = thegenerator ** InitialIterating % theprime
    
    
         PushSeePrimitiveResults.push(SeePrimitive)
    
        
        InitialIterating++
    
    
    }
        
    
    
    let DuplicateCompare = new Set(PushSeePrimitiveResults)
    
    
    if( PushSeePrimitiveResults.length == DuplicateCompare.size){

  return  true
   
    
    }
    
    else{

    
   return false

    }
    
    
    
    }


    



 function trial_division_algo(thenum: number) : boolean{

    
    let Trail =  thenum 


        let SquarerootOfValue = Math.sqrt(Trail);

        // Making it to the nearest number so it can be used for the algorithm, thats the rule of trial division

        let ToFloor = Math.floor(SquarerootOfValue);

        let FirstDivisor = 2;

        if(Trail < 2) return false

        while (FirstDivisor <= ToFloor) {

            
            if (Trail % FirstDivisor === 0) {

                return false

                
            }

            FirstDivisor++;

        } 
        
     return true
                 

    }











/**
 * Here i assume there is a secure chaannel as in the real word
 *
 * In most crytography books & papers Alice and Bob are usually used to denote two parties involved, so let me follow suite
 *
 * What goes on below is that both parties might choose a diff.. prime number
 *
 * maybe a diff.. secret key but both must agree on the generaator which i specify as choosegeneartor below
 */







function theirsecret (  secretnumber: number , chooseprime : number ,  choosegeneartor: number  ) {




        if( trial_division_algo(chooseprime) ===true  && checkifprimitive(chooseprime,choosegeneartor )=== true  ) {


return    {
      result: choosegeneartor ** secretnumber % chooseprime,

     secretnumber,

     choosegeneartor,

     chooseprime,

      error: null

    }



} else{



return {   error: ` make sure ${chooseprime}  is a prime number or ${choosegeneartor}  is it's primitive root or both cases `,


 secretnumber,

     choosegeneartor,

     chooseprime,

     result: null





} 

}



}






/**
 * Remember both gonna choose the same prime number, the generator is a primitive root of the prime
 *
 * Obviously this makes them have the same prime and generator
 */



 let Bobs = theirsecret(6,23,5)

 let   Alices = theirsecret(15,23,5)


let  Alice_calculation  = Alices.result !== null ? Alices.result : Alices.error;
let Alice_secretnumber = Alices.secretnumber
let Alice_prime = Alices.chooseprime
let Alice_generator = Alices.choosegeneartor


  let Bob_calculation = Bobs.result !== null ? Bobs.result : Bobs.error
  let Bob_secretnumber = Bobs.secretnumber
  let Bob_prime = Bobs.chooseprime
  let Bob_generator = Bobs.choosegeneartor








/**
 * so  in irl Alice sends his calculation to Bob aand vice versa for Bob
 * 
 * so they both do they both do this computation individually to obtain secret key
 * 
 * The result of the computation should be the same
 */



 

// Using  BigInt cuz it's crytography and would likely expect large numbers

 const Bob_secretkey  = BigInt(Alice_calculation) **  BigInt( Bob_secretnumber) % BigInt(Bob_prime)

 const Alice_secretkey =   BigInt(Bob_calculation ) **   BigInt( Alice_secretnumber ) %   BigInt(Alice_prime)

 console.log(Bob_secretkey)

 console.log( Alice_secretkey)





 // Now both should get the same secret key which both would use for their encryption algorithm

 







































