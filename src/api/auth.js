
const API_BASE_URL = "http://localhost:8085";

export async function loginUser(email, password) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.trim(),
      password: password,
    }),
  });

  const responseText = await response.text();
  let data;

  try {
    data = responseText ? JSON.parse(responseText) : {};
  } catch {
    data = { message: responseText };
  }

  if (!response.ok) {
    throw new Error(data.message || "Login failed. Check your credentials.");
  }

  if (data.flag === false) {
    throw new Error(data.message || "Invalid email or password.");
  }

  return data;
}
