<script lang="ts">
  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  Count: {count}
</button>
