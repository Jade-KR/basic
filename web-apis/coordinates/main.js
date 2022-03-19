const aim = document.querySelector('.aim');
const pos = document.querySelector('.pos');
const lineX = document.querySelector('.line-x');
const lineY = document.querySelector('.line-y');

window.addEventListener('mousemove', (e) => {
    aim.style.left = `${e.pageX}px`;
    aim.style.top = `${e.pageY}px`;
    lineX.style.top = `${e.pageY}px`;
    lineY.style.left = `${e.pageX}px`;
    pos.style.top = `${e.pageY}px`;
    pos.style.left = `${e.pageX}px`;
    pos.innerHTML = `(${e.pageX}px, ${e.pageY}px)`
})