<script>
    import soundcloudIcon from '$lib/icons/soundcloud.svg';
    import bandcampIcon from '$lib/icons/bandcamp.svg';

    import { links } from '$lib/data/common.js';

    const infoLinks = [
        {
            href  : links.soundcloud.href,
            label : links.soundcloud.label,
            icon  : soundcloudIcon
        },
        {
            href  : links.bandcamp.href,
            label : links.bandcamp.label,
            icon  : bandcampIcon
        },
        {
            href  : 'https://kaceaudio.com/songs/Companion',
            label : 'song: Companion'
        }
    ];
</script>

<ul class="links">
    {#each infoLinks as { href, label, icon }}
        <li>
            <a href={href}>{label} <img src={icon} alt='' /></a>
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

            img {
                margin-left: 0.6em;
                height: 1.4em;

                transition: filter 0.15s;
            }

            &:hover {
                background: #eee;
                color: #000;

                img {
                    filter: invert(1);
                }
            }
        }
    }
</style>