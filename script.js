const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const resetBtn = document.querySelector('#reset')
const panel = document.querySelector('#panel')
const feedback = document.querySelector('#feedback')
const feedbackContainer = document.querySelector('#feedback-container')
const container = document.querySelector('#container')
let selectedRating = ''
let feedbackImg = ''
let feedbackMsg = ''

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        // selectedRating = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }

    switch (e.target.value) {
        case 'sick':
            feedbackImg = "https://cdn-icons-png.flaticon.com/512/8231/8231547.png";  
            feedbackMsg = "We'll get back to you!" 
            break;
        case 'lol':
            feedbackImg = "https://cdn-icons-png.flaticon.com/512/4160/4160714.png";  
            feedbackMsg = "Tears of joy I promise" 
            break;
        case 'great':
            feedbackImg = "https://cdn-icons-png.flaticon.com/512/2584/2584602.png";  
            feedbackMsg = "Thank you!!!" 
            break;
    }
})


sendBtn.addEventListener('click', (e) => {
    panel.classList.add('hide')
    feedbackContainer.classList.remove('hide')
    feedback.innerHTML = `
            <img src='${feedbackImg}' alt='feedbackMsg'>
            <strong>${feedbackMsg}</strong>
    `
})

resetBtn.addEventListener('click', () => {
    removeActive()
    panel.classList.remove('hide')
    feedbackContainer.classList.add('hide')
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}




