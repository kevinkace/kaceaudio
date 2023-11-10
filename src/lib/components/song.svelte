<script>
    import soundcloudIcon from "$lib/icons/soundcloud.svg"
    import dropboxIcon    from "$lib/icons/dropbox.svg"
    import driveIcon      from "$lib/icons/drive.svg"

    import Player from "$lib/components/player.svelte";

    /** @type Song */
    export let song;

    const { title, img, href, embed, soundcloud, wav } = song;

    const _embed = embed.replace('auto_play=false', 'auto_play=true');

</script>

<div>
    <Player {href} {title} {img} embed={_embed}></Player>

    <div class="details">
        <p>
            <span class="downloadLabel">download:</span>
            <a href={soundcloud} class="soundcloud"><img src={soundcloudIcon} alt='soundcloud' /></a>
            <a href={wav.dropbox} class="dropbox"><img src={dropboxIcon} alt='dropbox' /></a>
            <a href={wav.drive} class="drive"><img src={driveIcon} alt='drive' /></a>
        </p>

        <p>
            <a href='/songs/Companion' class="dir">full info</a>
        </p>
    </div>
</div>

<style lang="postcss">
    @custom-media --mq-fixed screen and (min-width: 1000px);
    @custom-media --mq-split screen and (min-width: 600px);

    p {
        display: flex;
        align-items: center;

        font-size: 0.8em;
        line-height: 1.3;
        opacity: 0.8;

        a {
            margin-left: 0.6em;
        }

        img {
            width: 1.6em;
        }
    }

    .downloadLabel {
        display: none;

        @media (--mq-split) {
            display: inline;
        }
    }

    .dropbox,
    .drive {
        img {
            width: 1.3em;
        }
    }

    .details {
        display: flex;
        justify-content: space-between;
    }

    .dir {
        overflow: hidden;
        white-space: nowrap;

        &::after {
            content: '';
            position: relative;
            display: inline-block;

            margin-left: 0.3em;
            width: 1.4em;
            height: 1em;
            top: 0.15em;


            opacity: 0.6;
            background: url($lib/icons/arrow2.svg) no-repeat 0 0;
            background-size: contain;

            animation: dirBg 1s infinite linear;
        }

    }

    @keyframes dirBg {
        from {
            background-position: -1em 50%;
        }
        to {
            background-position: 1.4em 50%;
        }
    }


</style>