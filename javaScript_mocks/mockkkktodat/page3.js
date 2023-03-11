// Retrieve data from LocalStorage
const leaveRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

// Helper function to calculate the number of days between two dates
function calculateDays(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
  return diffDays + 1; // Include both start and end dates
}

// Generate rows for the table
const statusTable = document.getElementById("status-table");
const tbody = statusTable.getElementsByTagName("tbody")[0];
for (let i = 0; i < leaveRequests.length; i++) {
  const request = leaveRequests[i];
  const row = document.createElement("tr");
  row.innerHTML = `
		<td>${request.id}</td>
		<td>${request.name}</td>
		<td>${calculateDays(
      new Date(request.startDate),
      new Date(request.endDate)
    )}</td>
		<td>${request.overseer}</td>
		<td>${request.status}</td>
	`;
  tbody.appendChild(row);
}

// Filter data by status
const statusFilter = document.getElementById("status-filter");
statusFilter.addEventListener("change", () => {
  const selectedStatus = statusFilter.value;
  let filteredData = [];
  if (selectedStatus === "all") {
    filteredData = leaveData;
  } else {
    filteredData = leaveData.filter((data) => data.status === selectedStatus);
  }
  renderTable(filteredData);
});
