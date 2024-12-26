const model = document.getElementById('model');
const modelinfo = document.getElementById('popup');
const description = document.querySelector('.description');


let click = 0;
let total = 0;


model.addEventListener('click', function () { // Corrected function syntax
    click += 1; 
    total = click; 
    console.log(total);

    if (total === 1) { // Use strict equality (===) for comparisons
        modelinfo.style.display = 'block';
        console.log("click 1");
        description.style.display = 'none';
    } else if (total === 2) {
        description.style.display = 'block';
        modelinfo.style.display = 'none';
        click = 0; // Reset click counter
    }
});


const vfx = document.getElementById('vfx');
const vfxinfo = document.getElementsByClassName('vfxpopup');

let click1 = 0
let total1 = 0
if (vfx.addEventListener('click', function() {
    click1 += 1;
    total1 = click;
    console.log(total1);

    if (total1 == 1) {
        vfxinfo.style.display = 'block';
        description.style.display = 'none';
        console.log("click 1")
    }
    else if (total1 == 2) {
        vfxinfo.style.display = 'none';
        description.style.display = 'block';
        click1 = 0;
    }
}));
  

    