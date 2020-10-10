const shareIcon = document.getElementById('share_icon');
const shareBox = document.getElementById('share_container');

const openShareBox = () => {
  shareIcon.addEventListener('click', ()=>{
    shareBox.classList.toggle('show');
  });
}

openShareBox();