<script lang="ts">
	const endpoint = "https://raw.githubusercontent.com/7xtoy/data/refs/heads/main/cal.json";

  async function load_posts() {
    const response = await fetch(endpoint)
    const data = await response.json();
		return data.events;
  }
</script>

<section>
	{#await load_posts()}
		<p>Chargement</p>
	{:then posts}
		<p>Chargement terminé</p>
		{#each posts as post}
			<div>
				<p>Hello : {post.name} : {post.place} : {post.who} : {post.description} : <img src={post.icon_who} alt="image of the post" style="height: 40px"/></p>
			</div>
		{:else}
			<div>
				<p>No Posts</p>
			</div>
		{/each}
	{:catch error}
		<p>Erreur : {error.message}</p>
	{/await}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
	p {
			color: var(--color-primary);
	}
</style>