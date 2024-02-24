const grid_o = document.querySelector('.grid');
const clearbtn = document.querySelector('.clear_button');
const changes_btn = document.querySelector('.changes_button');
let defaultGridSize = 16; 
createGrid(defaultGridSize);

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
    grid_o.innerHTML = '';
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
                if(isMouseDown){
                    let r=Math.floor(Math.random() * 256);
                    let g=Math.floor(Math.random() * 256);
                    let b=Math.floor(Math.random() * 256);
                    d.style.backgroundColor='black';
                }
            })
        }
    }
}

function createBox(d) {
    d.style.flex = '1 0 auto';
    d.style.aspectRatio = '1 / 1'; 
}

clearbtn.addEventListener('click',()=> {
    let new_d=grid_o.querySelectorAll('div');
    new_d.forEach(function(div){
        div.style.backgroundColor='transparent';
    })
})

changes_btn.addEventListener('click',()=>{
    let gridsize=prompt('Please type the size of the grid',defaultGridSize);
    if(gridsize===null){
        return ;
    }
    if(typeof +gridsize== "number"){
        gridsize= +gridsize;
        createGrid(gridsize);
    }else {
        alert("ERROR");
    }
})
