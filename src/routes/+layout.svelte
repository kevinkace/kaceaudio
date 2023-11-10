<script>
    import "../global.css";

    import soundcloudIcon from '$lib/icons/soundcloud.svg';
    import twitterIcon from '$lib/icons/twitter.svg';
    import bandcampIcon from '$lib/icons/bandcamp.svg';

    import Header from "$lib/components/header.svelte";

    const links = [{
        href : 'https://soundcloud.com/kace-1',
        icon : soundcloudIcon,
        alt  : 'SoundCloud'
    }, {
        href : 'https://twitter.com/kaceaudio',
        icon : twitterIcon,
        alt  : 'Twitter'
    }, {
        href : 'https://kace.bandcamp.com',
        icon : bandcampIcon,
        alt  : 'Bandcamp'
    }];
</script>

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
                <a href={href} title={alt}>
                    <img src={icon} alt={alt} />
                </a>
            {/each}
        </div>

    </footer>
</div>

<style lang="postcss">
    @value mqFixed, mqSplit from "../global.css";

    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 4%;

        @media mqFixed {
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

    .split {

        @media mqSplit {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        @media mqFixed {
            grid-template-columns: 1fr 3fr;
        }

        & > * {
            &:first-child {
                margin-bottom: 2em;

                @media mqSplit {
                    margin-bottom: 0;
                }
            }

            &:last-child {
                @media mqSplit {
                    border-left: solid 1px rgba(255, 255, 255, 0.2);
                    padding-left: 2em;
                    margin-left: 2em;
                }
            }
        }
    }

</style>
