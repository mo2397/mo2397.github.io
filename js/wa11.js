const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['cat1.jpg','cat2.jpg','cat3.jpg','cat4.jpg','cat5.jpg'];
/* Declaring the alternative text for each image file */
const altText = {
    'cat1.jpg' : 'Cat laying on floor napping covering face with paw',
    'cat2.jpg' : 'Annoyed cat sitting on backpack',
    'cat3.jpg' : 'Cat laying upside down with teetch sticking out',
    'cat4.jpg' : 'Cat taking a nap on a sweater',
    'cat5.jpg' : 'Cat taking a nap on a winter coat with one eye open',
}
/* Looping through images */
for (let i = 0; i < 5; i++){
    const currentPic = filenames[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/'+currentPic);
    newImage.setAttribute('alt', altText[currentPic]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(e) {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
}


// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",function(){
    const currentBtnClass = btn.getAttribute('class');
    if (currentBtnClass==='dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

});