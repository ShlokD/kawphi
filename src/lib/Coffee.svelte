<script>
let selectedIngredients = []
  let coffees = [{
    name: "Americano",
    ingredients: ["Water", "Coffee"]
  }, {
    name: "Corretto",
    ingredients: ["Brandy", "Coffee"]
  },
  {
    name: "Espresso",
    ingredients: ["Coffee"]
  },
  {
    name: "EspressoRomano",
    title: "Espresso Romano",
    ingredients: ["Lemon", "Coffee"]
  },{
    name: "Galao",
    ingredients: ["Foam", "Milk", "Milk", "Coffee"]
  },{
    name: "Latte",
    ingredients: ["Foam", "Milk", "Coffee"]
  },{
    name: "Lungo",
    ingredients: ["Coffee", "Coffee"]
  },{
    name: "Macchiato",
    ingredients: ["Foam", "Coffee"]
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
<img alt={coffee.title || coffee.name} src={`/src/assets/icons/${coffee.name}.svg`} />
</button>
<p class="f4 f2-ns">{coffee.title || coffee.name}</p>
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
