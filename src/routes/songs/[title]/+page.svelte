<script>
    import Samples from '$lib/components/samples.svelte';
    import Player from '$lib/components/player.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const { song, samples } = data;
</script>

<h1>{song.title}</h1>

<div class="split">
    <div>
        <div class="player">
            <Player {song} />
        </div>

        <h2>download</h2>

        <ul>
            <li><a href={song.soundcloud} class="soundcloud button icon"><span>Soundcloud</span></a></li>
            <li><a href={song.wav.dropbox} class="dropbox button icon"><span>Dropbox</span></a></li>
            <li><a href={song.wav.drive} class="drive button icon"><span>Drive</span></a></li>
            <li class="mp3s">
                mp3:
                <a href={song.mp3.dropbox} class="dropboxIcon icon"><span>Dropbox</span></a>
                <a href={song.mp3.drive} class="driveIcon icon"><span>Drive</span></a>
            </li>
        </ul>
    </div>

    <div>
        <h2>info</h2>

        <dl>
            <div>
                <dt>title</dt>
                <dd>{song.title}</dd>
            </div>
            <div>
                <dt>BPM</dt>
                <dd>song.bpm</dd>
            </div>
            <div>
                <dt>scale</dt>
                <dd>{song.scale}</dd>
            </div>
            <div>
                <dt>length</dt>
                <dd>{song.length}</dd>
            </div>
        </dl>

        <h2>samples</h2>
        <Samples {samples} filter={'Companion'} showDesc={false} />
    </div>
</div>

<style lang="postcss">
    .player {
        margin-bottom: 2em;
    }

    .mp3s {
        display: flex;
        justify-content: space-between;
    }

    .icon {
        span {
            position: relative;
            margin-left: 2.4em;

            &::before {
                content: '';
                position: absolute;
                right: 100%;
                height: 1.4em;
                width: 1.4em;
                margin-right: 0.6em;

                background: no-repeat 50% 50%;
                background-size: contain;
            }
        }
    }

    .button {
        display: block;
        margin-bottom: 1em;
        padding: 0.5em 2em 0.3em;

        text-align: center;
        color: white;

        background: red;
    }

    .dropbox {
        background: #0061ff;

        span::before {
            background-image: url($lib/icons/dropbox.svg);
        }
    }

    .drive {
        color: black;
        background: #ffd04a;

        span::before {
            background-image: url($lib/icons/drive.svg);
            filter: invert(1);
        }
    }

    .soundcloud {
        background: #f70;

        span::before {
            background-image: url($lib/icons/soundcloud.svg);
        }
    }


    .driveIcon {
        span::before {
            opacity: 0.8;
            background-image: url($lib/icons/drive.svg);
        }
    }

    .dropboxIcon {
        span::before {
            opacity: 0.8;
            background-image: url($lib/icons/dropbox.svg);
        }
    }

</style>