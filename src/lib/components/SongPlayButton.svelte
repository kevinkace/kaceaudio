<script>
    import { getQueue } from './media-player/queue.svelte';

    import PlayIcon  from '$lib/icons/play2.svg?raw';
    import PauseIcon from '$lib/icons/pause.svg?raw';
    import { find }  from '$lib/helpers/images';

    let queue = getQueue();

    let { children, song } = $props();

    let current = $derived(queue.queue.playlist[queue.queue.current] || {});
    let playing = $derived(current.href === song.href && queue.queue.playing);
</script>

<button onclick={() => {
    if (current.href === song.href) {
        queue.togglePlay();
    } else {
        queue.add({
            picture : find(song.cover),
            ...song
        });
    }
}} class:playing={playing}>
    {@html playing ? PauseIcon : PlayIcon}
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

            background: white;
            fill: #000;
        }

        &.playing > :global(svg) {
            filter: invert(1);
            outline: solid 2px #333;
            padding: 0.3em;
        }
    }
</style>