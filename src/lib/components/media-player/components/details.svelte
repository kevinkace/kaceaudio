<script>
    import { getQueue } from "../queue.svelte.js";

    let queue = getQueue();

    let current = $derived(queue.queue.playlist[queue.queue.current]);
</script>

<div class="currently-playing">
    <img src={current?.cover || 'https://picsum.photos/200'} alt="cover" class="cover"/>

    <div class="content">
        <div class="artist">{current?.artist || 'Artist'}</div>
        <div class="title">{current?.title || 'Title'}</div>
    </div>

</div>

<style type="postcss">
    .currently-playing {
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: center;

        padding: 0.7em 0;
    }

    .cover {
        display: block;
        grid-area: image;

        height: 3em;
        aspect-ratio: 1;
    }

    .content {
        flex: 1;
        width: 16em;

        line-height: 1.2;
    }

    .title {
        font-size: 0.9em;
        font-weight: bold;
    }

    .artist {
        font-size: 0.9em;
        opacity: 0.8;
    }
</style>