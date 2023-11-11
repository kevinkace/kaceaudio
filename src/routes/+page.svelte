<script>
    /** @type {import('./$types').PageData}*/
    export let data;

    import Song from '$lib/components/song.svelte';

    const filteredTitles = data.songs.titles.filter(title => data.songs.data[title].live)
</script>

<p>
    <a href='/songs/Companion'>Companion</a> is now available to stream and download.
</p>

<p>
    There are sample packs in the <a href='/samples'>samples section</a>.
</p>

<p>
    <a href='https://soundcloud.com/kace-1'>SoundCloud</a> | <a href='https://kace.bandcamp.com'>Bandcamp</a>
</p>

<h2 class='songs'>songs</h2>

<div class='discog'>
    {#each filteredTitles as title}
        <Song song={data.songs.data[title]} />
    {/each}
</div>

<style lang="postcss">
    @custom-media --mq-fixed screen and (min-width: 1000px);
    @custom-media --mq-split screen and (min-width: 600px);
    @custom-media --mq-mid   screen and (min-width: 800px);

    .discog {
        display: grid;

        margin-bottom: 2em;
        gap: 1em;
        grid-template-columns: repeat(1, 1fr);

        @media (--mq-split) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (--mq-mid) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .songs {
        margin-top: 2em;
    }

</style>