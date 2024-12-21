const urlProfileFetcher = 'http://localhost:3001/api/v1/user/profile';

async function getUserProfile(token) {
  const response = await fetch(urlProfileFetcher, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        "Une erreur est survenue. Veuillez réessayer."
      );
    }
  });
  return response;
}

export { getUserProfile };
