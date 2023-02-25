

document.querySelector('.accordion-content').addEventListener('click', function (e) {
    const target = document.querySelector('.content-container')

    if (target.matches('div')) {
        target.classList.toggle('show')
    }


})

