//choose-your-favorite

let animals = [
    {
        name: 'panda',
        img: '../../assets/images/two-pandas.png',
        motherland: 'Native to Southwest China',
        meal: '../../assets/icons/banana-bamboo_icon.png'
    },
    {
        name: 'panda',
        img: '../../assets/images/bird.png',
        motherland: 'Native to Southwest China',
        meal: '../../assets/icons/meet-fish_icon.png'
    },
    {
        name: 'panda',
        img: '../../assets/images/gorilla.png',
        motherland: 'Native to Southwest China',
        meal: '../../assets/icons/banana-bamboo_icon.png'
    },
    {
        name: 'panda',
        img: '../../assets/images/lenivec.png',
        motherland: 'Native to Southwest China',
        meal: '../../assets/icons/banana-bamboo_icon.png'
    },
    {
        name: 'panda',
        img: '../../assets/images/gepard.png',
        motherland: 'Native to Southwest China',
        meal: '../../assets/icons/meet-fish_icon.png'
    },
    {
        name: 'panda',
        img: '../../assets/images/pinguin.png',
        motherland: 'Native to Southwest China',
        meal: '../../assets/icons/banana-bamboo_icon.png'
    },
]

let blockChoosingFavorite = document.querySelector('.choose-your-favorite');
console.log(blockChoosingFavorite);
let blockWithAnimals = document.querySelector('.choose-your-favorite_options');;
console.log(blockWithAnimals);

function createCard(name, img, motherland, meal) {
    let newLi = document.createElement("li");
    newLi.classList.add("choose-your-favorite_card");
    blockWithAnimals.appendChild(newLi);
    let newImg = document.createElement("img");
    newImg.src = img;
    newImg.alt = name;
    newLi.prepend(newImg);
    let newSpan = document.createElement("span");
    newImg.after(newSpan);
    newSpan.innerHTML = name;
    let newP = document.createElement("p");
    newSpan.after(newP);
    newP.innerText = motherland;
    let newIcon = document.createElement("img");
    newIcon.src = meal;
    newP.after(newIcon);
}
// createCard("bird", "../../assets/images/bird.png","bird","../../assets/icons/meet-fish_icon.png");

animals.forEach((el, i, animals) => {
    console.log(createCard(el.name, el.img, el.motherland, el.meal));
})