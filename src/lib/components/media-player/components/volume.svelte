<script>
    import MuteIcon         from '$lib/icons/volume-mute.svg?raw';
    import VolumeLowIcon    from '$lib/icons/volume-low.svg?raw';
    import VolumeMediumIcon from '$lib/icons/volume-medium.svg?raw';
    import VolumeHighIcon   from '$lib/icons/volume-high.svg?raw';

    import { getQueue } from "../queue.svelte";

    let queue = getQueue();
</script>

<div>
    <button class="volume" onclick={() => queue.toggleMute()}>{@html !queue.queue.volume ? MuteIcon : VolumeMediumIcon}</button>
</div>

<style lang="postcss">
    @import '../../../../global.css';

    .volume {
        @extend .iconButton;
    }
</style>