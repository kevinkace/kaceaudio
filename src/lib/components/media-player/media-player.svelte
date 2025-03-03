<script>
    import { onMount } from 'svelte';
    import { fly }     from 'svelte/transition';

    import { getQueue } from './queue.svelte.js';

    import Progress from './components/progress.svelte';
    import Details  from './components/details.svelte';
    import Volume   from './components/volume.svelte';
    import Controls from './components/controls.svelte';
    import Links    from './components/links.svelte';

    import CloseIcon  from './images/close.svg?raw';

    const queue = getQueue();

    const debug = false;

    let current = $derived(queue.queue.playlist[queue.queue.current]);

    /** @type {HTMLAudioElement} */
    let audio;

    onMount(() => {
        queue.setAudioElement(audio);
    });

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
    <div
        class="media-player"
        transition:fly={{ y : 30, duration : 250}}
        style={`--ratio:${queue.queue.progressTime / queue.queue.duration}`}
    >
        <div class="content">
            <button class="close" onclick={close}>
                {@html CloseIcon}
            </button>

            <Controls/>

            <Progress/>

            <Volume/>

            <Details/>

            <Links/>

        </div>
    </div>
{/if}

<div class:debug={debug}>
    <audio
        bind:this={audio}
        {ontimeupdate}
        {onloadedmetadata}
        controls={debug}
        volume={queue.queue.volume}
        muted={queue.queue.muted}
        src={current?.href}
    ></audio>

    {#if debug}
        <pre>
{JSON.stringify(queue, null, 2)}
        </pre>
    {/if}
</div>

<style lang="postcss">
    @custom-media --mq-split screen and (min-width: 600px);
    @custom-media --mq-mid   screen and (min-width: 800px);

    @import './components/iconButton.css';

    .media-player {
        --bar-height: 0.3rem;
        --thumb-height: 1rem;
        --radius: calc(var(--bar-height) / 2);
        --thumb-ring: 0.125rem;
        --thumb-offset: 0.2rem;

        --color-progress-elapsed: #fff;
        --color-progress-remaining: #fff4;
        --color-thumb: #fff;

        --progress-bg: linear-gradient(
                to right,
                var(--color-progress-elapsed) 0%,
                var(--color-progress-elapsed) calc(var(--ratio) * 100%),
                var(--color-progress-remaining) calc(var(--ratio) * 100%),
                var(--color-progress-remaining) 100%
            );

        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        background: black;

        @media (--mq-split) {
            border-top: solid 1px #999;
        }
    }

    .content {
        position: relative;

        display: flex;
        justify-content: space-between;
        gap: 1.6em;

        max-width: var(--layout-width);

        margin: 0 auto;
        padding: 0 var(--layout-padding);

        &:before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 100%;
            left: 0;
            height: var(--bar-height);

            background: var(--progress-bg);


            @media (--mq-split) {
                content: none;
            }
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

    .links {
        display: none;

        @media (--mq-mid) {
            display: unset;
        }
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
