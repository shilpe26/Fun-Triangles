const sides = document.querySelectorAll('.side-input');
const hypoBtn = document.querySelector('#hypo');
const outputE1 = document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumOfSqure = a*a + b*b;
    // console.log(sumOfSqure);
    return sumOfSqure;
}

function calculateHypo(){
    const sumOfSqures = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lenthOfHypo = Math.sqrt(sumOfSqures);
    // console.log(lenthOfHypo);
    outputE1.innerText= "The len of hypotenus is " + lenthOfHypo;
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

hypoBtn.addEventListener("click",calculateHypo);