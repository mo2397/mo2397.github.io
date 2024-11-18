let myData = {};

function fetchData() {
    
    fetch('https://corsproxy.io/?https://xkcd.com/' + getRandNum() + '/info.0.json') 
    .then(res => {
        if (res.ok) {
            return res.json();
        }else {
            console.log(res);
        }
    })
    .then (res => {
        myData = res;
        console.log(myData);

        // title
        document.getElementById("title").innerHTML = myData.title;

        // display comic
        document.getElementById('comic').src = myData.img;

        // change alt text\
        document.getElementById('comic').alt = myData.alt;

        // comic date below img
        document.getElementById('year').innerHTML = myData.year;
    }
        
    )


}
fetchData();
document.getElementById("changeComic").addEventListener("click",function() {
    console.log('button Clicked!')
    fetchData();
});


function getRandNum(){
    return Math.floor(Math.random() * 3001);

}
randomNumber = getRandNum();
console.log("random number: " +randomNumber );