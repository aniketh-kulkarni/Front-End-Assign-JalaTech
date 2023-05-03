3. Here's an example program for a counter that increments its value each time a button is clicked

<!DOCTYPE html>
<html>
<head>
	<title>Counter Example</title>
	<script>
		var count = 0;

		function incrementCount() {
			count++;
			document.getElementById("countDisplay").innerHTML = count;
		}
	</script>
</head>
<body>
	<p>Count: <span id="countDisplay">0</span></p>
	<button onclick="incrementCount()">Count</button>
</body>
</html>
