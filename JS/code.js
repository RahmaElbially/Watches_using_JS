var allPictures = document.querySelectorAll(".pictures .pic");
var itemsNumber = document.querySelector(".itemsnum");
var btn1 = document.querySelector(".btn");

var footer = document.querySelector(".footer");
var emptyDiv = document.querySelector(".empty")
var showPriceBtn = document.querySelector(".showPrice");
var emptyPriceDiv = document.querySelector(".emptyPrice");

var totalItems = 0;
var totalPrice = 0;

allPictures.forEach( function (item){
    item.onclick = function (){
        totalItems ++;
        itemsNumber.innerHTML = totalItems;
        emptyDiv.innerHTML += item.getAttribute("info") + "  /  ";
        totalPrice += +(item.getAttribute("price"));
        if(itemsNumber.innerHTML != 0){
            btn1.style.display = "block"
        }
    }
})

btn1.onclick = function(){
    window.alert("Go Down To See What You Choose ... ");
    footer.style.display = "flex";
}

showPriceBtn.onclick = function(){
    emptyPriceDiv.innerHTML = totalPrice
}