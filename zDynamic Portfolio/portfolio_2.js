let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch("projects.json")
    .then(response => {
        return response.json();
    })
    .then(projects => {
        
        proj = projects;
        findProjectInJSON(projects);
        // parseData(projects);
    })
    .catch(err => {
        console.log(`error ${err}`);
    });


function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}

// function buildPage(project){
//     console.log(project);
//     document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
//     console.log("hi " + project.name);
// }

// const displayedImage = document.getElementsByClassName('displayed-img');
const displayedImage = document.querySelector('.displayed-img');
function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
    console.log("hi " + project.name);
    const thumbBar = document.querySelector('.thumb-bar');

    /* Looping through images */
    for (let i = 0; i < project.images.length; i++){
        const currentPic = project.images[i];
        const newImage = document.createElement('img');
        newImage.setAttribute('src', currentPic.src);
        newImage.setAttribute('alt', currentPic.alt);
        thumbBar.appendChild(newImage);

        newImage.addEventListener('click', function(e) {
            // alert(displayedImage.alt);
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        });
    }


    // const newImage = document.createElement('img');
    // newImage.setAttribute('src', xxx);
    // newImage.setAttribute('alt', xxx);
    // thumbBar.appendChild(newImage);

    // ADDING DESCRIPTION BELOW SLIDESHOW
    console.log(project.description);
    document.getElementById("description").innerHTML += `<h1>${project.description}</h1>`;
    
}

console.log("portfolio.js is loaded");

const slideshowCarasole = document.getElementById("slideshow");

const carouselContainer = document.createElement('div');


