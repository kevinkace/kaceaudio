<script>
    /** @type string */
    export let href,
        /** @type string */
        title,
        /** @type string */
        img,
        /** @type string */
        embed;

    let player = false;
</script>

<a href={ href} on:click|preventDefault={(e) => {
    player = true
}}>
    {#if player}
        <iframe width='100%' height='300' scrolling='no' frameBorder='no' allow='autoplay' src={ embed } title={ title }></iframe>
    {:else}
        <span class="play">
            <img src={ `/images/songs/${img}` } alt={ title } />
        </span>
    {/if}
</a>

<style lang="postcss">
    .play {
        position: relative;
        display: block;

        border: solid 1px transparent;

        &:before,
        &:after {
            content: '';
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            height: 30%;
            width: 30%;

            background:  url($lib/icons/play.svg) no-repeat 80% 50%;
            background-size: 80%;
            border-radius: 50%;
            border: solid 2px white;

            transition: opacity 0.3s;
        }

        &:before {
            mix-blend-mode: soft-light;
        }

        &:after {
            opacity: 0.2;
        }

        &:hover {
            border-color: rgba(255, 255, 255, 0.3);

            &:after {
                opacity: 0.5;
            }
        }
    }

</style>