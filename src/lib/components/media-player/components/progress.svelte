<script>
    /**
     * Convert seconds to time format
     * @param {number} seconds
     * @returns {string} time format
     * @example toTime(65) // 1:05
     */
    function toTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60) || 0;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    export let elapsed = 15;
    export let duration = 61;
</script>

<div class="container">
    <div class="elapsed">{toTime(elapsed)}</div>

    <div class="slider">
        <div class="slider-bar">
            <button class="handle"/>
        </div>
    </div>

    <div class="duration">{toTime(duration)}</div>
</div>

<style lang="postcss">
    .container {
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

</style>