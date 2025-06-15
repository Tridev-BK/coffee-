document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const name = document.getElementById("name").value;
  const coffee = document.getElementById("coffee").value;
  const size = document.getElementById("size").value;
  const quantity = parseInt(document.getElementById("quantity").value);


  const priceChart = {
    Espresso: { Small: 150, Medium: 180, Large: 230 },
    Latte: { Small: 179, Medium: 199, Large: 279 },
    Cappuccino: { Small: 149, Medium: 199, Large: 249 },
    Americano: { Small: 179, Medium: 189, Large: 269 }
  };


  const unitPrice = priceChart[coffee][size];
  const total = (unitPrice * quantity).toFixed(2);

  function playMusic() {
  const music = document.getElementById("bg-music");
  music.play().catch((error) => {
    console.error("Autoplay failed:", error);
  });
}

function pauseMusic() {
  const music = document.getElementById("bg-music");
  music.pause();
}


  alert(
    `Thank you, ${name}!\n\nYou ordered ${quantity} ${size} ${coffee}(s).\nUnit Price: $${unitPrice}\nTotal Cost: $${total}`
  );

  this.reset();
});
