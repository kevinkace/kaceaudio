<script>
    import { getQueue } from '../queue.svelte.js';

    import BandcampIcon   from '../images/bandcamp.svg?raw';
    import SoundcloudIcon from '../images/soundcloud.svg?raw';

    const queue = getQueue();

    let current = $derived(queue.queue.playlist[queue.queue.current]);

</script>


<div class="links">
    {#if current?.bandcamp}
        <a class="sc-link" href={current?.bandcamp}>{@html BandcampIcon}</a>
    {/if}
    {#if current?.soundcloud}
        <a class="sc-link" href={current?.soundcloud}>{@html SoundcloudIcon}</a>
    {/if}
</div>

<style>
    .links {
        display: flex;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }
</style>