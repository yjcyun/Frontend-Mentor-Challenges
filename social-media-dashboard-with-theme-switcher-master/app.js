const overviews = [
  {
    id: 1,
    name: 'page views',
    num: '87',
    icon: './images/icon-facebook.svg',
    status: '3%',
    statusSign: 'up'
  },
  {
    id: 2,
    name: 'likes',
    num: '52',
    icon: './images/icon-facebook.svg',
    status: '2%',
    statusSign: 'down'
  },
  {
    id: 3,
    name: 'likes',
    num: '5462',
    icon: './images/icon-instagram.svg',
    status: '2257%',
    statusSign: 'up'
  },
  {
    id: 4,
    name: 'profile views',
    num: '52k',
    icon: './images/icon-instagram.svg',
    status: '1375%',
    statusSign: 'up'
  },
  {
    id: 5,
    name: 'retweets',
    num: '117',
    icon: './images/icon-twitter.svg',
    status: '303%',
    statusSign: 'up'
  },
  {
    id: 6,
    name: 'likes',
    num: '507',
    icon: './images/icon-twitter.svg',
    status: '553%',
    statusSign: 'up'
  },
  {
    id: 7,
    name: 'likes',
    num: '107',
    icon: './images/icon-youtube.svg',
    status: '19%',
    statusSign: 'down'
  },
  {
    id: 6,
    name: 'total views',
    num: '1407',
    icon: './images/icon-youtube.svg',
    status: '1407%',
    statusSign: 'down'
  }
];


window.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = ''

  let card = '';

  overviews.forEach(overview => {
    card += `
    <div class='overview__card card'>
      <div class='flex justify-space-between'>
        <h5 class='bold-light-text-color'>${overview.name}</h5>
        <img src=${overview.icon} alt=${overview.name}>
      </div>
      <div class='flex justify-space-between'>
        <div class='num'>${overview.num}</div>
        <div class='status flex justify-center small-font-size '>
          <img src=${`./images/icon-${overview.statusSign}.svg`} alt='' id='status-sign'>
          <span class=${overview.statusSign} id='status'>${overview.status}</span>
        </div>
      </div>
    </div>
    `
  });
  cardsContainer.innerHTML = card;
});

const themeSwitcher = document.getElementById('toggle-switch');

themeSwitcher.addEventListener('click', () => {
  themeSwitcher.classList.toggle('toggled');

  document.body.classList.toggle('dark-theme');
})