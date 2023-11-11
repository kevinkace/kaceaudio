<script>
    import downloadIcon from '$lib/icons/download.svg';

    import Audio from '$lib/components/audio.svelte';
    import Sample from '$lib/components/sample.svelte';

    /** @type Samples */
    export let samples;
    /** @type Filter */
    export let filter;

    export let view = 'grid';
    export let showDesc = false;

    $:filteredSamples = samples.filter(({ tags }) => {
        return (filter === undefined) || tags.includes(filter);
    });
</script>

{#if view === 'grid'}
    <ul class="samples">
        {#each filteredSamples as { title, preview, href, desc, tags }}
            <li class:rowDesc={showDesc} class:row={!showDesc}>
                <Sample {title} {preview} {href} {desc} {showDesc} />
            </li>
        {/each}
    </ul>
{:else if view === 'table'}
    <table class="table">
        <colgroup>
            <col class="titleCol" />
            <col class="waveCol" />
            <col class="mp3Col" />
            <col class="descCol" />
            <col class="tagsCol" />
        </colgroup>
        <thead>
            <tr>
                <th>title</th>
                <th>wave</th>
                <th class="mp3">mp3 preview</th>
                <th>description</th>
                <th>tags</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredSamples as { title, preview, href, desc, tags }}
                <tr>
                    <td class="title">{title}</td>
                    <td class="wave">
                        <a href={href} class="download"><img src={downloadIcon} alt='download' /></a>
                    </td>
                    <td class="mp3">
                        <Audio src={preview} autoplay={false} scale={0.9} />
                    </td>
                    <td><p>{desc}</p></td>
                    <td class="tags"><p>
                        {#each tags as tag, idx}
                        {idx ? ', ' : ''}{tag}
                        {/each}
                    </p></td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}

<style lang="postcss">
    @custom-media --mq-fixed screen and (min-width: 1000px);
    @custom-media --mq-split screen and (min-width: 600px);
    @custom-media --mq-mid   screen and (min-width: 800px);

    .samples {
        display: grid;
        grid-gap: 1em;

        @media (--mq-split) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (--mq-mid) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (--mq-fixed) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .row {
        @media (--mq-split) {
            margin-bottom: 1em;
        }
    }

    .table {
        font-size: 0.8em;
        line-height: 1.3;
        margin: 0 -1em;

        th,
        td {
            padding: 0.5em;

            &:first-child {
                padding-left: 1em;
            }
            &:last-child {
                padding-right: 1em;
            }

            p {
                margin: 0;
            }
        }

        td {
            font-size: 0.9em;
        }

        thead th {
            text-transform: uppercase;
            border-bottom: solid 1px #fff2;
        }

        tbody tr:nth-child(even) td {
            background: #fff1;
        }

        img {
            width: 1em;
            height: 1em;
        }
    }

    .titleCol {
        width: 16%;
    }

    .mp3Col {
        width: 35%;
    }
    .tagsCol {
        width: 8%;
    }

    .title {
        font-weight: bold;
    }

    .wave,
    .mp3 {
        text-align: center !important;
    }

    .tags {
        font-size: 0.8em !important;
    }

</style>