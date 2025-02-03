<script>
    import { getQueue } from "../queue.svelte";
    import Slider from "./slider.svelte";

    let queue = getQueue();

    /**
     * Convert seconds to time format
     * @param {number} seconds
     * @returns {string} time format
     * @example toTime(65) // 1:05
     */
    function toTime(seconds = 0) {
        let minutes = Math.floor(seconds / 60) || 0;
        let secs = Math.floor(seconds % 60) || 0;

        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

</script>

<div class="container">
    <div class="elapsed">{toTime(queue.queue.currentTime)}</div>

    <div class="slider">
        <Slider/>
    </div>

    <div class="duration">{toTime(queue.queue.duration)}</div>
</div>

<style lang="postcss">
    .container {
        --handle-width: 0.8em;

        flex-basis: 100%;
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .elapsed,
    .duration {

    }

    .slider {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider-bar {
        position: relative;
        width: 100%;
        height: 3px;
        background: #666;
    }

    .handle-zone {
        position: absolute;
        top: 0;
        right: calc(var(--handle-width) / 2);
        bottom: 0;
        left: calc(var(--handle-width) / 2);
    }

    .handle {

        position: absolute;
        top: 50%;

        margin-top: calc(var(--handle-width) / -2);
        margin-left: calc(var(--handle-width) / -2);
        height: var(--handle-width);
        width: var(--handle-width);
        padding: 0;

        border-radius: 50%;

        background: #666;
    }

</style>