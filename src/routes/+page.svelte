<script lang="ts">
	import Time from 'svelte-time';
	import Icon from '@iconify/svelte';
	import moment from 'moment';
	import ToyTitle from './components/toytitle.svelte';
	import Scoreboard from "$lib/images/BouttonScoreBoard.png";
	import Calendrier from "$lib/title/Calendrier de l’avent.png";
	import Evenements from "$lib/title/Les évènements.png";
	import Woody from "$lib/images/woody.png";


	const endpoint = "https://raw.githubusercontent.com/7xtoy/data/refs/heads/main/cal.json";
	const endpoint_advent = "https://raw.githubusercontent.com/7xtoy/data/refs/heads/main/advent.json";

  async function load_posts() {
    const response = await fetch(endpoint)
    const data = await response.json();
		return data.events;
  }
  async function load_advent() {
	const response = await fetch(endpoint_advent)
	const data = await response.json();
	if (data.advent == null) {
		return null;
	}
	if(data.advent.day != moment().get('date')) {
		return null;
	}
	return data.advent;
  }

</script>

<section class="w-full">
	{#await load_advent()}
		<p>Chargement</p>
	{:then advent}

			{#if advent != null}
				<img src={Calendrier} class="title-advent title"/>
				<div id="advents-container"> <!-- lg:w-3/5 md:w-3/4 text-white group relative w-full border-4 rounded-xl border-gold-400 flex flex-col gap-2 p-8 bg-gradient-to-br from-sky-300 via-blue-400 to-teal-400 hover:bg-opacity-50 transition-opacity ">-->
					<img id="woody-img" src={Woody} alt="Woody" class="w-32 left-0" />
					<div class="advent gold-border group">
						{#if advent.icon_who}
							<img src={advent.icon_who} alt="image of the advent" class="advent-image-who"/>
						{/if}
						<div class="advent-content">
							<p class="advent-name">{advent.name}</p>
							<div class="advent-infos">
								{#if advent.who}
									<p>{advent.who}</p>
									{#if (advent.when.start && advent.when.end) || advent.place}
										<p>-</p>
									{/if}
								{/if}
								{#if advent.when.start && advent.when.end}
									<p>{advent.when.start} {advent.when.end}</p>
									{#if advent.place}
										<p>-</p>
									{/if}
								{/if}
								{#if advent.place}
									<div class="advent-infos-location">
										<Icon icon="material-symbols-light:location-on-outline" /> <p>{advent.place}</p>
									</div>
								{/if}
							</div>
							<p class="advent-description">{advent.description}</p>
						</div>

						<div id="current-day" class= "absolute right-0 top-0 md:translate-x-1/3 -translate-x-[10%] -translate-y-1/2 md:rotate-12 md:group-hover:rotate-[15deg] transition-transform shadow-lg bg-pastel-400 px-3 py-2 rounded-lg font-display">{`Jour ${advent.day}`}</div>
					</div>

				</div>
			{/if}
	{:catch error}
		<div>
			<p>Erreur : {error.message}</p>
		</div>
	{/await}

	{#await load_posts()}
		<p>Chargement</p>
	{:then posts}
		<!-- <p>Chargement terminé</p> -->

		<img src={Evenements} class="title-Cal w-600 title"/>
		<div id="posts-container">

			{#each posts as post}
					<div class="post gold-border lg:w-3/5 md:w-3/4 text-white group relative w-full rounded-xl flex flex-col gap-2 p-8 bg-gradient-to-br from-sky-300 via-blue-400 to-teal-400 hover:bg-opacity-50 transition-opacity ">
						{#if post.icon_who}
							<img src={post.icon_who} alt="image of the post" class="post-image-who gold-border">
						{/if}
						<div class="post-content">
							<p class="post-name">{post.name}</p>
							<div class="post-infos">
								{#if post.who}
									<p>{post.who}</p>
									{#if (post.when.start && post.when.end) || post.place}
										<p>-</p>
									{/if}
								{/if}
								{#if post.when.start && post.when.end}
									<p><Time timestamp={post.when.start} format="DD/MM HH:MM"/> - <Time timestamp={post.when.end} format="DD/MM HH:MM"/></p>
									{#if post.place}
										<p>-</p>
									{/if}
								{/if}
								{#if post.place}
									<div class="post-infos-location">
										<Icon icon="material-symbols-light:location-on-outline" /> <p>{post.place}</p>
									</div>
								{/if}
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

	.title {
		object-fit: contain;
		max-height: 100px;
		width: auto;
		max-width: 100%;
		display: inline-block;
		justify-content: center;
		align-items: center;
		padding: 50px 10px 10px;
	}

	section {
		display: flex;
		flex-direction: column;
		flex: 0.6;
		align-items: center;
	}

	h1 {
		width: 100%;
	}
	p {
			color: black;
	}


.advent-image-who {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border: 2px solid gold;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 223, 186, 0.5);
}




	#posts-container {
		display: flex;
		flex-direction: column;
	}

	#advents-container{
		display: flex;
		flex-direction: column;


	}

	.advent * {
		color: white;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
	}

	.gold-border {
		border: 2px solid gold;
		box-shadow: 0 0 15px rgba(255, 223, 186, 0.5);
	}

	.advent {

		margin-bottom: 10px;
		padding: 10px;
		width: 100%;
		display: flex;
		gap: 10px;
		flex-direction: row;

		max-width: 600px;
		min-width: min(calc(100vw - 64px), 600px);
		backdrop-filter: blur(10px);
		background-image: url("$lib/images/noel_bg.jpg");
		border-radius: 12px;
	}

	.advent-name {
		font-size: 1.5em;
		font-weight: bolder;
		color: white;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
	}

	.advent-infos {
		font-size: 0.9em;
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.advent-infos-location {
		display: flex;
		flex-direction: row;
		align-items: center;
	}







	.post {
		margin-bottom: 10px;
		padding: 10px;
		width: 100%;
		display: flex;
		gap: 10px;
		flex-direction: row;

		max-width: 600px;
		min-width: min(calc(100vw - 64px), 600px);
		backdrop-filter: blur(10px);
		border-radius: 12px;
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
		width: 64px;
		height: 64px;
		object-fit: cover;
		border-radius: 50%;
	}


</style>