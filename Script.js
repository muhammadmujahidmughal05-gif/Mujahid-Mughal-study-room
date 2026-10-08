function openChat() {
  document.getElementById("chat").style.display = "flex";
}

function closeChat() {
  document.getElementById("chat").style.display = "none";
}

function joinRoom() {
  document.getElementById("voice").style.display = "flex";
}

function closeVoice() {
  document.getElementById("voice").style.display = "none";
}

function showLogin() {
  document.getElementById("login").style.display = "flex";
}

function closeLogin() {
  document.getElementById("login").style.display = "none";
}

function sendMessage() {
  const input = document.getElementById("msg");

  if (!input.value.trim()) return;

  const message = document.createElement("p");
  message.innerHTML = "<b>You:</b> " + input.value;

  document.getElementById("messages").appendChild(message);
  input.value = "";
}

function toggleMic() {
  const button = document.getElementById("micBtn");

  if (button.textContent === "Mute Microphone") {
    button.textContent = "Unmute Microphone";
  } else {
    button.textContent = "Mute Microphone";
  }
}

function askAI() {
  const question = document.getElementById("question").value.trim();
  const answer = document.getElementById("answer");

  if (!question) {
    answer.textContent = "Please write a question first.";
    return;
  }

  answer.textContent =
    "Demo AI: Your question was received. Real AI can be connected later.";
}

window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
