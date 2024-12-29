import React, { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };
  function getData() {
    fetch(`https://676925c5cbf3d7cefd39c25e.mockapi.io/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setloading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Atom
          color="#3135cc"
          size="large"
          text="loading..."
          textColor="#NaNNaNNaN"
        />
      ) : (
        <>
          <input
            type="text"
            placeholder="Search..."
            style={{ margin: "2rem" }}
            value={search}
            onChange={handleSearch}
          />
          <select
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
              switch (e.target.value) {
                case "A-Z":
                  setproducts(
                    products.toSorted((a, b) =>
                      a.title.toLowerCase() > b.title.toLowerCase()
                        ? 1
                        : b.title.toLowerCase() > a.title.toLowerCase()
                        ? -1
                        : 0
                    )
                  );
                  break;
                case "Z-A":
                  setproducts(
                    products.toSorted((a, b) =>
                      a.title.toLowerCase() < b.title.toLowerCase()
                        ? 1
                        : b.title.toLowerCase() < a.title.toLowerCase()
                        ? -1
                        : 0
                    )
                  );
                  break;
                case "+":
                  setproducts(
                    products.toSorted((a, b) =>
                      a.price > b.price ? 1 : b.price > a.price ? -1 : 0
                    )
                  );
                  break;
                case "-":
                  setproducts(
                    products.toSorted((a, b) =>
                      a.price < b.price ? 1 : b.price < a.price ? -1 : 0
                    )
                  );
                  break;

                default:
                  break;
              }
            }}
          >
            <option value="Sort">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="+">Increase</option>
            <option value="-">Decrease</option>
          </select>
          <div className="card-body row">
            {products
              .filter(
                (x) =>
                  x.title.toLowerCase().includes(search.toLowerCase()) ||
                  x.description.toLowerCase().includes(search.toLowerCase())
              )
              .map((x) => (
                <div
                  style={{ border: "1px solid black" }}
                  className="col-4"
                  key={x.id}
                >
                  <div>Title: {x.title}</div>
                  <div>Description: {x.description}</div>
                  <div>Category: {x.category}</div>
                  <div>Price: {x.price}</div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
