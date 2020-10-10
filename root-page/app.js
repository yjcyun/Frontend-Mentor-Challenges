const solutions = [
  {
    title: 'Social proof section',
    img: './assets/social-proof.jpg',
    live: 'https://frontendmentor-social-proof.vercel.app/',
    stacks: ['HTML', 'CSS']
  },
  {
    title: 'Article preview component',
    img: './assets/article-preview.jpg',
    live: 'https://frontendmentor-article-preview-nine.vercel.app/',
    stacks: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Fylo data storage component',
    img: './assets/fylo-data.jpg',
    live: 'https://frontendmentor-fylo-data-storage-orpin.vercel.app/',
    stacks: ['HTML', 'CSS']
  },
  {
    title: 'Base apparel coming soon',
    img: './assets/base-apparel.jpg',
    live: 'https://base-apparel-coming-soon-master-murex.vercel.app/',
    stacks: ['HTML', 'CSS']
  },
  {
    title: 'Four card feature section',
    img: './assets/four-card.jpg',
    live: 'https://four-card-feature-section-master-flax.vercel.app/',
    stacks: ['HTML', 'CSS']
  },
  {
    title: 'Intro component with signup form',
    img: './assets/intro.jpg',
    live: 'https://intro-component-with-signup-form-master-delta.vercel.app/',
    stacks: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Single price grid component',
    img: './assets/single-price.jpg',
    live: 'https://single-price-grid-component-master-kappa-eight.vercel.app/',
    stacks: ['HTML', 'CSS']
  },
  {
    title: 'Huddle landing page with single introductory section',
    img: './assets/huddle-landing.jpg',
    live: 'https://huddle-landing-page-with-single-introductory-section-master.yjcyun.vercel.app/',
    stacks: ['HTML', 'CSS']
  },
  {
    title: 'Coding bootcamp testimonial',
    img: './assets/coding-bootcamp.jpg',
    live: 'https://coding-bootcamp-testimonials-slider-master-rosy-seven.vercel.app/',
    stacks: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Social media dashboard theme switcher',
    img: './assets/social-media.jpg',
    live: 'https://social-media-dashboard-with-theme-switcher-master-one.vercel.app/',
    stacks: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Insure landing page',
    img: './assets/insure.jpg',
    live: 'https://insure-landing-page-master-lac.vercel.app/',
    stacks: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Pricing component with toggle',
    img: './assets/pricing.jpg',
    live: 'https://pricing-component-with-toggle-master-swart.vercel.app/',
    stacks: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Project tracking intro component',
    img: './assets/project-track.jpg',
    live: 'https://13-project-tracking-intro-component-master.vercel.app/',
    stacks: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Clipboard landing page',
    img: './assets/clipboard.jpg',
    live: 'https://14-clipboard-landing-page-master.vercel.app/',
    stacks: ['HTML', 'CSS']
  }
]

window.addEventListener('DOMContentLoaded', () => {
  const solutionCards = document.getElementById('solution-cards');
  solutionCards.innerHTML = '';

  let solutionCard = '';

  solutions.forEach((solution) => {
    const stacks = solution.stacks.map(solution => {
      if (solution === 'HTML') {
        return `<li class='html'>${solution}</li>`;
      } else if (solution === 'CSS') {
        return `<li class='css'>${solution}</li>`;
      } else {
        return `<li class='js'>${solution}</li>`;
      }
    }).join('');

    solutionCard += `
    <a href=${solution.live} target='_blank' class='link'>
      <div class='solution__card'>
        <div class='solution__card-img'>
          <img src=${solution.img} alt=${solution.title}>
        </div>
        <div class='solution__card-body'>
          <ul class='header'>
            ${stacks}
          </ul>
          <h3 class='title'>${solution.title}</h3>
          <span class='live'>Live &#8594;</span>
        </div>
      </div>
    </a>
    `
  });

  solutionCards.innerHTML = solutionCard;
})
