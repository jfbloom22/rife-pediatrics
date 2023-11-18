
// src/routes/+page.server.js
import { fetchOneEntry } from '@builder.io/sdk-svelte';

export async function load({ page }) {
  if (!page) {
    page = []; // Set a default value if page is not provided
  }

  const urlPath = `/${page.join('/')}`;

  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: '0c7e64220f9d4dbaa783aead6a51be4b',
    userAttributes: {
      urlPath,
    },
  });

  // return content from `fetchOneEntry()`
  return {
    props: {
      content,
    },
  };
}