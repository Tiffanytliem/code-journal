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

// function renderEntry (entry);
