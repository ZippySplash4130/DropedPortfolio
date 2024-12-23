const model = document.getElementById('model');

let click = 0;
let total = 0;

if (model.addEventListener('click', function() {
    const modelinfo = document.getElementById('popup');
    click += 1;
    total = click;
    console.log(total);

    if (total == 1) {
        modelinfo.style.display = 'block';
        console.log("click 1")
    }
    else if (total == 2) {
        modelinfo.style.display = 'none';
        click = 0;
    }
}));

  

    