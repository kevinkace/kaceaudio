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
        style={`--progress-time: ${queue.queue.progressTime}; --duration: ${queue.queue.duration}; --ratio:${queue.queue.progressTime / queue.queue.duration}`}
    />

<style lang="postcss">
    /* https://range-input-css.netlify.app/ */
    input[type="range"] {

        width: 100%;

        --bar-height: 0.3rem;
        --thumb-height: 1rem;
        --radius: calc(var(--bar-height) / 2);

        --color-progress-elapsed: #fff;
        --color-progress-remaining: #fff4;
        --color-thumb: #fff;

        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        width: 100%;
    }

    input[type="range"]:focus {
        outline: none;
    }

    /******** Chrome, Safari, Opera and Edge Chromium styles ********/
    input[type="range"]::-webkit-slider-runnable-track {
        background: linear-gradient(
            to right,
            var(--color-progress-elapsed) 0%,
            var(--color-progress-elapsed) calc(var(--ratio) * 100%),
            var(--color-progress-remaining) calc(var(--ratio) * 100%),
            var(--color-progress-remaining) 100%
        );

        border-radius: var(--radius);
        height: var(--bar-height);
    }

    /* slider thumb */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: calc((var(--thumb-height) / -2) + var(--bar-height) / 2); /* Centers thumb on the track */
        background-color: var(--color-thumb);
        border-radius: 50%;
        height: var(--thumb-height);
        width: var(--thumb-height);
    }

    input[type="range"]:focus::-webkit-slider-thumb {
        outline: 3px solid #ffffff;
        outline-offset: 0.125rem;
    }

    /*********** Firefox styles ***********/
    input[type="range"]::-moz-range-track {
        background: linear-gradient(
            to right,
            var(--color-progress-elapsed) 0%,
            var(--color-progress-elapsed) calc(var(--ratio) * 100%),
            var(--color-progress-remaining) calc(var(--ratio) * 100%),
            var(--color-progress-remaining) 100%
        );

        border-radius: var(--radius);
        height: var(--bar-height);
    }

    /* slider thumb */
    input[type="range"]::-moz-range-thumb {
        background-color: var(--color-thumb);
        border: none; /*Removes extra border that FF applies*/
        border-radius: 50%;
        height: var(--thumb-height);
        width: var(--thumb-height);
    }

    input[type="range"]:focus::-moz-range-thumb {
        outline: 3px solid #ffffff;
        outline-offset: 0.125rem;
    }
</style>
