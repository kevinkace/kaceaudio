<script>
    import { fly } from 'svelte/transition';

    import PrevIcon   from '$lib/icons/prev.svg?raw';
    import PlayIcon   from '$lib/icons/play2.svg?raw';
    import PauseIcon  from '$lib/icons/pause.svg?raw';
    import NextIcon   from '$lib/icons/next.svg?raw';
    import VolumeIcon from '$lib/icons/volume-high.svg?raw';
    import MuteIcon   from '$lib/icons/volume-mute.svg?raw';
    import CloseIcon  from '$lib/icons/close.svg?raw';

    import Progress from './components/progress.svelte';
    import Details  from './components/details.svelte';

    import { links } from '$lib/data/common.js';

    import { getQueue } from './queue.svelte.js';
    import Volume from './components/volume.svelte';

    const queue = getQueue();

    const debug = false;

    let current = $derived(queue.queue.playlist[queue.queue.current]);

    /** @type {HTMLAudioElement} */
    let audio;

    setTimeout(() => {
        queue.setAudioElement(audio);
    }, 100);

    function close() {
        console.log('close');
    }

    function onloadedmetadata() {
        queue.queue.duration = audio.duration;
    }

    function ontimeupdate() {
        queue.queue.currentTime = audio.currentTime;
        queue.queue.duration = audio.duration;

        if (!queue.queue.scrubbing) {
            queue.queue.progressTime = audio.currentTime;
        }
    }
</script>

{#if queue.queue.playlist.length}
    <div class="wrapper" transition:fly={{ y : 30, duration : 250}}>
        <div class="content">
            <button class="close" onclick={close}>
                {@html CloseIcon}
            </button>

            <div class="controls">
                <button class="prev" onclick={() => queue.prev()}>{@html PrevIcon}</button>
                <button class="play" onclick={() => queue.togglePlay()}>{@html queue.queue.playing ? PauseIcon : PlayIcon}</button>
                <button class="next" onclick={() => queue.next()}>{@html NextIcon}</button>
            </div>

            <Progress/>

            <Volume/>

            <Details/>

            <div>
                <a class="sc-link" href={current?.soundcloud || links.soundcloud.href}>{@html links.soundcloud.icon}</a>
            </div>

        </div>
    </div>
{/if}

<div class:debug={debug}>
    <audio
        bind:this={audio}
        {ontimeupdate}
        {onloadedmetadata}
        controls={debug}
        bind:muted={queue.queue.muted}
        src={current?.href}
    ></audio>

    {#if debug}
        <pre>
{JSON.stringify(queue, null, 2)}
        </pre>
    {/if}
</div>

<style lang="postcss">
    @import '../../../global.css';

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
    }

    .sc-link {
        @extend .iconButton;
    }
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
</style>
