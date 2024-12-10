function sample(){

        // --------------TYPE 1--------------------------

    // let result=document.getElementById('name')                        
    // console.log(result.value);                            
    // document.getElementById('display').innerHTML=result.value



        // --------------TYPE 2--------------------------



    // let result=document.getElementById('name').value 
    // console.log(result);
    // let h2=document.getElementById('display')
    // h2.innerHTML=result


//------------------------ADDING-------------------------------------------------------

// let a=parseInt(document.getElementById('a').value)
// let b=parseInt(document.getElementById('b').value)
// let h2=document.getElementById('display')
// h2.innerHTML=a+b

//-----------------------equal not equal----------------- -->

let a=parseInt(document.getElementById('a').value)
let b=parseInt(document.getElementById('b').value)
let h2=document.getElementById('display')

if(a==b){
    h2.innerHTML='equal'
}
if(a!=b){
    h2.innerHTML='not equal'
}

}