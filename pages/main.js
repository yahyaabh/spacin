import { useEffect, useState } from "react/cjs/react.development";
import Space from "../components/Space";

function Main({ image }) {
  const [mars, setMars] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let key = "9Fs2nzbGy82s0IhVPyZe1smMVBlaTIyBppKkCbFS";
      const res1 = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=911&camera=fhaz&api_key=${key}`
      );

      const data = await res1.json();
      setMars(data.photos.map((e) => e.img_src));
    }
    fetchData();
  }, []);
  //try new here
  return (
    <div>
      <Space image={image} mars={mars} />
    </div>
  );
}

export async function getServerSideProps() {
  //api key
  let key = "9Fs2nzbGy82s0IhVPyZe1smMVBlaTIyBppKkCbFS";
  //get image of the day
  const res0 = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}`
  );
  const image = await res0.json();

  return {
    props: {
      image,
    },
  };
}

export default main;
