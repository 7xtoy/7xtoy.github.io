
<script lang="ts">
	import '../app.css';
	import Header from './header/Header.svelte';
	let { children } = $props();

</script>

<div id="layout">
    <div id="background"> </div>

    <Header/>

    <div id="page-container" class="w-full flex flex-col items-center py-10 md:px-0 px-4">
        {@render children()}
    </div>
</div>

<style>
	#layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: max(100vh, 100%);
    }

    /*
    #page-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 20px;
    }*/
    #background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('$lib/images/background.png');
        background-repeat: repeat;
        background-size: 400px;
        z-index: -1;
    }
</style>