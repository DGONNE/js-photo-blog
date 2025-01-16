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
/* Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura. */
