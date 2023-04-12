const $photoURL = document.querySelector('#photourl');
const $img = document.querySelector('img');
$photoURL.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

const $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const entry = {
    title: $form.elements.title.value,
    photoURL: $form.elements.photourl.value,
    notes: $form.elements.notes.value
  };
  entry.entryID = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $img.setAttribute('src', '../images/placeholder-image-square.jpg');
  $form.reset();
});

function renderEntry(entry) {
  const li = document.createElement('li');
  li.setAttribute('class', 'column-half');
  const firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'column-half');
  li.appendChild(firstDiv);
  const img = document.createElement('img');
  img.setAttribute('class', 'image');
  img.setAttribute('src', entry.photoURL);
  firstDiv.appendChild(img);
  const secondDiv = document.createElement('div');
  secondDiv.setAttribute('class', 'column-half');
  li.appendChild(secondDiv);
  const h3 = document.createElement('h3');
  h3.createTextNode(entry.title);
  secondDiv.appendChild(h3);
  const p = document.createElement('p');
  p.createTextNode(entry.notes);
  secondDiv.appendChild(p);
  return li;
}

document.addEventListener('DOMContentLoaded', function (e) {
  const $ul = document.querySelector('ul');
  for (let i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
}
);
