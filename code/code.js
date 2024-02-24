const grid_o = document.querySelector('.grid');
const grid_x = document.querySelector('.grid-x');
const clearbtn=document.querySelector('.clear_button');

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

grid_o.addEventListener('mousedown', function(event) {
    event.preventDefault();
});

function createGrid(n) {
    for (let j = 0; j < n; j++) {
        let grid_x = document.createElement('div');
        grid_x.style.display = 'flex';
        grid_o.appendChild(grid_x);
        grid_o.style.aspectRatio = '1 / 1'; 
        for (let i = 0; i < n; i++) {
            let d = document.createElement('div');
            createBox(d);
            grid_x.appendChild(d);
            d.addEventListener('mousemove', function () {
                // d.style.transition = 'background-color 0.01s ease';
                if(isMouseDown){
                    let r=Math.floor(Math.random() * 256);
                    let g=Math.floor(Math.random() * 256);
                    let b=Math.floor(Math.random() * 256);
                    // d.style.backgroundColor =`rgb(${r},${g},${b})`;
                    d.style.backgroundColor='black';
                }
            })
        }
    }
}

function createBox(d) {
    // d.style.border = '0.005vw dotted rgb(0, 0, 0,.4)';
    d.style.flex = '1 0 auto';
    d.style.aspectRatio = '1 / 1'; 
}

clearbtn.addEventListener('click',()=> {
    let new_d=grid_o.querySelectorAll('div');
    new_d.forEach(function(div){
        div.style.backgroundColor='transparent';
    })
})

createGrid(64);
