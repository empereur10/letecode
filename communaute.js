let menbrelistes = document.querySelector(".listes-membres");
if(menbrelistes){
    fetch("communaute.json")
    .then((reponse) =>reponse.json())
    .then((data) =>{
        let membres = data;
        for(const course of membres)
        {
            menbrelistes.innerHTML+=`
            <div class="membres-item">
                <img class="img_membres" src="${course.images}" alt="" srcset="">
                <p>${course.name}</p>
            </div>`;
        }
    })
}
