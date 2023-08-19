import type { Post } from "$lib/types";

export async function load({url, fetch}) {
    const response = await fetch('/api/posts');
    const posts: Post[] = await response.json();


    return {
        posts: posts,
        url: url.pathname
    }
}

