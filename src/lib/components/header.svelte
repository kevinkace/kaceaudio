<script>
	import { page } from '$app/stores';

    import { matchRoute } from '$lib/helpers/matchRoute';

    import menuIcon from '$lib/icons/menu.svg';
    import kaceLogo from '$lib/icons/kace-logo-0.svg';

    import { title } from "$lib/data/common";

    const links = [{
    //     href  : '/',
    //     label : 'music'
    // }, {
        href  : '/samples',
        label : 'samples'
    }, {
        href  : '/songs/Companion',
        label : 'songs'
    }, {
        href  : '/info',
        label : 'info'
    }];

    let showNav = false;
</script>

<div class="mobNavBg">
    <header class="header">
        <h1 class="logo">
            <a href='/'>
                <img src={kaceLogo} alt={title}/>
            </a>
        </h1>
        <nav>
          <button on:click={() => { showNav = !showNav }}>
            <img src={menuIcon} alt='open menu' />
          </button>
          <div>
            {#each links as { href, label }}
                <a class="navLink" class:active={matchRoute($page.route.id, href)} {href} >{label}</a>
            {/each}
          </div>
        </nav>
    </header>
    <div class="mobNav" class:showNav={showNav} class:hideNav={!showNav} >
        {#each links as { href, label }}
            <a class="navLink" {href} on:click={() => { showNav = false; }}>{label}</a>
        {/each}
    </div>
</div>

<style lang="postcss">
    @custom-media --mq-fixed screen and (min-width: 1000px);
    @custom-media --mq-split screen and (min-width: 600px);

    .mobNavBg {
        position: relative;
        z-index: 1;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 1.6em 0;
        padding-bottom: 0.6em;
        position: relative;
        z-index: 1;

        border-bottom: solid 1px #fff;
        background-color: var(--color-bg);
    }

    @media (--mq-fixed) {
        .header {
            background: #000;
        }
    }

    .logo {
        margin: 0;

        text-transform: lowercase;
        font-size: 13vw;
        line-height: 1;

        mask-image: var(--chrome-mask-image);

        &:hover {
            mask-image: unset;
        }

        img {
            display: block;
            height: 1em;
            width: auto;

            filter: invert(1);
        }

        @media (--mq-split) {
            font-size: 2em;
        }
    }

    nav {
        & button {
            display: block;
            margin-bottom: 0.2em;

            & img {
                display: block;
                opacity: 0.8;
                width: 8.7vw;
            }

            @media (--mq-split) {
                display: none;
            }
        }

        & > div {
            display: none;

            @media (--mq-split) {
                display: block;
            }
        }
    }

    .navLink {
        display: inline;
        position: relative;
        margin: 0 0 0 0.6em;
        padding-right: 0.7em;

        font-family: var(--font-display);

        mask-image: var(--chrome-mask-image);

        &:not(:last-child):after {
            content: "|";
            position: absolute;
            right: -0.1em;
        }
    }

    .active {
        text-decoration: underline;
    }

    .mobNav {
        position: absolute;
        background: #000;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 1em 0;
        border-bottom: solid 1px #fff;

        transition: transform 0.2s;

        @media (--mq-split) {
            display: none;
        }
    }

    .showNav {
        transform: translateY(100%);
    }

    .hideNav {
        transform: translateY(0);
    }
</style>
