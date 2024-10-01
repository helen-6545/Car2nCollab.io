let comicPages = ["images/comics/renFairies/1.jpg", "images/comics/renFairies/2.jpg", "images/comics/renFairies/3.jpg", "images/comics/renFairies/4.jpg", "images/comics/renFairies/5.jpg", "images/comics/renFairies/6.jpg", "images/comics/renFairies/7.jpg"]
let pageNumber = 0;

function next(){
pageNumber=pageNumber+1;
if (pageNumber == comicPages.length){
    pageNumber = 0
}
console.log(pageNumber)
document.getElementById("currentPage").src = comicPages[pageNumber]
}
function previous(){
pageNumber=pageNumber-1;
if (pageNumber == -1){
    pageNumber = comicPages.length - 1
}
console.log(pageNumber)
document.getElementById("currentPage").src = comicPages[pageNumber]
}
function comicRefresh(){
let selectedValue = document.getElementById("comics").value
if (selectedValue == "renfairies"){
    comicPages = ["images/comics/renFairies/1.jpg", "images/comics/renFairies/2.jpg", "images/comics/renFairies/3.jpg", "images/comics/renFairies/4.jpg", "images/comics/renFairies/5.jpg", "images/comics/renFairies/6.jpg",]
}
if (selectedValue == "getngo"){
    comicPages = ["images/comics/getngo/1.png", "images/comics/getngo/2.png", "images/comics/getngo/3.png", "images/comics/getngo/4.png", "images/comics/getngo/5.png"]
}
if (selectedValue == "hotelNine"){
    comicPages = ["images/comics/hotelNine/1.png", "images/comics/hotelNine/2.png", "images/comics/hotelNine/3.png", "images/comics/hotelNine/4.png", "images/comics/hotelNine/5.png", "images/comics/hotelNine/6.png",]
}
if (selectedValue == "edinMoore"){
    comicPages = ["images/comics/edinMoore/1.jpg", "images/comics/edinMoore/2.jpg", "images/comics/edinMoore/3.jpg", "images/comics/edinMoore/4.jpg", "images/comics/edinMoore/5.jpg", "images/comics/edinMoore/6.jpg", "images/comics/edinMoore/7.jpg"]
}
document.getElementById("currentPage").src = comicPages[0]
}