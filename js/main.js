const $photoURL = document.querySelector('#photourl');
const $img = document.querySelector('img');
$photoURL.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});
