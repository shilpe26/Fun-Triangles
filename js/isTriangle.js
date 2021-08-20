const input = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputE1 = document.querySelector('#output');

function culaculateOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    if (input[0].value === '' || input[1].value === '' || input[2].value === '') {
        outputE1.innerText = "Please Enter All Three Angles !";
    }else{
        const sumOfAngles = culaculateOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
        if (sumOfAngles === 180) {
            // console.log("Angles of triangle");
            outputE1.innerText = "Angles of a triangle";
        } else {
            outputE1.innerText = "Not a triangle";
        }
    }

        document.querySelector('#output').style.cssText = `margin: auto;
    text-align: center;
    border:1px solid #B97A95;
    width: 25%;
    text-align: center;
    padding: 20px;
    margin-top: 10px;
    background: linear-gradient(to right, #F6AE99,#B97A95);
    border-radius: 5px;`;
} 


    isTriangleBtn.addEventListener('click', isTriangle);