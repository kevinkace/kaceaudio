<script>
    import { links } from '$lib/data/common.js';

    const infoLinks = [
        { ...links.soundcloud },
        { ...links.bandcamp },
        {
            href  : 'https://kaceaudio.com/songs/Companion',
            label : 'song: Companion'
        }
    ];
</script>

<ul class="links">
    {#each infoLinks as { href, label, icon }}
        <li>
            <a href={href}>
                {label}
                {#if icon}
                    {@html icon}
                {/if}
            </a>
        </li>
    {/each}
</ul>

<style lang="postcss">
    .links {
        max-width: 600px;
        margin: 2em auto 0;

        li a {
            display: flex;
            justify-content: center;
            align-items: center;

            padding: 1em 0;
            margin: 1.4em 0;

            border: solid 1px #fff;
            text-align: center;
            text-decoration: none;

            transition: background 0.15s, color 0.15s;

            & :global(svg) {
                margin-left: 0.6em;
                height: 1.4em;

                transition: filter 0.15s;
            }

            &:hover {
                background: #eee;
                color: #000;

                & :global(svg) {
                    filter: invert(1);
                }
            }
        }
    }
</style>