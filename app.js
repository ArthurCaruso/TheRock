

// body
const body = document.querySelector('body');

// layers
const aboutCoverParent = document.querySelector('#aboutCoverParent');

// buttons
const aboutBtn = document.querySelector('#aboutBtn');

body.removeChild(aboutCoverParent)


aboutBtn.addEventListener('click', function(){
    body.appendChild(aboutCoverParent)
})