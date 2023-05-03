4. Here's an example of a program that sets a cookie, gets a cookie, and checks a cookie

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function checkCookie(name) {
  const value = getCookie(name);
  if (value) {
    alert(`${name}=${value}`);
  } else {
    const newValue = prompt(`Please enter a value for ${name}:`);
    if (newValue != null && newValue !== '') {
      setCookie(name, newValue, 30);
    }
  }
}

// Usage example:
setCookie('username', 'john', 30);
checkCookie('username');
