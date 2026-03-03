document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginData = {
    identifier: document.getElementById("identifier").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();
    alert(data.message);

  } catch (error) {
    console.error(error);
  }
});