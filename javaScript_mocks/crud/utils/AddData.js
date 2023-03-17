//add data


export function AddtoWish(data) {
    fetch("https://revision3.onrender.com/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("added to wishlist");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  }
  