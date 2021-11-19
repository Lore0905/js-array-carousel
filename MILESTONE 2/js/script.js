const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// selezioniamo le classi in cui applicheremo il templeate leterals
const containerImg = document.querySelector('.container-principal-img');
const containerThumbs = document.querySelector('.container_thumbs');
// per ogni ciclo for inseriamo i single-principal-img e i single thumbs con il templeate literal

for ( let i = 0; i < items.length; i++){

    const totalItems = items[i];
    const totalTitle = title[i];
    const totalText = text[i];

    // CONTAINER PRINCIPLA IMG
    // inserisco tutte le immagini sull'HTML

    let singleImg = 
    `
    <div class="single-principal-img ">
        <img src="../consegna/${totalItems}" alt="${totalItems}">
        <div class="single-img-text">
            <h2>${totalTitle}</h2>
            <p>${totalText}</p>
        </div>
    </div>
    `
    
    containerImg.innerHTML += singleImg;





    // CONTAINER THUMBS
    // inserisco tutte le immagini sull'HTML
    
    let singleThumbs = 
    `
    <div class="single-thumbs">
        <img src="../consegna/${totalItems}" alt="${totalItems}">
    </div>
    `
    
    containerThumbs.innerHTML += singleThumbs;
    console.log(singleThumbs);



}
    
    