<script>
    import DownloadIcon from "$lib/icons/download.svg?raw";
    import PlayIcon     from "$lib/icons/play2.svg?raw";

    import { getQueue } from "./media-player/queue.svelte";

    export let title = "";
    export let preview = "";
    export let href = "";
    export let desc = "";
    export let showDesc = false;

    let queue = getQueue();
</script>

<h3>{title}</h3>

<div class="actions">
    <a href={href} class="action download">
        download
        {@html DownloadIcon}
    </a>

    <button
        class="action play"
        on:click={() => {
            queue.add({
                title,
                artist : "Kace",
                href   : preview
            });
        }}
    >
        listen
        {@html PlayIcon}
    </button>
</div>

{#if showDesc !== false}
    <p class="desc">{desc}</p>
{/if}

<style lang="postcss">
    .desc {
        font-size: 0.8em;
        margin: 0.6em 0 1em;
        opacity: 0.8;
    }

    .actions {
        font-size: 0.8em;
    }

    .action {
        position: relative;
        padding-right: 1em;
        margin-right: 1em;

        & :global(svg) {
            position: absolute;
            height: 0.7em;
            width: 0.7em;
            top: 0.6em;
            right: 0;

            opacity: 0.8;
        }
    }
</style>