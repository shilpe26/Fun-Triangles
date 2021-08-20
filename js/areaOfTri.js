const base = document.querySelector('#base');
const heigth = document.querySelector('#height');
const areaBtn = document.querySelector('#area-btn');
const outputE1 = document.querySelector('#output');

function calculateAreaOfTriangle(base,height){
    const area = 0.5 * base * height;
    return area;
}

function calculateArea(){
    if(base.value === '' ||heigth.value === ''){
        outputE1.innerText = "Please enter Base and Height Both !";
    }else{
    const area = calculateAreaOfTriangle(Number(base.value), Number(heigth.value));
    outputE1.innerText= "The Area of a Triangle is " + area + " cm sq.";
    }
    document.querySelector('#output').style.cssText = ` margin: auto;
    text-align: center;
    border:1px solid #B97A95;
    width: 25%;
    text-align: center;
    padding: 20px;
    margin-top: 10px;
    background: linear-gradient(to right, #F6AE99,#B97A95);
    border-radius: 5px;`;
    
}

areaBtn.addEventListener("click",calculateArea);