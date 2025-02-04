<script>
    import MuteIcon         from '$lib/icons/volume-mute.svg?raw';
    import VolumeLowIcon    from '$lib/icons/volume-low.svg?raw';
    import VolumeMediumIcon from '$lib/icons/volume-medium.svg?raw';
    import VolumeHighIcon   from '$lib/icons/volume-high.svg?raw';

    import { getQueue } from "../queue.svelte";
    import { fly } from 'svelte/transition';

    let queue = getQueue();

    let showVolume = $state(false);
    let timeoutId = $state();
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
        {@html queue.queue.muted ? MuteIcon : VolumeMediumIcon}
    </button>

    {#if showVolume}
        <div class="slider-wrapper" transition:fly={{ x: -30, duration: 150 }}>
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

                style={`--ratio:${queue.queue.muted ? 0 : queue.queue.volume}`}
            />
        </div>
    {/if}
</div>

<style lang="postcss">
    @import '../../../../global.css';

    @import './range.css';

    .wrapper {
        position: relative;
    }

    .slider-wrapper {
        position: absolute;
        top: -1em;
        left: 50%;
        width: 10em;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 1em;

        border: solid 1px #fff9;
        background: #222b;

        transform: rotate(-90deg);
        transform-origin: 0 50%;
    }

    .volume {
        @extend .iconButton;
    }
</style>