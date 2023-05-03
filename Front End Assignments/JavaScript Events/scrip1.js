1.Here's an example of adding an event listener to a button that displays the current date and time when clicked

<button id="my-button">Click me!</button>
<script>
  const button = document.getElementById('my-button');
  button.addEventListener('click', () => {
    const now = new Date();
    console.log(now.toLocaleString());
    alert(now.toLocaleString());
  });
</script>
