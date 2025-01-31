<script>
    import { getQueue } from "../queue.svelte.js";

    let title = 'Title';
    let artist = 'Artist';
    let cover = 'https://via.placeholder.com/150';
    let soundcloud = 'https://soundcloud.com/kace-1';

    let queue = getQueue();

    let src = $derived(queue.queue.playlist[queue.queue.current]?.cover || cover);
</script>

<div class="currently-playing">
    <img {src} alt="cover" class="cover"/>

    <div class="content">
        <div class="artist">{queue.queue.playlist[queue.queue.current]?.artist}</div>
        <div class="title">{queue.queue.playlist[queue.queue.current]?.title}</div>
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

    .sc-link {
        grid-area: sc-link;
    }
</style>