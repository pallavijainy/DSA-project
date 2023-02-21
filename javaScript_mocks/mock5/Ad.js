// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const brand = document.getElementById("brand").value;
  const transmission = document.getElementById("transmission").value;
  const year = document.getElementById("year").value;
  const kmDriven = document.getElementById("km").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image-url").value;
  // Create new ad object
  const ad = {
    brand,
    transmission,
    year,
    kmDriven,
    description,
    price,
    image,
  };

  // Add ad object to JSON server using fetch API
  fetch("http://localhost:3000/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Reset form after successful submission
      document.getElementById("car-ad-form").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Add event listener to form submission
document.getElementById("car-ad-form").addEventListener("submit", handleSubmit);
