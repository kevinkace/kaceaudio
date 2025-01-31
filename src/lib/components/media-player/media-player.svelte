<script>
    import PrevIcon from '$lib/icons/prev.svg?raw';
    import PlayIcon from '$lib/icons/play2.svg?raw';
    import PauseIcon from '$lib/icons/pause.svg?raw';
    import NextIcon from '$lib/icons/next.svg?raw';
    import VolumeIcon from '$lib/icons/volume-high.svg?raw';
    import CloseIcon from '$lib/icons/close.svg?raw';
    import SoundcloudIcon from '$lib/icons/soundcloud.svg?raw';

    import Progress from './components/progress.svelte';
    import Details from './components/details.svelte';

    import { getQueue } from './queue.svelte.js';

    const queue = getQueue();

    const debug = false;

    let elapsed = $state(0);
    let duration = $state(0);

    /** @type {HTMLAudioElement} */
    let audio;

    setTimeout(() => {
        queue.setAudioElement(audio);
    }, 1000);

    function close() {
        console.log('close');
    }

    function onloadedmetadata() {
        duration = audio.duration;
    }

    function ontimeupdate() {
        elapsed = audio.currentTime;
        duration = audio.duration;
    }
</script>

<div class="wrapper" class:wrapperShow={queue.queue.playlist.length}>
    <div class="content">
        <button class="close" onclick={close}>
            {@html CloseIcon}
        </button>

        <div class="controls">
            <button class="prev" onclick={queue.prev}>{@html PrevIcon}</button>
            <button class="play" onclick={queue.togglePlay}>{@html queue.queue.playing ? PauseIcon : PlayIcon}</button>
            <button class="next" onclick={queue.next}>{@html NextIcon}</button>
        </div>

        <Progress {elapsed} {duration} />

        <div>
            <button class="volume">{@html VolumeIcon}</button>
        </div>

        <Details/>

        <div>
            <a class="sc-link" href={queue.queue.playlist[queue.queue.current]?.soundcloud}>{@html SoundcloudIcon}</a>
        </div>

    </div>
</div>

<div class:debug={debug}>
    <audio
        bind:this={audio}
        {ontimeupdate}
        {onloadedmetadata}
        onload={() => console.log("test")}
        controls={debug}
        src={queue.queue.playlist[queue.queue.current]?.href}
    ></audio>

    {#if debug}
        <pre>
{JSON.stringify(queue, null, 2)}
{queue.queue.playlist[queue.queue.current]?.href}
        </pre>
    {/if}
</div>

<style lang="postcss">

    .debug {
        position: fixed;
        top: 10px;
        left: 10px;
        background: #000b;
        border: solid 1px #fffb;
        z-index: 1000;

        audio {
            display: block;
        }

        pre {
            font-family: monospace;
            font-size: 0.8em;
        }
    }

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

        transform: translateY(100%);
        transition: transform 200ms;

        &.wrapperShow {
            transform: translateY(0);
        }
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

        & :global(svg) {
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
