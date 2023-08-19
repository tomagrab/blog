<script lang="ts">
  import * as config from "$lib/config";
  import type { PageData } from "../posts/$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{config.title}</title>
  <meta property="og:title" content={config.title} />
</svelte:head>

<article>
  <hgroup>
    <h1>aye yo what's poppin'</h1>
  </hgroup>
  <p>
    my name is tommy. tommyforyourmommy. i'm a pretty chill guy that thinks not
    capitalizing letters is cool.
  </p>
</article>
