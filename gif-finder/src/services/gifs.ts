import axios from "axios";
import { Data, endPoint } from ".";

export const getGifs = async (search: string): Promise<Data[]> => {
  try {
    const response = await axios.get(endPoint.api_key, {
      params: {
        q: search,
        limit: 45,
      },
    });

    return response.data.data; // Assuming the data property of the response contains an array of gifs
  } catch (error) {
    // Handle errors here, e.g., log the error or throw a custom error
    console.error("Error fetching gifs:", error);
    throw error;
  }
};
