<script>
    import Audio from "./audio.svelte";

    export let title = "";
    export let preview = "";
    export let href = "";
    export let desc = "";
    export let showDesc = false;

    let player = false;
</script>

<h3>{title}</h3>

<div class="actions">
    <a href={href} class="action download">download</a>

    <button
        class="action play"
        on:click={() => {
            player = !player;
        }}
    >
        listen
    </button>
</div>

{#if showDesc !== false}
    <p class="desc">{desc}</p>
{/if}

{#if player}
    <Audio src={preview} />
{/if}

<style lang="postcss">
    .desc {
        font-size: 0.8em;
        margin: 0.6em 0 1em;
        opacity: 0.8;
    }

    .actions {
        font-size: 0.8em;
    }

    .action {
        position: relative;
        padding-right: 1em;
        margin-right: 1em;

        &:before {
            content: '';
            position: absolute;
            height: 0.7em;
            width: 0.7em;
            top: 0.1em;
            right: 0;

            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: 100% 50%;

            opacity: 0.8;
        }
    }

    .download {
        &:before {
            background-image: url($lib/icons/download.svg);
        }
    }

    .play {
        &:before {
            width: 0.8em;
            height: 0.8em;
            top: 0.2em;
            background-image: url($lib/icons/play.svg);
        }
    }

</style>