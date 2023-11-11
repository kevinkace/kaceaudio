<script>
    export let src = "", autoplay = true, scale = 1;

    const style = {
        zoom  : scale,
        width : `${100 / scale}%`
    };
</script>

<audio controls controlsList="nodownload noplaybackrate" class="player" autoPlay={autoplay} style:zoom={style.zoom} style:width={style.width}>
    <source {src} type='audio/mpeg' />
</audio>

<style lang="postcss">
    .player {
        height: 2em;
        filter: invert(1);
        max-width: 100%;

        &:focus {
            outline: none;
        }
    }
</style>
