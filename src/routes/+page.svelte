<script>
    /** @type {import('./$types').PageData}*/
    export let data;

    import Song from '$lib/components/song.svelte';

    const filteredTitles = data.songs.titles.filter(title => data.songs.data[title].live)
</script>

<p>
    I make a lot of music but I rarely share it publicly. I should get better about that.
</p>

<p>
    During covid I posted one track to this website and some socials. I'm still quite happy with it. It's the song embedded below.
</p>

<p>
    I have some sample packs in the <a href='/samples'>samples section</a>, and here is my <a href='https://soundcloud.com/kace-1'>SoundCloud</a> and <a href='https://kace.bandcamp.com'>Bandcamp</a>.
</p>

<div class='discog'>
    {#each filteredTitles as title}
    <div>
        <Song song={data.songs.data[title]} />
    </div>
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