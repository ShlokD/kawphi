<script>
import Americano from "../../src/assets/icons/Americano.svg";
import Corretto from "../../src/assets/icons/Corretto.svg";
import Espresso from "../../src/assets/icons/Espresso.svg";
import EspressoRomano from "../../src/assets/icons/EspressoRomano.svg";
import Galao from "../../src/assets/icons/Galao.svg";
import Latte from "../../src/assets/icons/Latte.svg";
import Lungo from "../../src/assets/icons/Lungo.svg";
import Macchiato from "../../src/assets/icons/Macchiato.svg";


let selectedIngredients = []
  let coffees = [{
    name: "Americano",
    ingredients: ["Water", "Coffee"],
    image: Americano
  }, {
    name: "Corretto",
    ingredients: ["Brandy", "Coffee"],
    image: Corretto
  },
  {
    name: "Espresso",
    ingredients: ["Coffee"],
    image: Espresso
  },
  {
    name: "Espresso Romano",
    ingredients: ["Lemon", "Coffee"],
    image: EspressoRomano
  },{
    name: "Galao",
    ingredients: ["Foam", "Milk", "Milk", "Coffee"],
    image: Galao
  },{
    name: "Latte",
    ingredients: ["Foam", "Milk", "Coffee"],
    image: Latte
  },{
    name: "Lungo",
    ingredients: ["Coffee", "Coffee"],
    image: Lungo
  },{
    name: "Macchiato",
    ingredients: ["Foam", "Coffee"],
    image: Macchiato
  },
  ];

  const handleClick = selectedCoffee => {
    selectedIngredients = selectedCoffee.ingredients || []
  }
  
</script>

<ul class="pl0 pt2 w-100 list flex flex-column items-center justify-center">
{#each selectedIngredients as ingredient}
<li class={`w-80 f4 tc bw1 b--black b--solid pa3 ${ingredient.toLowerCase()}`}>{ingredient}</li>
{/each}
</ul>

<div class="flex flex-wrap ma2 pa3">
{#each coffees as coffee}
<div class="w-50 w-25-ns tc pa2">
<button class="bw0 bg-transparent" on:click={() => handleClick(coffee)}>
<img alt={coffee.name} src={coffee.image} />
</button>
<p class="f4 f2-ns">{coffee.name}</p>
</div>
{/each}
</div>

<style>

  .water {
    background-color: var(--water);
    color: white;
  }

  .coffee {
    background-color: var(--coffee);
        color: white;
  }

  .chocolate {
    background-color: var(--chocolate);
        color: white;
  }

  .brandy {
    background-color: var(--brandy);
    color: white;
  }

  .lemon {
    background-color: var(--lemon);
    color: black;
  }

  .foam {
    background-color: var(--foam);
    color: black;
  }

  .milk {
    background-color: var(--milk);
    color: black;
  }
  

</style>
