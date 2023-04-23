let courslistes = document.querySelector(".listes-cours");
if(courslistes){
    fetch("cours.json")
    .then((reponse) =>reponse.json())
    .then((data) =>{
        let cours = data;
        for(const course of cours)
        {
            courslistes.innerHTML+=`
            <div class="cours-item">
                <img class="img_cours" src="${course.images}" alt="" srcset="">
                <p>${course.name}</p>
                <p>${course.temps}</p>
            </div>`;
        }
    })
}
