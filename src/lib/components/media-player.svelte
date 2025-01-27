<script>
    import prevIcon from '$lib/icons/prev.svg?raw';
    import playIcon from '$lib/icons/play2.svg?raw';
    import nextIcon from '$lib/icons/next.svg?raw';
    import volumeIcon from '$lib/icons/volume-high.svg?raw';

    function prev() {
        console.log('prev');
    }

    function play() {
        console.log('play');
    }

    function next() {
        console.log('next');
    }

    let elapsed = '0:00';
    let duration = '0:00';
    let cover = 'https://via.placeholder.com/150';
    let title = 'Title';
    let artist = 'Artist';

</script>

<div class="wrapper">
    <div class="content">
        <div class="controls">
            <button class="prev" on:click={prev}>{@html prevIcon}</button>
            <button class="play" on:click={play}>{@html playIcon}</button>
            <button class="next" on:click={next}>{@html nextIcon}</button>
        </div>

        <div class="progress">
            <div class="elapsed">{elapsed}</div>
            <div class="slider">
                <button></button>
            </div>
            <div class="duration">{duration}</div>
        </div>

        <div>
            <button class="volume">{@html volumeIcon}</button>
        </div>

        <div class="currently-playing">
            <img src={cover} alt="cover" />
            <div class="title">{title}</div>
            <div class="artist">{artist}</div>
            <a href="#sclink" class="sc-link">Soundcloud</a>
        </div>
    </div>
</div>

<style lang="postcss">
    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background: black;
        border-top: solid 1px #999;
    }

    .iconButton {
        display: block;
        width: 1em;
        height: 1em;
        padding: 0;

        background: none;
        border: none;
        color: white;
        font-size: 1.5em;

        :global(svg) {
            height: 100%;
            width: auto;
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: var(--site-width);
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .prev,
    .play,
    .next {
        @extend .iconButton;

    }

    .progress {
        flex-basis: 100%;
        display: flex;
    }

    .slider {
        flex-basis: 100%;
    }

    .volume {
        @extend .iconButton;
    }

</style>