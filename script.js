const btn = document.querySelector('#click')
    content = document.querySelector('h2')


btn.addEventListener('click', () => {
    content.classList.toggle('active');
})