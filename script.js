const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const films = [
    {
        id: 0,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        raiting: 7.8,
        image: './images/film.jpeg',
        link: '/film.html'
    },
    {
        id: 1,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        raiting: 7.8,
        image: './images/film.jpeg',
        link: '/film.html'
    },
    {
        id: 2,
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        raiting: 7.8,
        image: './images/film.jpeg',
        link: '/film.html'
    }
]

const render = (array) => {
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="${item.image}" alt="film">
                </div>

                <div class="content-cards__item--title">
                    <h5>
                        ${item.title},
                    </h5>

                    <span>
                    ${item.original}
                    </span>
                </div>

                <p class="content-cards__item--description">
                    ${item.category}
                </p>

                <p class="content-cards__item--raiting">
                    ${item.raiting}
                </p>
            </a>
        `)
    })
}

searchButton.addEventListener('click', () => {
    render(films.filter((item) => {
        return item.title.includes(searchInput.value)
    }));
})

render(films);