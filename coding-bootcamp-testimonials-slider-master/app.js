const testimonials = [
  {
    id: 1,
    review: '“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”',
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    img: './images/image-tanya.jpg'
  },
  {
    id: 2,
    review: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    img: './images/image-john.jpg'
  }
];

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const review = document.getElementById('review');
const name = document.getElementById('name');
const job = document.getElementById('job');
const img = document.getElementById('img');

let currentReview = 0;

window.addEventListener('DOMContentLoaded', () => {
  selectReview();
});

prev.addEventListener('click', () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = testimonials.length - 1;
  }
  selectReview();
})

next.addEventListener('click', () => {
  currentReview++;
  if(currentReview > testimonials.length-1) {
    currentReview = 0;
  }
  selectReview();
})

function selectReview() {
  const item = testimonials[currentReview];
  img.src = item.img;
  img.alt = item.name;
  review.textContent = item.review;
  name.textContent = item.name;
  job.textContent = item.job;
}