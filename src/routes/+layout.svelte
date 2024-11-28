
<script lang="ts">
	import '../app.css';
	import Header from './header/Header.svelte';
	let { children } = $props();

</script>

<div id="layout">
<Header/>

{@render children()}
</div>

<style>
	#layout {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>