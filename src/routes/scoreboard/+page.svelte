<svelte:head>
	<title>Scoreboard</title>
	<meta name="description" content="Scoreboard" />
</svelte:head>

<script>



	import welcomeFallback from '$lib/images/svelte-welcome.png';
	const endpoint = "https://raw.githubusercontent.com/7xtoy/data/refs/heads/main/scoreboard.json";

	async function load_users() {
		const response = await fetch(endpoint)
		const data = await response.json();
		return data.scoreboard;
	}
</script>

<section>
{#await load_users()}
	<p>Chargement</p>
{:then users}
	<p>Chargement terminé</p>
	{#each users as user}
		<div>
			<p>Hello : {user.name} : {user.points}</p>
		</div>
	{:else}
		<div>
			<p>No users</p>
		</div>
	{/each}
{:catch error}
	<p>Erreur : {error.message}</p>
{/await}
<img src={welcomeFallback} alt="Welcome" />
<div>
	<ul>
		<li>1000 GP: 1 ecocup</li>
		<li>1001 GP: 14 ecocup</li>
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

    h1 {
        width: 100%;
    }
    p {
        color: var(--color-primary);
    }
</style>