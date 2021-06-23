import { React } from "react";
import { Link } from "react-router-dom";

const slopes = [
  {
    id: 1,
    name: "Alpe De Huez",
    slopeElevation: "1124-3538 m",
    slopeLength: "250 km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 2,
    name: "Les Orres",
    slopeElevation: "1024-2838 m",
    slopeLength: "100km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 3,
    name: "Briancon-Serre",
    slopeElevation: "836-19768 m",
    slopeLength: "100km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 4,
    name: "Grand MAssif",
    slopeElevation: "1024-2838 m",
    slopeLength: "100km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 5,
    name: "Grand MAssif",
    slopeElevation: "1024-2838 m",
    slopeLength: "100km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 6,
    name: "Grand MAssif",
    slopeElevation: "1024-2838 m",
    slopeLength: "100km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 7,
    name: "Grand MAssif",
    slopeElevation: "1000-2436 m",
    slopeLength: "140km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 8,
    name: "Grand MAssif",
    slopeElevation: "824-2838 m",
    slopeLength: "100km",
    price: "50EUR",
    image: "hero"
  },
  {
    id: 9,
    name: "Grand Massif",
    slopeElevation: "6024-2838 m",
    slopeLength: "160km",
    price: "50EUR",
    image: "hero"
  }
];

console.log(slopes);

const CardListItem = (props) => {
  return (
    <li>
      <div className="card-container">
        <div className="card-background">
          <img
            className="card-image"
            src={"./assets/" + props.slope.image + ".jpg"}
            alt=""
          />
        </div>
        <div className="card-content">
          <button type="button" class="btn btn-danger">
            <Link to="/destination">Megnezem</Link>
          </button>
          <h1 className="card-place">
            <strong>{props.slope.name}</strong>
          </h1>
          <div className="card-details">
            <hr />
            <div className="details">
              <img src="./assets/simax_tile_magassag.svg" alt="" />
              <p>{props.slope.slopeElevation}</p>
            </div>
            <div className="details">
              <img src="./assets/simax_tile_magassag.svg" alt="" />
              <p>{props.slope.slopeLength}</p>
            </div>
            <hr />
          </div>
          <h1 className="card-price"> {props.slope.price}</h1>
        </div>
      </div>
    </li>
  );
};

const CardList = () => {
  return (
    <div className="x">
      <ul style={{ listStyleType: "none" }}>
        {slopes.map((slope) => {
          return <CardListItem slope={slope} key={slope.id} />;
        })}
      </ul>
    </div>
  );
};

export default function Card() {
  return (
    <main>
      <CardList />
    </main>
  );
}
