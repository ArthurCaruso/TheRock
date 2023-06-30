// intro


function initFadeIn(){
    setTimeout(function(){
        const dwayne = document.querySelector('#dwayne');
        dwayne.classList.remove('fade')
    }, 1000)
    
    setTimeout(function(){
        const the = document.querySelector('#the');
        the.classList.remove('fade')
    }, 2650)
    
    setTimeout(function(){
        const rock = document.querySelector('#rock');
        rock.classList.remove('fade')
    }, 3000)
    
    setTimeout(function(){
        const johnson = document.querySelector('#johnson');
        johnson.classList.remove('fade')
    }, 4600)
    
    setTimeout(function(){
        const mainText = document.querySelector('#mainText');
        mainText.classList.remove('fade')
    }, 5800)
}

initFadeIn()

// fadeOut
function fadeOut(){
    dwayne.classList.add('fade')
    the.classList.add('fade')
    rock.classList.add('fade')
    johnson.classList.add('fade')
    mainText.classList.add('fade')
}

// Initial settings
const body = document.querySelector('body')
const aboutLayer = document.querySelector('#parentCoverAbout')
const wrestLayer = document.querySelector('#parentWrestAbout')
const moviesLayer = document.querySelector('#parentMoviesAbout')

function initialSetting(){
    body.removeChild(aboutLayer)
    body.removeChild(wrestLayer)
    body.removeChild(moviesLayer)
}

initialSetting()


// nav buttons
const aboutBtn = document.querySelector('#aboutBtn')
const wrestBtn = document.querySelector('#wrestBtn')
const moviesBtn = document.querySelector('#moviesBtn')
const picsBtn = document.querySelector('#picsBtn')




// about functions
aboutBtn.addEventListener('click', function(){
    // title function
    fadeOut()

    // add the layer
    body.appendChild(aboutLayer)


    // transition
    setTimeout(function(){
        aboutLayer.classList.remove('fade')
    }, 80)

    // return to top
    window.scrollTo({top: -5, behavior: 'smooth'});

    // exit button
    const aboutExitBtn = document.querySelector('#aboutExitBtn')
    aboutExitBtn.addEventListener('click', function(){
        body.removeChild(aboutLayer)
        initFadeIn()
    })
})




// wrest functions 
wrestBtn.addEventListener('click', function(){
    // title function
    fadeOut()
    
    // add the layer
    body.appendChild(wrestLayer)


    // transition
    setTimeout(function(){
        wrestLayer.classList.remove('fade')
    }, 80)

    // return to top
    window.scrollTo({top: -5, behavior: 'smooth'});

    // exit button
    const wrestExitBtn = document.querySelector('#wrestExitBtn')
    wrestExitBtn.addEventListener('click', function(){
        body.removeChild(wrestLayer)
        initFadeIn()
    })
})

// moveis functions
moviesBtn.addEventListener('click', function(){
     // title function
     fadeOut()
    
     // add the layer
     body.appendChild(moviesLayer)
 
 
     // transition
     setTimeout(function(){
        moviesLayer.classList.remove('fade')
     }, 80)
 
     // return to top
     window.scrollTo({top: -5, behavior: 'smooth'});
 
     // exit button
     const moviesExitBtn = document.querySelector('#moviesExitBtn')
     moviesExitBtn.addEventListener('click', function(){
         body.removeChild(moviesLayer)
         initFadeIn()
     })
})

