<script lang="ts">
  import * as config from "$lib/config";
  import { formatDate } from "$lib/utils";
  import type { PageData } from "./$types";
  import { page } from "$app/stores";

  console.log($page.url.pathname);

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.description} />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hgroup>
    <h1>{data.meta.title}</h1>
    <p>Published at {formatDate(data.meta.date)}</p>
  </hgroup>

  <div class="tags">
    {#each data.meta.categories as category}
      <a class="surface-4" href="/categories/{category}">
        &num;{category}
      </a>
    {/each}
  </div>

  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    max-inline-size: var(--size-content-3);
    margin-inline: auto;
  }

  h1 {
    text-transform: capitalize;
  }

  h1 + p {
    margin-top: var(--size-2);
    color: var(--text-2);
  }

  .tags {
    display: flex;
    gap: var(--size-3);
    margin-top: var(--size-7);
  }

  .tags > * {
    padding: var(--size-2) var(--size-3);
    border-radius: var(--radius-round);
  }
</style>
