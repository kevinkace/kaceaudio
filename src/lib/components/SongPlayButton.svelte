<script>
    import { getQueue } from './media-player/queue.svelte';

    import PlayIcon from '$lib/icons/play2.svg?raw';

    let queue = getQueue();

    let { children, song } = $props();
</script>

<button onclick={() => queue.add(song)}>
    {@html PlayIcon}
    <div>
        {@render children?.()}
    </div>
</button>

<style lang="postcss">
    button {
        display: inline-flex;
        align-items: center;
        gap: 0.6em;

        &:hover {
            text-decoration: none;
        }

        & > :global(svg) {
            height: 1.4em;
            width: 1.4em;
            padding: 0.1em 0.1em 0.1em 0.3em;
            border-radius: 50%;
            /* border: solid 1px white; */
            background: black;
            filter: invert(1);
        }
    }
</style>