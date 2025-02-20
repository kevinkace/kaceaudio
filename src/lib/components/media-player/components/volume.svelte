<script>
    import { fly } from 'svelte/transition';

    import MuteIcon         from '$lib/icons/volume-mute.svg?raw';
    import VolumeLowIcon    from '$lib/icons/volume-low.svg?raw';
    import VolumeMediumIcon from '$lib/icons/volume-medium.svg?raw';
    import VolumeHighIcon   from '$lib/icons/volume-high.svg?raw';

    import { getQueue } from "../queue.svelte";

    let queue = getQueue();

    let showVolume = $state(false);
    let timeoutId  = $state();

    let icon = $derived.by(() => {
        if (queue.queue.muted) {
            return MuteIcon;
        }

        if (queue.queue.volume < 0.33) {
            return VolumeLowIcon;
        }

        if (queue.queue.volume < 0.66) {
            return VolumeMediumIcon;
        }

        return VolumeHighIcon;
    });
</script>

<div
    class="wrapper"

    aria-hidden={true}

    onmouseenter={() => {
        showVolume = true;
        clearTimeout(timeoutId);
    }}

    onmouseleave={() => {
        timeoutId = setTimeout(() => {
            showVolume = false;
        }, 300);
    }}
>
    <button
        class="volume"
        onclick={() => {
            queue.toggleMute();
        }}
    >
        {@html icon}
    </button>

    {#if showVolume}
        <div class="slider-wrapper" transition:fly={{ x: -30, duration: 150 }}
        style={`--ratio:${queue.queue.muted ? 0 : queue.queue.volume}`}>
            <input
                type="range"

                min="0"
                max="1"
                step="0.01"
                bind:value={
                    () => queue.queue.muted ? 0 : queue.queue.volume,
                    (v) => {
                        queue.queue.muted = v === 0;
                        queue.queue.volume = v || 0;
                    }}

            />
        </div>
    {/if}
</div>

<style lang="postcss">
    @import './iconButton.css';
    @import './range.css';

    @custom-media --mq-fixed screen and (min-width: 1000px);
    @custom-media --mq-split screen and (min-width: 600px);
    @custom-media --mq-mid   screen and (min-width: 800px);

    .wrapper {
        display: none;
        position: relative;

        --color-bg: #222;
        --color-border: #fff9;

        @media (--mq-fixed) {
            display: unset;
        }
    }

    .slider-wrapper {
        position: absolute;
        top: -1em;
        left: 50%;
        width: 10em;
        height: 3em;
        padding: 0 1em;

        display: flex;
        align-items: center;
        justify-content: center;

        border: solid 1px var(--color-border);
        background: var(--color-bg);

        transform: rotate(-90deg);
        transform-origin: 0 50%;

        /*  left triangle */
        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: -0.46em;
            width: 0;
            height: 0;
            border-top: 0.5em solid transparent;
            border-bottom: 0.5em solid transparent;
            border-right: 0.5em solid var(--color-bg);

            transform: translateY(-50%);
        }

        &:before {
            left: -0.56em;

            border-right-color: var(--color-border);
        }
    }

    .volume {
        @extend .iconButton;

        width: 1.1em;
    }
</style>
