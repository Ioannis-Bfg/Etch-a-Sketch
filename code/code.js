const grid_o = document.querySelector('.grid');
const grid_x = document.querySelector('.grid-x');

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
            d.addEventListener('mouseenter', function () {
                d.style.transition = 'background-color 0.1s ease';
                let r=Math.floor(Math.random() * 256);
                let g=Math.floor(Math.random() * 256);
                let b=Math.floor(Math.random() * 256);
                d.style.backgroundColor =`rgb(${r},${g},${b})`;
            })
        }
    }
}

function createBox(d) {
    d.style.border = '0.005vw dotted rgb(216, 75, 75,.4)';
    d.style.flex = '1 0 auto';
    d.style.aspectRatio = '1 / 1'; 
}

createGrid(64);
