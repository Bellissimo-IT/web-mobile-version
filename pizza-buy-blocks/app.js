// let sizeConInfo = document.querySelector('.choose-size-wrapper'), sizeText = document.getElementById('size-text'), little = document.querySelectorAll('.little');
// console.dir(little);


// function hasClass(element, cls) {
//     return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
// }

// var el = document.getElementById('little');

// // alert(hasClass(el, 'active'));

// if (hasClass(el, 'active')) {
//     sizeText.innerHTML = 'маленькая';
// }




// console.dir(sizeConInfo);
// console.log();

// if (sizeConInfo.firstElementChild.classList.contains('active')) {
//     // var containText = sizeConInfo.firstElementChild.indexText;
//     console.log(sizeConInfo.firstElementChild.indexHTML);
// }

let little = document.querySelector('.little'), 
    middle = document.querySelector('.middle'), 
    big = document.querySelector('.big'), 
    typeWrapper = document.querySelector('.choose-type-wrapper'), 
    sizeText = document.getElementById('size-text');

little.onclick = function() {
    sizeText.innerHTML = "маленькая";
    little.classList.add('active');
    middle.classList.remove('active');
    big.classList.remove('active');
    typeWrapper.innerHTML = `<div class="type air active">Воздушное</div>`;
    typeWrapper.classList.add('one');
    typeWrapper.classList.remove('two');
    typeWrapper.classList.remove('three');
    var air = document.querySelector('.air');
}

middle.onclick = function() {
    sizeText.innerHTML = "средняя";
    little.classList.remove('active');
    big.classList.remove('active');
    middle.classList.add('active');
    typeWrapper.innerHTML = `<div class="air type active">Воздушное</div>
    <div class="thin type">Тонкое</div>`;
    typeWrapper.classList.remove('one');
    typeWrapper.classList.add('two');
    typeWrapper.classList.remove('three');
    var thin = document.querySelector('.thin');
}

big.onclick = function() {
    sizeText.innerHTML = "большая";
    little.classList.remove('active');
    middle.classList.remove('active');
    big.classList.add('active');
    typeWrapper.innerHTML = `<div class="air type active">Воздушное</div>
    <div class="thin type">Тонкое</div>
    <div class="hot-dog type">Хот-дог борт</div>`;
    typeWrapper.classList.remove('one');
    typeWrapper.classList.remove('two');
    typeWrapper.classList.add('three');
    var hotDog = document.querySelector('.hot-dog');
}





air.onclick = function() {
    air.classList.add('active'),
    thin.classList.remove('active'),
    hotDog.classList.remove('active');
}

thin.onclick = function() {
    air.classList.remove('active'),
    thin.classList.add('active'),
    hotDog.classList.remove('active');
}

hotDog.onclick = function() {
    air.classList.remove('active'),
    thin.classList.remove('active'),
    hotDog.classList.add('active');
}