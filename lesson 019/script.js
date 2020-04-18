let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {    
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlocks = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

    btnBlocks.addEventListener('click', function(event) {
        console.log(event);
        if (event.target && event.target.tagName == 'BUTTON' && event.target.parentNode.className == '3 blocks') {
            console.log('Hello');    

        }
    });