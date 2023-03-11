const leaveForm = document.getElementById("leave-form");

// Set min attribute for date inputs to prevent selecting past dates
const today = new Date().toISOString().split("T")[0];
