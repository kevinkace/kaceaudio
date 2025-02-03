<script>
    import { getQueue } from "../queue.svelte";

    let { value = $bindable() } = $props();

    let queue = getQueue();
</script>

<input
    min="0"
    max={queue.queue.duration}
    type="range"
    bind:value={queue.queue.progressTime}
    onmousedown={(e) => {
        queue.queue.scrubbing = true;
    }}
    onmouseup={(e) => {
        // don't put in onchange, want keyboard users to stay focused
        e.target?.blur();
    }}
    onchange={(e) => {
        queue.queue.scrubbing = false;

        if (queue.queue.audio) {
            queue.queue.audio.currentTime = e.target?.value;
        }
    }}
    style={`--ratio:${queue.queue.progressTime / queue.queue.duration}`}
/>

<style lang="postcss">
    /* https://range-input-css.netlify.app/ */
    input[type="range"] {
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

        -webkit-appearance: none;
        appearance: none;

        width: 100%;

        background: transparent;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        /******** Chrome, Safari, Opera and Edge Chromium styles ********/
        &::-webkit-slider-runnable-track {
            background: var(--progress-bg);

            border-radius: var(--radius);
            height: var(--bar-height);
        }

        /* slider thumb */
        &::-webkit-slider-thumb {
            -webkit-appearance: none; /* Override default look */
            appearance: none;
            margin-top: calc(
                (var(--thumb-height) / -2) + var(--bar-height) / 2
            ); /* Centers thumb on the track */
            background-color: var(--color-thumb);
            border-radius: 50%;
            height: var(--thumb-height);
            width: var(--thumb-height);
        }

        &:focus::-webkit-slider-thumb {
            outline: var(--thumb-ring) solid var(--color-thumb);
            outline-offset: var(--thumb-offset);
        }

        /*********** Firefox styles ***********/
        &::-moz-range-track {
            background: var(--progress-bg);

            border-radius: var(--radius);
            height: var(--bar-height);
        }

        /* slider thumb */
        &::-moz-range-thumb {
            background-color: var(--color-thumb);
            border: none; /*Removes extra border that FF applies*/
            border-radius: 50%;
            height: var(--thumb-height);
            width: var(--thumb-height);
        }

        &:focus::-moz-range-thumb {
            outline: var(--thumb-ring) solid var(--color-thumb);
            outline-offset: var(--thumb-offset);
        }
    }
</style>
