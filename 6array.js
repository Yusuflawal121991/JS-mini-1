// Initialize an empty array
let array = [];

// Function to display the array elements
function displayArray() {
    const arrayContainer = document.getElementById('arrayElements');
    arrayContainer.innerHTML = ' first on list       ';       // Clear previous elements

    array.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.textContent = `Element ${index + 1}: ${element}`;
        arrayContainer.appendChild(elementDiv);
    });

     // Debugging log
    console.log("Current array contents:", array);
}






// Function to add an element to the end of the array
function addElement() {
    const elementInput = document.getElementById('elementInput').value.trim();
    if (elementInput !== '') {
        array.push(elementInput);
        input.value = ''; // Clear the input box
        displayArray();
    } else {
        alert('Please enter a valid element.');
    }
}

function removeElement(type) {
    if (array.length === 0) {
        alert('Array is empty. No elements to remove.');
        return;
    }

    switch (type) {
        case 'first':
            array.shift();
            break;
        case 'last':
            array.pop();
            break;
         default:
                alert('Invalid removal type.');
}   
    displayArray();
}


// 
function addElement() {
  const input = document.getElementById('elementInput');
  const value = input.value.trim();
  if (value !== '') {
    array.push(value);
    input.value = ''; // clear the box
    displayArray();
  } else {
    alert('Please enter a valid element.');
  }
}