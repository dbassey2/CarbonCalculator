function changeBackgroundColor(divId) {
  console.log(`Changing background color of ${divId}`);
  const div = document.getElementById(divId);
  if (div) {
    if (div.style.backgroundColor === 'green') {
      div.style.backgroundColor = 'white';
      console.log(`Background color of ${divId} changed to white`);
    } else {
      div.style.backgroundColor = 'green';
      console.log(`Background color of ${divId} changed to green`);
    }
  } else {
    console.log(`Element with id ${divId} not found`);
  }
}

function submit() {}