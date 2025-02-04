<script>
    import { getQueue } from '../queue.svelte.js';

    import PrevIcon   from '$lib/icons/prev.svg?raw';
    import PlayIcon   from '$lib/icons/play2.svg?raw';
    import PauseIcon  from '$lib/icons/pause.svg?raw';
    import NextIcon   from '$lib/icons/next.svg?raw';

    let queue = getQueue();

    const buttons = $derived([
        {
            name : 'prev',
            icon : PrevIcon,
            onclick : () => queue.prev()
        },
        {
            name : 'togglePlay',
            icon : queue.queue.playing ? PauseIcon : PlayIcon,
            onclick : () => queue.togglePlay()
        },
        {
            name : 'next',
            icon : NextIcon,
            onclick : () => queue.next()
        }
    ]);
</script>

<div class="controls">
    {#each buttons as { name, icon, onclick }}
        <button
            class={name}
            onclick={onclick}
        >
            {@html icon}
        </button>
    {/each}
</div>

<style lang="postcss">
    @import '../../../../global.css';

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 0.2em;
    }

    .prev,
    .togglePlay,
    .next {
        @extend .iconButton;
    }
</style>