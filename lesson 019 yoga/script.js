window.addEventListener('DOMContentLoaded', function() {

'use strict';

let btns = document.querySelectorAll('.info-header-tab'),
    prntBtn = document.querySelector('.info-header'),
    tabContents = document.querySelectorAll('.info-tabcontent');


hideContent(1);

function hideContent(a) {
    for (let i=a; i < tabContents.length; i++) {
        tabContents[i].classList.remove('show');
        tabContents[i].classList.add('hide');
    } 
};

function showContent(b) {   
    if (tabContents[b].classList.contains('hide')) {    
        tabContents[b].classList.remove('hide');
        tabContents[b].classList.add('show');  
    }
};

prntBtn.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < btns.length; i++) {
            if (target == btns[i]) {
                hideContent(0);
                showContent(i);
                break;
            }
        }
    };
});


});
































