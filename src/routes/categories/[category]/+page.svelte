<script lang="ts">
  import * as config from "$lib/config";

  import type { PageData } from "./$types";

  export let data: PageData;

  // Function to check if Posts categories includes the current category
  const checkCategory = (post: any) => {
    return post.categories.includes(String(data.category));
  };

  console.log(data);
</script>

<svelte:head>
  <title>{data.category}</title>
  <meta property="og:title" content={data.category} />
</svelte:head>

<article>
  <hgroup>
    <h1>{data.category}</h1>
  </hgroup>
  {#each data.posts as post}
    {#if checkCategory(post)}
      <a href="/{post.slug}">
        <h2>{post.title}</h2>
      </a>
    {/if}
  {/each}
</article>
