/* Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto! */

/* const photoContainerElm = document.querySelectorAll("card")

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response => {
const photos = response.data;
photos.forEach(photo => {
const image
photoContainerElm.innerHTML +=

})
})  */

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
      .then(function(response){
        console.log("response.data", response.data)
        response.data.forEach((element,index) => {
            const nameTitle = element.title;
            const card = document.getElementById(`card-${index+1}`);
            if(card) {
                const cardTitle = card.querySelector('.card-title').textContent = nameTitle
            }
        })
      })

//gestione errori
.catch(error => {
    console.error("errore chiamata", error)
})


//seconda parte
/*Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare*/

const overlayElm = document.getElementById('overlay');
const closeButtonElm = document.getElementById('close-overlay');
const photosElm = document.querySelectorAll('.card-img');

photosElm.forEach(photo => {
    photo.addEventListener('click', () => {
        overlayElm.style.display = 'flex';
        const imageSrcelm = photo.src; 
        const overlayImage = document.querySelectorAll('overlay-image');
        overlayImage.src = imageSrcelm;
    });
});

closeButton.addEventListener('click', () => {
    overlayElm.style.display = 'none';
}); 

