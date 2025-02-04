<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import CloseIcon  from '$lib/icons/close.svg?raw';

    import Progress from './components/progress.svelte';
    import Details  from './components/details.svelte';

    import { links } from '$lib/data/common.js';

    import { getQueue } from './queue.svelte.js';
    import Volume from './components/volume.svelte';
    import Controls from './components/controls.svelte';

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
    <div class="wrapper" transition:fly={{ y : 30, duration : 250}}>
        <div class="content">
            <button class="close" onclick={close}>
                {@html CloseIcon}
            </button>

            <Controls/>

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
    @import './components/iconButton.css';

    @custom-media --mq-fixed screen and (min-width: var(--layout-width));

    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        background: black;
        border-top: solid 1px #999;
    }

    .content {
        position: relative;

        display: flex;
        justify-content: space-between;
        gap: 1.6em;

        max-width: var(--layout-width);

        margin: 0 auto;
        padding: 0 var(--layout-padding);
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
