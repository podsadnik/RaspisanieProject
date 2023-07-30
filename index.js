const element = document.querySelector('h1');

element.addEventListener('click', () => {
  element.style.cssText = 'color: blue; border: 1px solid black';
});