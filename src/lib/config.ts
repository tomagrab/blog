import { dev } from "$app/environment";

export const title = "Shakespeare";
export const description = "A simple blog";
export const url = dev
  ? "http://localhost:5173/"
  : "https://shakespeare-blog.netlify.com";
