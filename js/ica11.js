function tellFortune(children,partnerName,location,jobTitle){
    document.write('You will be a '+ jobTitle + ' in ' + location + ', and married to ' + partnerName + ' with ' + children + ' kids.'+'<br>' + '<br>');
}

tellFortune(100, "Bob", "New York", "Doctor");
tellFortune(1, "Max", "Colorado", "Graphic Designer");
tellFortune(3, "Dave", "California", "Web Developer");

function calculateDogAge(age){
    var dogAge = age * 7;
    document.write('Your doggie is ' + dogAge +  ' years old in dog years!' + '<br>' + '<br>')
   
}

calculateDogAge(1);
calculateDogAge(4);
calculateDogAge(8);

function reverse(number){
    let newNum = number.toString().split().reverse();
    document.write('<br>' + '<br>' + newNum);
}

reverse(900);
reverse(12345);

function alphabetical(string1){
    newString =  string1.split('').sort().join('');
    document.write('<br>' + '<br>' + newString);
}

alphabetical("cba");
alphabetical("webmaster");

function upperCase(myString){
    lettersAfterSpace = myString.split(" ");
    arrayForWords = [];
    for (var x = 0; x < lettersAfterSpace.length; x++){
        arrayForWords.push(lettersAfterSpace[x].charAt(0).toUpperCase() + lettersAfterSpace[x].slice(1));
        newWord = arrayForWords.join(' ');
    }
    
    document.write('<br>' + '<br>' + newWord);
}

upperCase("hi this is a sentence");
upperCase("the quick brown fox");