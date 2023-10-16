// Constants for query selectors
const bgColorInput = document.querySelector('#customNumber');
const studentIdParagraph = document.querySelector('#myStudentId');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.querySelector('#imageSelect');
const images = document.querySelectorAll('#images');

// Function to change background color based on user input and add student ID
function changeCustomColor() {
  const customNumber = parseInt(bgColorInput.value);

  if (customNumber < 0 || customNumber > 100) {
    document.body.style.backgroundColor = 'red';
  } else if (customNumber >= 0 && customNumber < 20) {
    document.body.style.backgroundColor = 'green';
  } else if (customNumber >= 20 && customNumber < 40) {
    document.body.style.backgroundColor = 'blue';
  } else if (customNumber >= 40 && customNumber < 60) {
    document.body.style.backgroundColor = 'orange';
  } else if (customNumber >= 60 && customNumber < 80) {
    document.body.style.backgroundColor = 'purple';
  } else {
    document.body.style.backgroundColor = 'yellow';
  }

  studentIdParagraph.textContent = `Student ID: ${200383347}`;
}

// Function to change background color randomly
function changeRandomColor() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  changeCustomColor(randomNumber);
  
}

// Function to generate options for the select list
function addList() {
  const imageOptions = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg'
  ];

  for (let i = 0; i < imageOptions.length; i++) {
    const option = document.createElement('option');
    option.value = `./img/${imageOptions[i]}`;
    option.textContent = `Image ${i + 1}`;
    imageSelect.appendChild(option);
  }
}

// Function to change the image
function changeImage() {
  const selectedImage = imageSelect.value;
  images.forEach(image => {
    image.src = selectedImage;
  });
}

// Event listeners for click events
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);

// Event listener for change event on the select list
imageSelect.addEventListener('change', changeImage);

// Initialize the select list options
addList();
