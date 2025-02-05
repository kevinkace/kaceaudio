<script>
    import { getQueue } from "../queue.svelte";

    let queue = getQueue();
</script>

<input
    type="range"

    bind:value={queue.queue.progressTime}

    min="0"
    max={queue.queue.duration}

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
/>

<style lang="postcss">
    @import './range.css';
</style>
