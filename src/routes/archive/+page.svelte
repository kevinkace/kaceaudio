<script>
    import Sep from '$lib/components/Sep.svelte';

    import { getQueue } from '$lib/components/media-player/queue.svelte.js';
    import DownloadLink from '$lib/components/DownloadLink.svelte';
    import SongPlayButton from '$lib/components/SongPlayButton.svelte';

    /** @type {import('./$types').PageData}*/
    export let data;

    /** @type {null|string} */
    let showTracklist = null;

    const queue = getQueue();
</script>

<h2>Songs</h2>

{#each data.songArchive as { year, songs }}
    <div class="section">
        <h3>{year}</h3>

        <ul class="list">
            {#each songs as song}
                <li class="listItem">
                    <SongPlayButton {song}>
                        <strong>{song.title}</strong> -
                        {song.artist}
                    </SongPlayButton>
                    <Sep />
                    <DownloadLink {song} />
                </li>
            {/each}
        </ul>
    </div>
{/each}

<h2>Sets</h2>

{#each data.setArchive as { year, sets }}
    <div class="section">
        <h3>{year}</h3>

        <ul class="list">
            {#each sets as song}
                <li class="listItem">
                    <SongPlayButton {song}>
                        <strong>{song.title}</strong> -
                        {song.artist}
                    </SongPlayButton>

                    <Sep/>
                    {song.duration}
                    <Sep/>

                    <a
                        on:click|preventDefault={() => { queue.add(song); }}
                        href={song.href}
                    >
                        mp3 ({song.bitrate})
                    </a>

                    {#if song.tracklist}
                        <Sep/>
                        <button on:click={() => {
                            showTracklist = showTracklist === song.title ? null : song.title;
                        }}>
                            tracklist
                        </button>

                        {#if showTracklist === song.title}
                            <ol class="tracklist">
                                {#each song.tracklist as track}
                                    <li>{track}</li>
                                {/each}
                            </ol>
                        {/if}
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
{/each}

<style lang="postcss">
    .section {
        margin-bottom: 2em;

        & + h2 {
            margin-top: 2.4em;
        }

        h3 {
            margin-bottom: 0.8em;
            font-size: 1.2em;
        }

        ul.list {
            border-left: solid 2px #999;
            padding-left: 0.8em;
            margin-left: 0.1em;

            li.listItem {
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                padding: 0.15em 0 0.15em 0.3em;

                &:first-child {
                    padding-top: 0.3em;
                }
                &:last-child {
                    padding-bottom: 0.3em;
                }
            }
        }
    }

    .tracklist {
        width: 100%;
        margin: 0.6em 0 1em 1.6em;

        font-size: 0.9em;

        li {
            margin-left: 2em;
        }
    }
</style>