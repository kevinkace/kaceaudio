<script>
    import { getQueue } from '../queue.svelte.js';

    import PrevIcon   from '$lib/icons/prev.svg?raw';
    import PlayIcon   from '$lib/icons/play2.svg?raw';
    import PauseIcon  from '$lib/icons/pause.svg?raw';
    import NextIcon   from '$lib/icons/next.svg?raw';

    let queue = getQueue();
</script>

<div class="controls">
    <button class="prev" onclick={() => queue.prev()}>{@html PrevIcon}</button>
    <button class="play" onclick={() => queue.togglePlay()}>{@html queue.queue.playing ? PauseIcon : PlayIcon}</button>
    <button class="next" onclick={() => queue.next()}>{@html NextIcon}</button>
</div>

<style lang="postcss">
    @import '../../../../global.css';

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 0.2em;
    }

    .prev,
    .play,
    .next {
        @extend .iconButton;
    }
</style>