2. Here's an example of JavaScript validation that requires the user to enter some text before submitting a form

<form onsubmit="return validate()">
  <label for="my-input">Enter some text:</label>
  <input type="text" id="my-input" name="my-input">
  <button type="submit">Submit</button>
</form>
<script>
  function validate() {
    const input = document.getElementById('my-input');
    if (input.value === '') {
      alert('Please enter some text');
      return false;
    }
    return true;
  }
</script>
