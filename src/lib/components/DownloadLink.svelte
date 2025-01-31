<script>
    import DownloadIcon from '$lib/icons/download.svg?raw';

    let { song } = $props();
</script>

<a href={song.href}>
    {@html DownloadIcon}
    mp3 ({song.bitrate})
</a>

<style>
    a {
        display: inline-flex;
        align-items: center;
        gap: 0.1em;

        & :global(svg) {
            margin-top: -0.3em;
            height: 1.2em;
            opacity: 0.7;
        }
    }
</style>