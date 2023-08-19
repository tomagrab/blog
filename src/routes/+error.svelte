<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="error">
  <h1>{$page.status}: {$page.error?.message}</h1>
  <p>Sorry, there was a problem loading the page.</p>
</div>

<style>
  .error {
    height: 100%;
    display: grid;
    place-content: center;
  }

  .error > * {
    text-align: center;
  }

  .error h1 {
    color: brown;
  }

  .error p {
    color: #999;
  }
</style>
