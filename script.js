const note = document.getElementById('note');
const cross = document.getElementById('cross');

cross.addEventListener('click', function() {
  note.style.display = 'none';
});