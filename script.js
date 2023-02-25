// const content = document.querySelector('.accordion-content');
// const unLock = document.querySelector('.question');

// unLock.addEventListener('click', function () {
//     content.classList.toggle('show');



// })

document.querySelector('.accordion-content').addEventListener('click', function (e) {
    const target = document.querySelector('.content-container')

    if (target.matches('div')) {
        target.classList.toggle('show')
    }

})
