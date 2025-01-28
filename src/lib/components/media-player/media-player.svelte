<script>
    import PrevIcon from '$lib/icons/prev.svg?raw';
    import PlayIcon from '$lib/icons/play2.svg?raw';
    import NextIcon from '$lib/icons/next.svg?raw';
    import VolumeIcon from '$lib/icons/volume-high.svg?raw';
    import CloseIcon from '$lib/icons/close.svg?raw';
    import SoundcloudIcon from '$lib/icons/soundcloud.svg?raw';

    import Progress from './components/progress.svelte';
    import Details from './components/details.svelte';

    function prev() {
        console.log('prev');
    }

    function play() {
        console.log('play');
    }

    function next() {
        console.log('next');
    }

    function close() {
        console.log('close');
    }

    /**
     * Convert seconds to time format
     * @param {number} seconds
     * @returns {string} time format
     * @example toTime(65) // 1:05
     */
    function toTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60) || 0;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    let elapsed = 15;
    let duration = 61;
    let cover = 'https://placehold.co/150';
    let title = 'Dust Puddle - 2025 remaster';
    let artist = 'Kace';
    let soundcloud = 'https://soundcloud.com/kace-1';
</script>

<div class="wrapper">
    <div class="content">
        <button class="close" on:click={close}>
            {@html CloseIcon}
        </button>

        <div class="controls">
            <button class="prev" on:click={prev}>{@html PrevIcon}</button>
            <button class="play" on:click={play}>{@html PlayIcon}</button>
            <button class="next" on:click={next}>{@html NextIcon}</button>
        </div>

        <Progress elapsed={elapsed} duration={duration} />

        <div>
            <button class="volume">{@html VolumeIcon}</button>
        </div>

        <Details cover={cover} title={title} artist={artist} />

        <div>
            <a class="sc-link" href={soundcloud}>{@html SoundcloudIcon}</a>
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

    .content {
        position: relative;

        display: flex;
        justify-content: space-between;
        gap: 1.6em;

        width: 100%;
        max-width: var(--site-width);
    }

    .iconButton {
        display: flex;
        align-items: center;
        height: 100%;
        width: auto;
        padding: 0;

        background: none;
        border: none;
        color: white;
        font-size: 1.5em;

        :global(svg) {
            display: block;
            height: 1em;
            width: auto;
        }
    }

    .close {
        @extend .iconButton;

        display: none;

        position: absolute;
        bottom: 100%;
        right: 0;
        margin-bottom: 0.5em;

        opacity: 0.4;
        font-size: 0.8em;

    }

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

    .progress {
        flex-basis: 100%;
        display: flex;
    }

    .slider {
        position: relative;

        .slider-bar {

        }
    }

    .volume {
        @extend .iconButton;
    }

    .sc-link {
        @extend .iconButton;
    }
</style>
