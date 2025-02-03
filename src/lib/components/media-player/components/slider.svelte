<script>
    import { getQueue } from "../queue.svelte";

    let { value = $bindable() } = $props();

    let queue = getQueue();
</script>

<div class="wrapper">
    <input
        min="0"
        max={queue.queue.duration}
        type="range"
        data-progress={queue.queue.progressTime}
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

    <div class="progress" style={`--progress-time: ${queue.queue.progressTime}; --duration: ${queue.queue.duration}; --ratio:${queue.queue.progressTime / queue.queue.duration}`}></div>
</div>

<style lang="postcss">
    .wrapper{
        width: 100%;

        --bar-height: 0.5rem;
        --thumb-height: 1rem;
        --radius: calc(var(--bar-height) / 2);
    }

    .progress {
        position: relative;

        height: var(--bar-height);
        margin-left: calc(var(--thumb-height) / 2);
        margin-right: calc(var(--thumb-height) / 2);

        &:before {
            width: calc(var(--thumb-height) / 2);
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: calc(var(--thumb-height) / -2);
            border-top-left-radius: var(--radius);
            border-bottom-left-radius: var(--radius);
            background: red;
        }
        &:after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;

            width: calc(var(--ratio) * 100%);
            background: red;
        }
    }

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
        border-radius: var(--radius);
        height: var(--bar-height);
    }

    /* slider thumb */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: -4px; /* Centers thumb on the track */
        background-color: #ffffff;
        border-radius: 50%;
        height: var(--thumb-height);
        width: var(--thumb-height);
    }

    input[type="range"]:focus::-webkit-slider-thumb {
        outline: 3px solid #ffffff;
        outline-offset: 0.125rem;
    }

    /*********** Firefox styles ***********/
    /* slider track */
    input[type="range"]::-moz-range-track {
        background-color: #bababa;
        border-radius: var(--radius);
        height: var(--bar-height);
    }

    /* slider thumb */
    input[type="range"]::-moz-range-thumb {
        background-color: #ffffff;
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
