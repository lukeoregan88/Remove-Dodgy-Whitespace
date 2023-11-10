document.body.innerText = document.body.innerText.replace(/\x03/g, function(c) { return '\\x' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); });
