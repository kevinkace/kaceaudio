<script>
    import PlayIcon from "$lib/icons/play2.svg?raw";
    import { find } from "$lib/helpers/images";

    /** @type Song */
    export let song;

    const { title, img, href, embed } = song;

    let player = false;
</script>

<a href={ href} on:click|preventDefault={(e) => {
    player = true
}}>
    {#if player}
        <iframe width='100%' height='300' scrolling='no' frameBorder='no' allow='autoplay' src={ embed } title={ title }></iframe>
    {:else}
        <span class="play">
            <enhanced:img src={find(img)} alt={ title } />
            {@html PlayIcon}
            {@html PlayIcon}
        </span>
    {/if}
</a>

<style lang="postcss">
    .play {
        position: relative;
        display: block;

        border: solid 1px transparent;

        & :global(svg) {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transform-origin: 50% 50%;
            padding-left: 0.3em;

            height: 30%;
            width: 30%;

            border-radius: 50%;
            border: solid 2px white;
            opacity: 0.8;

            transition: opacity 200ms, transform 200ms, filter 200ms;

            mix-blend-mode: soft-light;

            &:last-child {
                mix-blend-mode: unset;
                opacity: 0.2 !important;
            }
        }

        &:hover :global(svg) {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }
    }

</style>