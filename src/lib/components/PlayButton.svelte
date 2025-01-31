<script>
    import { getQueue } from "./media-player/queue.svelte";

    import PlayIcon from '$lib/icons/play2.svg?raw';

    let queue = getQueue();

    let { song } = $props();
</script>

<button on:click|preventDefault={() => { queue.add(song); }}>
    {@html PlayIcon}
</button>
