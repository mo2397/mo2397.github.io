let myData = {};
let APIendPt = 'https://Catfact.ninja/fact';
function getFact(){
fetch(APIendPt)
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
            console.log('there was an error');
        }
        
    }).then(res=>{
        myData = res;
        console.log(myData['fact']);
        displayRes(myData.fact);
        // document.getElementById("fact").innerHTML = myData.fact;
    })

    .catch(error=>{console.log('sorry there was an error',error,alert("Error Alert!!!"))})
    
}
getFact();

function displayRes(fact){
    document.getElementById("fact").innerHTML = fact;
}

document.getElementById("generateJoke").addEventListener("click",e=> {getFact(),console.log('button Clicked!');})