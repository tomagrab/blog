<script lang="ts">
  import * as config from "$lib/config";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.category}</title>
  <meta property="og:title" content={data.category} />
</svelte:head>

<article>
  <hgroup>
    <h1>{data.category}</h1>
  </hgroup>
</article>
