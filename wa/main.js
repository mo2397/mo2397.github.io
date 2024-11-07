
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
var insertY = ["the soup kitchen","Disneyland","the White House"] ;
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"] ;




randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertX:",xItem).replace(":insertY:",yItem).replace(":insertZ:",zItem);

  if(customName.value !== 'Bob') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature =  `${Math.round((94 - 32)*5/9)} centegrade`;
    newStory = newStory.replace("300 pounds", weight).replace("94 fahrenheit",temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}