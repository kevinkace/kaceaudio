<script>
    import "../global.css";

	import { page } from '$app/state';

    import Header      from "$lib/components/header.svelte";
    import MediaPlayer from "$lib/components/media-player/media-player.svelte";

    import { pageTitle } from "$lib/helpers/pageTitle";

    import { title, desc, img, links } from "$lib/data/common";

    let { children } = $props();

    const footerLinks = [
        { ...links.soundcloud },
        { ...links.bandcamp }
    ];

    let meta = $derived(Object.assign({ title, desc, img }, page.data.meta || {}));
</script>


<svelte:head>
    <title>{pageTitle(meta.title)}</title>

    <meta property="og:title" content={pageTitle(meta.title)} />
    <meta property="og:description" content={meta.desc} />
    <meta property="og:image" content={meta.img} />
</svelte:head>

<div class="layout">
    <div>
        <Header/>
        <main>
            {@render children?.()}
        </main>
    </div>
    <footer class="footer">

        <div>© {new Date().getFullYear()}</div>

        <div class="links">
            {#each footerLinks as {href, icon, label}}
                <a {href} title={label}>
                    {@html icon}
                </a>
            {/each}
        </div>

    </footer>
</div>

<MediaPlayer/>

<style lang="postcss">
    @import '../global.css';

    .layout {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        min-height: 100vh;
        max-width: var(--layout-width);

        margin: 0 auto;
        padding: 0 var(--layout-padding);
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
                & :global(svg) {
                    height: 1.6em;
                }
            }
        }
    }
</style>
