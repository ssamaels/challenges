console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    console.log(data.count);
    console.log(data.results);

    const r2d2 = data.results.find((character) => character.name === "R2-D2");
    console.log("R2D2 Eye color: ", r2d2.eye_color);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();
