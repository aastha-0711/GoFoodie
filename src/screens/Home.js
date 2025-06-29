import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState("");

  const loadFoodItems = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/auth/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response was successful (e.g., HTTP status 200)
      if (!response.ok) {
        console.error(
          "API Response Error:",
          response.status,
          response.statusText
        );
        // Optionally handle specific error statuses
        return; // Stop execution if response is not ok
      }

      let responseData = await response.json();

      // Crucial: Add checks for responseData[0] and responseData[1]
      // Ensure they are arrays before setting state
      if (Array.isArray(responseData[0]) && Array.isArray(responseData[1])) {
        setFoodItems(responseData[0]);
        setFoodCat(responseData[1]);
      } else {
        console.error("API returned data in unexpected format:", responseData);
        setFoodItems([]); // Ensure they are arrays even if backend sends bad data
        setFoodCat([]);
      }
    } catch (error) {
      console.error("Error fetching food data:", error);
      setFoodItems([]); // Set to empty arrays on any fetch error
      setFoodCat([]);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "9" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2 w-75 bg-white text-dark"
                  type="search"
                  placeholder="Search in here..."
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  className="btn text-white bg-danger"
                  onClick={() => {
                    setSearch("");
                  }}
                >
                  X
                </button>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://t4.ftcdn.net/jpg/09/09/00/73/360_F_909007300_vsCk5vSiim9vX2rJKgEfWB36rcOPJGrC.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {/* Changed from foodCat.length > 0 to foodCat && foodCat.length > 0 */}
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3" key={data.id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr
                id="hr-success"
                style={{
                  height: "4px",
                  backgroundImage:
                    "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))",
                }}
              />
              {/* Changed from foodItems.length > 0 to foodItems && foodItems.length > 0 */}
              {foodItems && foodItems.length > 0 ? (
                foodItems
                  .filter(
                    (items) =>
                      items.CategoryName === data.CategoryName &&
                      items.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filterItems) => (
                    <div
                      key={filterItems.id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Card
                        foodName={filterItems.name}
                        item={filterItems}
                        options={filterItems.options[0]}
                        ImgSrc={filterItems.img}
                      />
                    </div>
                  ))
              ) : (
                <div>No data available</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
