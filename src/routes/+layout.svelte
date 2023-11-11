<script>
    import "../global.css";

	import { page } from '$app/stores';

    import soundcloudIcon from '$lib/icons/soundcloud.svg';
    import bandcampIcon   from '$lib/icons/bandcamp.svg';

    import Header from "$lib/components/header.svelte";

    import { pageTitle } from "$lib/helpers/pageTitle";

    import { title, desc, img } from "$lib/data/common";

    const links = [{
        href : 'https://soundcloud.com/kace-1',
        icon : soundcloudIcon,
        alt  : 'SoundCloud'
    }, {
        href : 'https://kace.bandcamp.com',
        icon : bandcampIcon,
        alt  : 'Bandcamp'
    }];

    $:meta = Object.assign({ title, desc, img }, $page.data.meta || {});
</script>


<svelte:head>
    <title>{pageTitle(meta.title)}</title>

    <meta property="og:title" content={ pageTitle(meta.title) } />
    <meta property="og:description" content={meta.desc } />
    <meta property="og:image" content={meta.img } />
</svelte:head>

<div class="layout">
    <div>
        <Header/>
        <main>
            <slot />
        </main>
    </div>
    <footer class="footer">

        <div>© {new Date().getFullYear()}</div>

        <div class="links">
            {#each links as {href, icon, alt}}
                <a {href} title={alt}>
                    <img src={icon} {alt} />
                </a>
            {/each}
        </div>

    </footer>
</div>

<style lang="postcss">
    @custom-media --mq-fixed screen and (min-width: 1000px);
    @custom-media --mq-split screen and (min-width: 600px);

    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 4%;

        @media (--mq-fixed) {
            padding: 0;
        }
    }

    .footer {
        display: flex;
        padding: 1em 0;
        margin-top: 2em;
        justify-content: space-between;
    }

    .links {
        display: flex;
        align-items: center;

        opacity: 0.8;

        & a {
            margin-left: 1em;

            &:nth-child(2) {
                & img {
                    width: 1.6em;
                }
            }
        }
    }
</style>
