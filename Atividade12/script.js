var image = document.querySelector('img');

image.addEventListener('mouseover', () => {
  image.src = "./open.png"
})
image.addEventListener('mouseout', () => {
  image.src = "./closed.png"
})
image.addEventListener('click', () => {
  image.src = "./broken.png";
})
