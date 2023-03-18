function nameCreator() {
  let output = document.getElementById("output");

  let petName = document.getElementById("petName").value;
  let homeTown = document.getElementById("homeTown").value;
  let favoriteFlower = document.getElementById("favoriteFlower").value;

	if (!petName || !homeTown || !favoriteFlower) {
    return;
  }
	
  output.innerHTML = `Your band name is: ${petName + homeTown + favoriteFlower}`;
}


