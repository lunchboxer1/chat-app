const socket = io();

// socket.on('countUpdated', (count) => {
//   console.log('The count has been updated!', count);
// });

// document.querySelector('#increment').addEventListener('click', () => {
//   console.log('Clicked');
//   socket.emit('increment');
// });

socket.on('message', (msg) => {
  console.log(msg);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = e.target.elements.message.value;
  // console.log(e)
  socket.emit('sendMessage', msg);
})

