<script>
  import Coffee from "./lib/Coffee.svelte";
</script>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Smooch Sans", "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      --bg-color: #f8daba;
      --heading-color: #c69662;
      --water: #6cbfdc;
      --coffee: #8c4e2c;
      --chocolate: #5c230f;
      --lemon: #f5ff47;
      --brandy: #f70c0c;
      --milk: #ffebd6;
      --foam: #fcfcfc;

  }

  main {
    height: 100vh;
    width: 100vw;
    background-color: var(--bg-color);
    overflow-x: hidden
  }

  h1 {
    color: var(--heading-color)
  }

</style>

<main>
  <h1 class="ma0 pa2 tc f-headline">Kawphi</h1>
  <Coffee />
</main>
