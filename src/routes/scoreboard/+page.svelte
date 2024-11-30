<svelte:head>
	<title>Scoreboard</title>
	<meta name="description" content="Scoreboard" />
</svelte:head>

<script>
	const endpoint = "https://raw.githubusercontent.com/7xtoy/data/refs/heads/main/scoreboard.json";

	async function load_users() {
		const response = await fetch(endpoint)
		const data = await response.json();
		return data.scoreboard;
	}
</script>

<section>
	<h1>Scoreboard</h1>
	{#await load_users()}
		<p>Chargement</p>
	{:then users}
		<!--<p>Chargement terminé</p>-->
		<div id="users-container">
		{#each users as user}
			<div class="user">
				<div class="user-name">
					<p>{user.name}</p>
				</div>
				<p class="user-points">{user.points}</p>
			</div>
		{:else}
			<div>
				<p>No one play, be the first ONE</p>
			</div>
		{/each}
		</div>
	{:catch error}
		<p>Erreur : {error.message}</p>
	{/await}
	<h1>Prices</h1>
<div class="win-prices-container">
	<ul class="win-prices-list">
		<li class="win-price-element"><p>1 sticker</p> <p class="points">10</p></li>
		<li class="win-price-element"><p>1 ecocup</p> <p class="points">100</p></li>
		<li class="win-price-element"><p>1 banane</p> <p class="points">1000</p></li>
	</ul>
</div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    p {
        color: var(--text-color);
    }
		#users-container {
			display: flex;
			flex-direction: column;
			max-width: 600px;
			min-width: min(calc(100vw - 64px), 600px);
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
		}
		.user {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 10px;
			border-bottom: 1px solid var(--color-primary);
		}

		.user-points::after, .points::after {
			background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMIkRzGYv2LXKx83GNexCKIHXidY54AtXpw&s');
			background-size: 20px 20px;
			display: inline-block;
			width: 20px;
			height: 20px;
			content:"";
			vertical-align: center;
			transform: translateY(3px) translateX(3px);
		}

    /* Thx chat gpt */
		#users-container .user:first-of-type .user-name p::before {
			content: "🥇 "; /* Contenu que vous voulez afficher avant */
			color: gold;   /* Optionnel : couleur ou style spécifique */
			font-weight: bold; /* Optionnel : styliser le contenu */
		}
				#users-container .user:nth-of-type(2) .user-name p::before {
			content: "🥈 ";
			color: blue;
			font-weight: bold;
		}

		#users-container .user:nth-of-type(3) .user-name p::before {
			content: "🥉 ";
			color: green;
			font-weight: bold;
		}
		#users-container .user:not(:first-of-type):not(:nth-of-type(2)):not(:nth-of-type(3)) .user-name p::before {
			content: "• ";
			color: gray;
			font-style: italic;
		}

		.win-prices-container {
			display: flex;
			flex-direction: column;
			max-width: 600px;
			min-width: min(calc(100vw - 64px), 600px);
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
		}
		.win-prices-list {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 10px;
		}
		.win-price-element {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 10px;
			border-bottom: 1px solid var(--color-primary);
		}

</style>
