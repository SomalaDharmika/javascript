async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const users = await response.json();

    // Display the data in the HTML
    const usersDiv = document.getElementById("users");
    usersDiv.innerHTML = ""; // Clear previous content, if any

    users.forEach((user) => {
      const userElement = document.createElement("p");
      userElement.textContent = `${user.name} (${user.email})`;
      usersDiv.appendChild(userElement);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Call the function to fetch and display data
getData();
