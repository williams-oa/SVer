// apiService.js
const baseUrl = 'http://127.0.0.1:3000/api/v1';

export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed. Please check your credentials.');
  }

  return response.json();
};
