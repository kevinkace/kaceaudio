<script>
    import SoundcloudIcon from "$lib/icons/soundcloud.svg?raw";

    export let title = 'Title';
    export let artist = 'Artist';
    export let cover = 'https://via.placeholder.com/150';
    export let soundcloud = 'https://soundcloud.com/kace-1';
</script>

<div class="currently-playing">
    <img src={cover} alt="cover" class="cover"/>

    <div class="content">
        <div class="artist">{artist}</div>
        <div class="title">{title}</div>
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