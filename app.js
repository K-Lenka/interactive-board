const board = document.querySelector('#board')
const colors = ['#8ecae6', '#219ebc', '$023047', '#ffb703', '#fb8500', '#f9844a', '#f94144', '#90be6d']
const SQUARES_NUMBER = 1140;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', setColor)
    
    square.addEventListener('mouseleave',removeColor)
    
    board.append(square)
    }
    
    function setColor(event) {
      const element = event.target
        const color = getRandomColor()
        element.style.backgroundColor = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }
    
    function removeColor(event) {
      const element = event.target
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }
    
    function getRandomColor () {     
      return colors[Math.floor(Math.random() * colors.length)]
    }