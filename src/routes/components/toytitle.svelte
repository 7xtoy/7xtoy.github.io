<script>
    // get title agument of <ToyTitle title="THIS">
    let trend = [-2,-4,-6,4,9,-9,-9,-8,2,1,-3,-4,-9,3,8,-7,-9,-6,-4,-6,-4,-10,4,2,-4,7,-7,10,-5,-10];
    // "group-hover:text-toy-red-400 transition-colors"
    let props = $props();
    let title = props.title;

</script>

<div class="flex flex-wrap font-display text-border text-pastel-400 group">
    {#if title}
        {#each title.split("") as character, index}
            <span
                key={index}
                class= "block tracking-[-0.1em] toy-title-font text-border text-pastel-400 group"
                style={
                    {
                        rotate: `${trend[index > trend.length ? index - trend.length : index]}deg`,
                        transition: `${200 + 50 * index}ms`
                    }
                }
            >
                    {character === " " ? "\u00A0\u00A0" : character}
                </span>
        {/each}
    {:else}
        <p>no title</p>
    {/if}
</div>

<style>
    toy-title-font {
        font-size: 2.5rem;
        font-family: 'Sigmar One', sans serif;
    }
</style>

