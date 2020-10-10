const toggleSwitch = document.getElementById('toggle-switch');
const monthly = document.querySelectorAll('.monthly');
const annually = document.querySelectorAll('.annually');

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.classList.toggle('toggled');
  toggleHide(monthly);
  toggleHide(annually);
})

function toggleHide(length) {
  length.forEach(el=>{
    el.classList.toggle('hide');
  })
}