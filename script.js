const button = document.getElementById("sendButton");

async function sendMessage() {
    const message = document.getElementById ("message").value;
    const responseDiv = document. getElementById("response");

    const apiKey = "AIzaSyA3iY1en5cyZ-qfzzD4t4Y7sYIG4pDmkaw";
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;


}