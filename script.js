const menuButtons = document.querySelectorAll('.menu-btn');

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    menuButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

const cartBtn = document.getElementById('cartBtn');

cartBtn.addEventListener('click', () => {
  alert('Кнопка кошика натиснута');
});
