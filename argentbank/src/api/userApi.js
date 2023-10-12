import axios from "axios";

const urlUserProfile = 'http://localhost:3001/api/user/profile';

export const userProfileInfo = async (isLogging) => {
  try {
    const response = await axios.post(
      urlUserProfile,
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${isLogging}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


