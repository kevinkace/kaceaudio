<script>
    import { getQueue } from "../queue.svelte";

    let queue = getQueue();
</script>

{#if queue.queue.loading}
    <div class="loading"></div>
{:else}
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
{/if}

<style lang="postcss">
    @import './range.css';

    .loading {
        width: 100%;
        height: var(--bar-height);
        display: inline-block;
        position: relative;
        background: var(--color-progress-remaining);
        overflow: hidden;
        border-radius: var(--radius);

        &::after {
            content: '';
            width: 70%;
            height: var(--bar-height);
            background: var(--color-progress-elapsed);
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            animation: animloader 800ms infinite;
        }
    }

    @keyframes animloader {
        0% {
            left: 0;
            transform: translateX(-100%);
        }
        100% {
            left: 100%;
            transform: translateX(0%);
        }
    }

</style>
