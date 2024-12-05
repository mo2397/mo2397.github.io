let proj;
fetch("projects.json")
    .then(response => {
        return response.json();
    })
    .then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    })
    .catch(err => {
        console.log(`error ${err}`);
    });

    function parseData(data){
        for(let i=0; i<data.projects.length; i++){
        document.getElementById("projects").innerHTML += `<a href= "${data.projects[i].subdomain}.html">
        <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="img/${data.projects[i].mainImg}"></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div></div>`;
        data.projects[i].name;
        }
    }

   for(b of document.querySelectorAll('#buttons button')){
    b.addEventListener("click",e=>{
        sortProjects(e.target.value);
    })
   }

   function sortProjects(button){
    if(button == 'clear'){
        for(i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = 'flex';
        }
    }else if(button != undefined){
        for(i=0; i<proj.projects.length;i++){
            if(proj.projects[i].category.includes(button) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = 'flex';
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = 'none';
            }
        }
    }else{
        console.log("error, button value is undefined");
    }
   }