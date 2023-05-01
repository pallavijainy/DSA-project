import React from "react";

const Card = () => {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to</p>

        <div className="container w-100">
          <select name="" className="m-2 h-100 w-100 bg-success">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select name="" className="m-2 h-100 w-100 bg-success rouded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>
        <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
