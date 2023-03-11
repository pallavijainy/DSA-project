const form = document.querySelector("#leaveForm");
const uniqueIdInput = document.querySelector("#uniqueId");
const nameInput = document.querySelector("#name");
const reasonInput = document.querySelector("#reason");
const startDateInput = document.querySelector("#startDate");
const endDateInput = document.querySelector("#endDate");
const overseerInput = document.querySelector("#overseer");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validate form data
  const uniqueId = uniqueIdInput.value;
  const name = nameInput.value;
  const reason = reasonInput.value;
  const designation = document.querySelector(
    'input[name="designation"]:checked'
  ).value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const overseer = overseerInput.value;

  // store form data in LocalStorage
  localStorage.setItem(
    uniqueId,
    JSON.stringify({
      uniqueId,
      name,
      reason,
      designation,
      startDate,
      endDate,
      overseer,
      otp: Math.floor(Math.random() * 9000) + 1000, // generate random 4-digit OTP
    })
  );
});
