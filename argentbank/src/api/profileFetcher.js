import axios from "axios";

const urlProfileFetcher = 'http://localhost:3001/api/v1/user/profile';

export const getUserprofile = async (token) => {
  try {
    const response = await axios.post(
      urlProfileFetcher,
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


