<script>
    import gridIcon from "$lib/icons/grid.svg";
    import rowsIcon from "$lib/icons/rows.svg";

    import Samples from "$lib/components/samples.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

    const tags = [ 'drums', 'leads', 'bass', 'pads', 'fx', 'all' ];

    /** @type Filter */
    let filter = undefined;
    let view = "grid";
</script>

<header class="header">
    <div class="filter">
        filter:
        <ul>
            {#each tags as tag}
                <li>
                    <button
                        class:selected={filter === tag}
                        on:click={() => {
                            filter = (filter === tag || tag === 'all') ? undefined : tag;
                        }}
                    >{tag}</button>
                </li>
            {/each}
        </ul>
    </div>

    <div class="view">
        <button
            on:click={() => view = 'grid'}
            class:buttonSelected={view === 'grid'}
        >
            <img src={gridIcon} alt='grid view'/>
        </button>

        <button
            on:click={() => view = 'table'}
            class:buttonSelected={view === 'table'}
        >
            <img src={rowsIcon} alt='table view'/>
        </button>
    </div>
</header>

<Samples samples={data.samples} {filter} {view} showDesc={true}/>

<style lang="postcss">
    .header {
        display: flex;
        justify-content: space-between;
    }

    .filter {
        display: flex;
        margin-bottom: 1.6em;
        font-size: 0.8em;

        ul {
            margin: -0.25em 0 0 0.5em;
            display: flex;
        }

        li {
            margin-right: 0.2em;
        }

        button {
            padding: 0.4em 0.4em 0.1em;
        }
    }

    .selected {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.2em;
        text-decoration: none !important;
    }

    .view {
        button {
            margin-left: 0.5em;
            height: 1.4em;
            width: 1.4em;
        }
    }

    .buttonSelected {
        opacity: 1;
    }

</style>