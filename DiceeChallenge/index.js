var randNum1 = Math.floor(Math.random() * 6 + 1);

var imageName1 = '/images/dice'+ randNum1 +'.png' ;

var image1 = document.getElementsByClassName('img1')[0]
image1.setAttribute('src', imageName1);
console.log(randNum);

