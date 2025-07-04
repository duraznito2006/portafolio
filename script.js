const button = document.getElementById("sendButton");

async function sendMessage() {
  const message = document.getElementById("message").value;
  const responseDiv = document.getElementById("response");

  const apiKey = "AIzaSyA3iY1en5cyZ-qfzzD4t4Y7sYIG4pDmkaw";
  const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;

  const data = {
    contents: [
      {
        parts: [{ text: message }]
      }
    ]
  };

  try {
    const apiResponse = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!apiResponse.ok) {
      throw new Error (`Error en la solicitud: ${apiResponse.statusText}`);
    }

    const responseData = await apiResponse.json();
    const texto = responseData.candidates[0].content.parts[0].text;

    responseDiv.innerHTML = texto;
  } catch (error) {
    console.error("Hubo un error:", error);
    responseDiv.innerHTML = "Hubo un error al procesar la solicitud.";
  }
}

button.addEventListener("click", sendMessage);  