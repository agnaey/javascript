function sample(){
    let s=parseInt(document.getElementById('sal').value)
    let e= parseInt(document.getElementById('exp').value)
    let h3=document.getElementById('total')
    if (e>5){
        let a=s*0.05
        let  total=a+s
        h3.innerHTML=total
    }
    else{
        h3.innerHTML='no change'
    }

}