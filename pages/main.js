import { useEffect, useState } from "react/cjs/react.development";
import Space from "../components/Space";
import { useUser } from "@auth0/nextjs-auth0";

function main({ image }) {
  const { user, isLoading, error } = useUser();
  // ALL OF STATES
  const [mars, setMars] = useState([]);
  const [sol, setSol] = useState(0);
  const [cam, setCam] = useState("fhaz");

  //FIRST USEFFECT ON THE FIRST RENDER ONLY TO GET DATA
  //SET THIS TO CHANGE ON SOL AND CAM CHANGES
  useEffect(() => {
    async function fetchData() {
      let key = "9Fs2nzbGy82s0IhVPyZe1smMVBlaTIyBppKkCbFS";
      const res1 = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=1&camera=${cam}&api_key=${key}`
      );

      const data = await res1.json();

      const allPhotos = data.photos.map((e) => e.img_src);

      const fourPhotos = allPhotos.slice(0, 4);

      setMars(fourPhotos);
    }
    fetchData();
  }, [sol, cam]);

  const solSub = async (event) => {
    event.preventDefault();
    setSol(event.target.sol.value);
  };
  const handleChange = async (event) => {
    event.preventDefault();
    setCam(event.target.value);
  };

  //DISPLAY ON MAIN PAGE
  return (
    //PIC O THE DAY
    //INPUTS
    //P TAGS
    //MAP THROUGHT PICS
    <div>
      {user ? (
        <div>
          <Space image={image} />
          <div className="rovers">
            <h1>curiosity rover camera</h1>
            <p>
              cursiosity is a rover sent by nasa to mars, choose a number which
              is called sol, and sol is the number of days curiosity has been on
              mars .
            </p>
            <p id="note">
              (please note that on some sol you may not find pictures and that
              is because the cameras dont work all the time)
            </p>
            <form onSubmit={solSub} className="input-form">
              <input id="sol" name="sol" type="number"></input>
              <button type="submit">enter</button>
            </form>

            <div className="cams">
              <p>
                cursiosity also has more than one camera ,choose the camera:
              </p>
              <select value={cam} onChange={handleChange}>
                <option value="fhaz">fhaz</option>
                <option value="rhaz">rhaz</option>
                <option value="mast">mast</option>
                <option value="chemcam">chemcam</option>
                <option value="mahli">mahli</option>
                <option value="mardi">mardi</option>
                <option value="navcam">navcam</option>
                <option value="pancam">pancam</option>
                <option value="minites">minites</option>
              </select>
            </div>

            <div className="photos">
              {mars.map((e) => (
                <img key={e} className="photo" src={e} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <a href="/api/auth/login" className="a">
          <h1>please log in first to access this page</h1>
          <li className="item">login</li>
        </a>
      )}
    </div>
  );
}

// GET IMG OF DAY

export async function getServerSideProps() {
  let key = "9Fs2nzbGy82s0IhVPyZe1smMVBlaTIyBppKkCbFS";

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
