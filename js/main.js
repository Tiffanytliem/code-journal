function viewSwap(viewName) {
  const $view = document.querySelector('[data-view=' + viewName + ']');
  $view.className = 'view';
  data.view = viewName;
  if (viewName === 'entry-form') {
    document.querySelector('[data-view="entries"]').className = 'view hidden';
  } else {
    document.querySelector('[data-view="entry-form"]').className = 'view hidden';
  }
}

const $h6 = document.querySelector('.h6');
$h6.addEventListener('click', function (e) {
  if (e.target.matches('.entries')) {
    viewSwap('entries');
  } else if (e.target.matches('.entry-form')) {
    viewSwap('entry-form');
  }
});

const $newButton = document.querySelector('#new');
$newButton.addEventListener('click', function (e) {
  if (e.target.matches('.entries')) {
    viewSwap('entries');
  } else if (e.target.matches('.entry-form')) {
    viewSwap('entry-form');
  }
});

function toggleNoEntries(boolean) {
  const $ul = document.querySelector('ul');
  const $noEntries = document.querySelector('.no-entries');
  if (boolean === true) {
    $ul.className = 'container hidden';
    $noEntries.className = 'no-entries';
  } else {
    $ul.className = 'container';
    $noEntries.className = 'no-entries hidden';
  }
}

function renderEntry(entry) {
  const li = document.createElement('li');
  li.setAttribute('class', 'row');
  li.setAttribute('data-entry-id', entry.entryID);
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
  const h3Text = document.createTextNode(entry.title);
  h3.appendChild(h3Text);
  secondDiv.appendChild(h3);
  const pencilIcon = document.createElement('i');
  pencilIcon.setAttribute('class', 'fa-solid fa-pencil fa-xl');
  pencilIcon.setAttribute('style', 'color: #562b81;');
  secondDiv.appendChild(pencilIcon);
  const p = document.createElement('p');
  const pText = document.createTextNode(entry.notes);
  p.appendChild(pText);
  secondDiv.appendChild(p);
  const br = document.createElement('br');
  secondDiv.appendChild(br);
  secondDiv.appendChild(br);
  return li;
}

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
  const $ul = document.querySelector('ul');
  $ul.prepend(renderEntry(entry));
  viewSwap('entries');
  toggleNoEntries(false);
});

document.addEventListener('DOMContentLoaded', function (e) {
  const $ul = document.querySelector('ul');
  for (let i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
  viewSwap('entries');
  if (data.entries.length === 0) {
    toggleNoEntries(true);
  } else {
    toggleNoEntries(false);
  }
}
);
