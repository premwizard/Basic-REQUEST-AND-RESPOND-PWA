function login() {
    const username = document.getElementById('name').value; // Get input value

    // Simulate sending a request to the server
    const serverResponse = mockServer(username); // Pass correct variable

    // Display server's response
    document.getElementById('response').innerText = serverResponse;
}

// Mock server function
function mockServer(username) {
    // Hardcoded "server" data
    const validUser = { name: "Hello" };

    if (username === validUser.name) {
        return "Hello, " + username + "! Welcome to our site.";
    } else {
        return "Login Failed. Please check your credentials.";
    }
}
