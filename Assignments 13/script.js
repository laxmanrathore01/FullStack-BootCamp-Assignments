const data = [
  {
    name: "Laxman Singh", roll: "2201010116", program: "B. Tech CSE", mobile: "9354100642", valid: "2026/06/01"
  },
  {
    name: "Aman Verma", roll: "2201010133", program: "B. Tech CSE", mobile: "9876543210", valid: "2026/06/01"
  },
  {
    name: "Priya Mehta", roll: "2201010134", program: "B. Tech CSE", mobile: "9988776655", valid: "2026/06/01"
  },
  {
    name: "Rahul Singh", roll: "2201010135", program: "B. Tech IT", mobile: "9123456780", valid: "2026/06/01"
  },
  {
    name: "Anjali Gupta", roll: "2201010136", program: "B. Tech CSE", mobile: "9876501234", valid: "2026/06/01"
  },
  {
    name: "Rohit Yadav", roll: "2201010137", program: "B. Tech ME", mobile: "9900112233", valid: "2026/06/01"
  },
  {
    name: "Sneha Rani", roll: "2201010138", program: "B. Tech ECE", mobile: "9321456789", valid: "2026/06/01"
  },
  {
    name: "Nikhil Bansal", roll: "2201010139", program: "B. Tech CSE", mobile: "9753100246", valid: "2026/06/01"
  },
  {
    name: "Riya Kapoor", roll: "2201010140", program: "B. Tech CSE", mobile: "9823412345", valid: "2026/06/01"
  },
  {
    name: "Deepak Rawat", roll: "2201010141", program: "B. Tech Civil", mobile: "9012345678", valid: "2026/06/01"
  }
];

// Generate random photo URL
function getDummyPhoto(index) {
  return `https://i.pravatar.cc/80?img=${index + 1}`;
}

const container = document.getElementById("cardContainer");

data.forEach((student, index) => {
  const card = `
    <div class="id-card">
      <div class="header">
        K.R. MANGALAM <span class="university">UNIVERSITY</span><br />
        <small>THE COMPLETE WORLD OF EDUCATION</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div>
            <strong>Name:</strong> ${student.name}<br />
            <strong>Roll No:</strong> ${student.roll}<br />
            <strong>Program:</strong> ${student.program}<br />
            <strong>Mobile:</strong> ${student.mobile}
          </div>
          <img class="photo" src="${getDummyPhoto(index)}" alt="photo" />
        </div>
        <div class="card-footer">
          Valid Upto: ${student.valid}
        </div>
      </div>
    </div>
  `;
  container.innerHTML += card;
});