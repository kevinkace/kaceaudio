<script>
    /** @type {import('./$types').PageData}*/
    export let data;

    /** @type {null|string} */
    let showTracklist = null;
</script>

<h2>Songs</h2>

{#each data.songArchive as { year, songs }}
    <div class="section">
        <h3>{year}</h3>
        <ul>
            {#each songs as { href, title, artist, bitrate }}
                <li><strong>{title}</strong> - {artist} | <a href={href}>mp3 ({bitrate})</a></li>
            {/each}
        </ul>
    </div>
{/each}

<h2>Sets</h2>

{#each data.setArchive as { year, sets }}
    <div class="section">
        <h3>{year}</h3>
        <ul>
            {#each sets as {href, title, artist, bitrate, tracklist, duration }}
                <li>
                    <strong>{title}</strong> - {artist}
                    |
                    {duration}
                    |
                    <a href={href}>mp3 ({bitrate})</a>
                    {#if tracklist}
                        |
                        <button on:click={() => {
                            showTracklist = showTracklist === title ? null : title;
                        }}>
                            tracklist
                        </button>

                        {#if showTracklist === title}
                            <ol class="tracklist">
                                {#each tracklist as track}
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

        h3 {
            margin-bottom: 0.3em;
        }

        ul {
            border-left: solid 2px #999;
            padding-left: 0.6em;
            margin-left: 0.1em;
        }
    }

    .tracklist {
        font-size: 0.9em;;
        margin-bottom: 2em;

        li {
            margin-left: 2em;
        }
    }
</style>