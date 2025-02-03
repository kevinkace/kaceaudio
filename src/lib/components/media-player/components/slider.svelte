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
    onchange={(e) => {
        queue.queue.scrubbing = false;

        if (queue.queue.audio) {
            queue.queue.audio.currentTime = e.target?.value;
        }
    }}
/>

<style lang="postcss">
    /* https://range-input-css.netlify.app/ */
    /*********** Baseline, reset styles ***********/
    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        width: 100%;
    }

    /* Removes default focus */
    input[type="range"]:focus {
        outline: none;
    }

    /******** Chrome, Safari, Opera and Edge Chromium styles ********/
    /* slider track */
    input[type="range"]::-webkit-slider-runnable-track {
        background-color: #bababa;
        border-radius: 0.5rem;
        height: 0.5rem;
    }

    /* slider thumb */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: -4px; /* Centers thumb on the track */
        background-color: #ffffff;
        border-radius: 0.5rem;
        height: 1rem;
        width: 1rem;
    }

    input[type="range"]:focus::-webkit-slider-thumb {
        outline: 3px solid #ffffff;
        outline-offset: 0.125rem;
    }

    /*********** Firefox styles ***********/
    /* slider track */
    input[type="range"]::-moz-range-track {
        background-color: #bababa;
        border-radius: 0.5rem;
        height: 0.5rem;
    }

    /* slider thumb */
    input[type="range"]::-moz-range-thumb {
        background-color: #ffffff;
        border: none; /*Removes extra border that FF applies*/
        border-radius: 0.5rem;
        height: 1rem;
        width: 1rem;
    }

    input[type="range"]:focus::-moz-range-thumb {
        outline: 3px solid #ffffff;
        outline-offset: 0.125rem;
    }
</style>
