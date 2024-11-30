<script lang="ts">
	import Time from 'svelte-time';
	import Icon from '@iconify/svelte';


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
		<!-- <p>Chargement terminé</p> -->

		<div id="posts-container">
		{#each posts as post}
				<div class="post">
					<img src={post.icon_who} alt="image of the post" class="post-image-who"/>
					<div class="post-content">
						<p class="post-name">{post.name}</p>
						<div class="post-infos">
							<p>{post.who}</p>
							<p>-</p>
							<Time timestamp={post.when.start} format="DD/MM HH:MM"/>
							<p>-</p>
							<div class="post-infos-location">
								<Icon icon="material-symbols-light:location-on-outline" /> <p>{post.place}</p>
							</div>
						</div>
						<p class="post-description">{post.description}</p>
					</div>
				</div>
		{:else}
			<div>
				<p>No Posts</p>
			</div>
		{/each}
		</div>
	{:catch error}
		<div>
			<p>Erreur : {error.message}</p>
		</div>
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
			color: black;
	}
	.icon {
		width: 6px;
		height: 6px;
	}

	#posts-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 700px;
		padding: 40px;
	}


	.post {
		border: 1px solid black;
		border-radius: 10px;
		margin: 10px;
		padding: 10px;
		width: 100%;
		display: flex;
		gap: 10px;
		flex-direction: row;
		background-color: var(--color-primary);
	}

	.post-name {
		font-size: 1.2em;
		font-weight: bolder;
	}
	.post-infos {
		font-size: 0.8em;
			display: flex;
			flex-direction: row;
			gap: 10px;
	}
	.post-infos-location {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.post-image-who{
		width: 32px;
		height: 32px;
		object-fit: cover;
		border: 1px solid black;
		border-radius: 50%;
	}
</style>