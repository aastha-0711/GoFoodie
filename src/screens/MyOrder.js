import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState(null);

  const fetchMyOrder = async () => {
    const response = await fetch("http://localhost:5000/api/auth/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    });

    const data = await response.json();
    setOrderData(data.orderData); // set only the actual orderData object
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {orderData && orderData.order_data ? (
            orderData.order_data
              .slice()
              .reverse()
              .map((orderGroup, index) => (
                <div key={index}>
                  <div className="m-auto mt-5 text-white text-center">
                    <hr />
                    <strong>Order Date: </strong>
                    {orderGroup[0].Order_date || orderGroup[1]}
                    <hr />
                  </div>
                  <div className="row">
                    {orderGroup
                      .filter((item) => !item.Order_date)
                      .map((item, idx) => (
                        <div className="col-12 col-md-6 col-lg-3" key={idx}>
                          <div
                            className="card mt-3"
                            style={{
                              width: "16rem",
                              maxHeight: "360px",
                            }}
                          >
                            <img
                              src={item.img}
                              className="card-img-top"
                              alt="..."
                              style={{
                                height: "120px",
                                objectFit: "fill",
                              }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <div className="container w-100 p-0">
                                <span className="m-1">{item.qty}</span>
                                <span className="m-1">{item.size}</span>
                                <div className="d-inline ms-2 h-100 w-20 fs-5">
                                  ₹{item.price}/-
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))
          ) : (
            <div className="text-white text-center">No orders found</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
