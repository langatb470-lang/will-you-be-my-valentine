<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Secure Login</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .card {
      background: white;
      padding: 30px;
      width: 320px;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
      text-align: center;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    button {
      width: 100%;
      padding: 10px;
      background: #007bff;
      border: none;
      border-radius: 6px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    .hidden {
      display: none;
    }
    #no {
      background: #ccc;
      position: relative;
    }
  </style>
</head>
<body>

<div class="card" id="loginBox">
  <h2>Account Login</h2>
  <input type="text" placeholder="Username" disabled>
  <input type="password" placeholder="Password" disabled>
  <button onclick="login()">Login</button>
</div>

<div class="card hidden" id="questionBox">
  <h2>Unexpected Error 💖</h2>
  <p>Before you continue…</p>
  <h3>Will you be my girlfriend? 😌</h3>
  <button onclick="yes()">YES 💕</button>
  <button id="no" onmouseover="moveNo()">NO 😅</button>
</div>

<script>
  function login() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("questionBox").classList.remove("hidden");
  }

  function yes() {
    document.body.innerHTML = `
      <h1 style="text-align:center;">
        LOGIN SUCCESSFUL 🥹💖<br><br>
        You’re officially my girlfriend 😌
      </h1>
    `;
  }

  function moveNo() {
    const btn = document.getElementById("no");
    btn.style.left = Math.random() * 100 + "px";
    btn.style.top = Math.random() * 50 + "px";
  }
</script>

</body>
</html>
