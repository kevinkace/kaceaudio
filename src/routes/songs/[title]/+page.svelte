<script>
    import DropboxIcon from '$lib/icons/dropbox.svg?raw';
    import DriveIcon   from '$lib/icons/drive.svg?raw';
    import SoundcloudIcon from '$lib/icons/soundcloud.svg?raw';

    import Samples from '$lib/components/samples.svelte';
    import Player  from '$lib/components/player.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const { song, samples } = data;
</script>

<div class="split">
    <div class="left">
        <div class="player">
            <Player {song} />
        </div>

        <h2>wav</h2>

        <ul>
            <li><a href={song.soundcloud} class="soundcloud button icon">{@html SoundcloudIcon} Soundcloud</a></li>
            <li><a href={song.wav.dropbox} class="dropbox button icon">{@html DropboxIcon} Dropbox</a></li>
            <li><a href={song.wav.drive} class="drive button icon">{@html DriveIcon} Google Drive</a></li>
            <li class="mp3s">
                mp3:
                <div>
                    <a href={song.mp3.dropbox} class="dropboxIcon icon">{@html DropboxIcon}Dropbox</a>
                    <a href={song.mp3.drive} class="driveIcon icon">{@html DriveIcon}Google Drive</a>
                </div>
            </li>
        </ul>
    </div>

    <div>
        <h1>{song.title}</h1>

        <dl>
            <div>
                <dt>BPM</dt>
                <dd>{song.bpm}</dd>
            </div>
            <div>
                <dt>duration</dt>
                <dd>{song.length}</dd>
            </div>
        </dl>

        <h2>samples</h2>
        <Samples {samples} filter={'Companion'} showDesc={false} />
    </div>
</div>

<style lang="postcss">
    h1 {;
        margin-left: -0.6em;
        padding: 0.3em 0.6em;

        font-weight: bold;

        background: #1b1b1b;
    }

    .left {
        h2 {
            margin-bottom: 0.3em;
        }
    }

    .player {
        margin-bottom: 2em;
    }

    .mp3s {
        display: flex;
        justify-content: flex-start;
        gap: 0.5em;

        a {
            justify-content: flex-start;

            & :global(svg) {
                height: 1em;
                width: 1em;
            }
        }
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6em;

        & :global(svg) {
            height: 1.3em;
            width: 1.3em;
        }
    }

    .button {
        margin-bottom: 1em;
        padding: 0.7em 2em 0.6em;

        text-align: center;
        color: white;
    }

    .dropbox {
        background: #0061ff;
    }

    .drive {
        color: black;
        background: #ffd04a;
    }

    .soundcloud {
        background: #f70;
    }

</style>