const API: string =
  "https://api.giphy.com/v1/gifs/search?api_key=T9AenuYrqjaUGpETgo00dysUD13jpU6I";
export const endPoint = {
  api_key: API,
};

export interface Data {
  id: string;
  url: string;
  slug: string;
  title: string;
  alt_text: string;
  images: {
    original: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
      frames: string;
      hash: string;
    };
    // You can add other image properties if needed (e.g., fixed_height, fixed_width, etc.)
  };
}
