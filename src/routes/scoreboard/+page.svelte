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
	import Scoreboard from "$lib/title/Scoreboard.png";
	import Prix from "$lib/title/Prix.png";
	import Logo from "../../images/logo.png";
	import Woody from "../../lib/images/woody.png";
</script>

<section>
	<img src={Scoreboard} class="title-toy title"/>

	<img src={Woody} alt="Woody" class="w-32 left-0" />
	{#await load_users()}
		<p>Chargement</p>
	{:then users}
		<!--<p>Chargement terminé</p>-->
		<div id="users-container" class="gold-border lg:w-3/5 md:w-3/4 text-white group relative w-full rounded-xl flex flex-col gap-2 p-8 bg-gradient-to-br from-sky-300 via-blue-400 to-teal-400 hover:bg-opacity-50 transition-opacity ">
		{#each users as user, index}
			{#if index == 0}
				<p class="absolute z-40 left-0 top-0 -translate-x-1/4 -translate-y-1/2 -rotate-12 group-hover:rotate-[-15deg] transition-transform shadow-lg border-yellow-500 border-2 bg-pastel-400 px-3 py-2 rounded-lg font-display text-sm text-yellow-600 font-bold">GouzyChampion</p>
			{/if}
			{#if index == 3}
				<div class="h-[3px] rounded-full w-3/4 mx-auto bg-yellow-500 my-4"></div>
			{/if}
			<div class="user flex gap-2 items-center relative rounded-3xl border-[3px]">
				<div class="user-name">
					<p><strong>{user.name}</strong></p>
				</div>


				<div class="flex gap-2 items-center">
					<span class="text-3xl text-white">{user.points}</span>
					<span class="user-points rounded-full flex items-center justify-center p-1 border-2 border-amber-400 bg-amber-400 shadow-[inset_2px_2px_2px_2px_rgba(0,0,0,0.2)] bg-amber-300">
						<img src={Logo} alt="Gouzy Coin" class="w-6"/>
					</span>
				</div>
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
	<img src={Prix} class="title-toy title"/>
	<div id="win-prices-container" class="gold-border lg:w-3/5 md:w-3/4 text-white group relative w-full rounded-xl flex flex-col gap-2 p-8 bg-gradient-to-br from-sky-300 via-blue-400 to-teal-400 hover:bg-opacity-50 transition-opacity ">
		<p>Seuls les meilleurs seront récompensés !</p>
	</div>
	<!--<h1>Prices</h1>
	<div class="win-prices-container">
		<ul class="win-prices-list">
			<li class="win-price-element"><p>1 sticker</p> <p class="points">10</p></li>
			<li class="win-price-element"><p>1 ecocup</p> <p class="points">100</p></li>
			<li class="win-price-element"><p>1 banane</p> <p class="points">1000</p></li>
		</ul>
	</div>-->
</section>

<style>
	.title {
		max-height: 100px;
		width: auto;
		object-fit: contain;
		max-width: 100%;
	}

    section {
        display: flex;
		flex-wrap: wrap;
        flex-direction: column;
        flex: 0.6;

    }

    p {
        color: var(--text-color);
    }


	.gold-border {
		border: 2px solid gold;
		box-shadow: 0 0 15px rgba(255, 223, 186, 0.5);
	}

	.center-align-flex-vertical{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
		#users-container {

			flex-direction: column;
			display: flex;
			max-width: 600px;
			min-width: min(calc(100vw - 64px), 600px);
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
			backdrop-filter: blur(10px);
			background-color: rgba(255, 255, 255, 0.5);
			border-radius: 12px;
		}
		#win-prices-container{
			display: flex;
			flex-direction: column;
			max-width: 600px;
			min-width: min(calc(100vw - 64px), 600px);
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
			backdrop-filter: blur(10px);
			background-color: rgba(255, 255, 255, 0.5);
			border-radius: 12px;
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

		/*
		.user-points::after, .points::after {
			background-image:url('../../../src/images/logo.png');
			background-size: 20px 20px;
			display: inline-block;
			width: 20px;
			height: 20px;
			content:"";
			vertical-align: center;
			transform: translateY(3px) translateX(3px);
		}*/

		.user:nth-of-type(1) {
			background: linear-gradient(to bottom right, #fef08a, #fde047, #fbbf24);
			border: 2px solid #f59e0b;
		}
		.user:nth-of-type(2) {
			  background: linear-gradient(to bottom right, #e2e8f0, #d6d3d1, #d1d5db);
			  border: 2px solid #e2e8f0;
		}
		.user:nth-of-type(3) {
			  background-image: linear-gradient(to bottom right, #fbbf24, #f59e0b, #fbbf24);
			  border: 2px solid #fbbf24;
		}
		.user:not(:first-of-type):not(:nth-of-type(2)):not(:nth-of-type(3)) {
			background: transparent;
			border: none;
		}
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

		.user{
			counter-increment: div;
		}
		#users-container .user:not(:first-of-type):not(:nth-of-type(2)):not(:nth-of-type(3)) .user-name p::before {
			background: transparent;
			border: none;
			content: counter(div);
			font-family: 'Sigmar One', sans-serif;
			font-weight: bold;
			font-size: 1.5em;
			color: var(--color-primary);
			position: absolute;
			text-align: center;
			top: 10px;
			align-items: center;
			transform: translateX(-50%);
			left: 27px;

		}

		#users-container .user:not(:first-of-type):not(:nth-of-type(2)):not(:nth-of-type(3)) .user-name p {
			margin-left: 40px;
			vertical-align: center;


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

		.title-toy {
			display: inline-block;
			justify-content: center;
			align-items: center;
			padding: 50px 10px 10px;
		}
</style>
