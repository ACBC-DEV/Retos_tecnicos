"use client";
import { getGifs } from "@/services/gifs";
import { useState } from "react";
import { Data } from "@/services";

export default function Home() {
  let [dataGifs, setDataGifs] = useState<Data[]>([]);
  const [textInput, setTextInput] = useState("");
  const handleSearch = async (event: string) => {
    try {
      const info = await getGifs(event);
      setDataGifs(info);
      // console.log(data);
    } catch (error) {
      console.error("Error al obtener los gifs page: ", error);
    }
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(textInput);
    // console.log("made");
    // console.log(dataGifs);s
  };
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dataGifs = [];
    setTextInput(event.target.value);
  };
  // console.log(dataGifs.map((i) => i.images.original.url));
  return (
    <div className="min-h-screen p-24 ">
      <section className="grid place-content-center">
        <h1 className="text-5xl font-bold">Gif Finder</h1>
      </section>
      <section>
        <form onSubmit={onSubmit} className="grid mt-10 place-content-center">
          <input
            type="text"
            className="max-w-screen-lg p-4 mb-10 min-w-min dark:text-black rounded-3xl"
            placeholder="Find Your Gif"
            value={textInput}
            onChange={onchange}
          />
        </form>
      </section>
      <section className="grid place-content-center">
        <div className="flex flex-wrap gap-4 place-content-center">
          {dataGifs.map((i) => (
            <img
              src={i.images.original.url}
              alt={i.alt_text}
              className="w-32 border-2 border-white rounded-2xl h-28 min-w-fit"
              key={i.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
