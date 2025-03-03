<script>
    import { getQueue } from "../queue.svelte.js";

    let queue = getQueue();

    let current = $derived(queue.queue.playlist[queue.queue.current]);
</script>

<div class="currently-playing">
    <enhanced:img src={current?.picture} alt="cover" class="cover"/>

    <div class="content">
        <div class="artist">{current?.artist || 'Artist'}</div>
        <div class="title">{current?.title || 'Title'}</div>
    </div>

</div>

<style type="postcss">
    @custom-media --mq-split screen and (min-width: 600px);
    @custom-media --mq-mid   screen and (min-width: 800px);

    .currently-playing {
        flex: 1;
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: center;

        padding: 0.7em 0;
    }

    .cover {
        grid-area: image;

        height: 3em;
        width: 3em;

        border: solid 1px #fff4;
    }

    .content {
        flex: 1;

        line-height: 1.2;

        @media (--mq-split) {
            width: 16em;
        }
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
