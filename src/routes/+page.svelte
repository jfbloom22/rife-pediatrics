<script>
      import { Content, isPreviewing } from '@builder.io/sdk-svelte';
    // Add your Public API Key
  const BUILDER_PUBLIC_API_KEY = '0c7e64220f9d4dbaa783aead6a51be4b';
  export let data;

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if data.content || isPreviewing()}
<!-- Render builder content with all required props -->
<Content
  model="page"
  content={data.content}
  apiKey={BUILDER_PUBLIC_API_KEY}
/>
{:else}
<p>Loading...</p>
{/if}
