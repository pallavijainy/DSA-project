import getData from "./GetData.js";

function showEditModal(ad) {
    const modal = document.createElement("div");
    modal.className = "modal";
  
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
  
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    modalContent.appendChild(titleLabel);
  
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = ad.description;
    modalContent.appendChild(titleInput);
  
    const priceLabel = document.createElement("label");
    priceLabel.textContent = "Price:";
    modalContent.appendChild(priceLabel);
  
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.value = ad.price;
    modalContent.appendChild(priceInput);
  
    const submitButton = document.createElement("button");
    submitButton.textContent = "Save";
    submitButton.addEventListener("click", () => {
      ad.description = titleInput.value;
      ad.price = Number(priceInput.value);
      updateAd(ad);
      closeModal(modal);
    });
    modalContent.appendChild(submitButton);
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => closeModal(modal));
    modalContent.appendChild(cancelButton);
  
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }
  let filter = "";
  let sort = "";
  let order =""
  function updateAd(ad) {
    fetch(`https://revision3.onrender.com/mobile/${ad.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ad),
    })
      .then(() => {
        getData(sort, order, filter);
      })
      .catch((error) => console.error(error));
  }
  
  function closeModal(modal) {
    modal.remove();
  }

  export default showEditModal;