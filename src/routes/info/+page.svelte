<script>
    import Links from '$lib/components/links.svelte';
    import { find } from '$lib/helpers/images';

    const uyc = '/images/uyc.jpg';
    const studio = '/images/first-studio.jpg';

    let show = false;

    function click(key) {
        show = show === key ? false : key;
    }
</script>

<div class="split">
    <div>
        <!-- <enhanced:img src={find("headshot")} alt={''} /> -->
        <dl>
            <div>
                <dt>name</dt>
                <dd>Kevin A. Cameron</dd>
            </div>

            <div>
                <dt>location</dt>
                <dd>Seattle, WA</dd>
            </div>

            <div>
                <dt>origin</dt>
                <dd>Waterloo, ON</dd>
            </div>
        </dl>

        <Links />

    </div>

    <div>
        <p>I like to make music. It's often drum & bass or other bass music/EDM but not always.</p>

        <p>
            I grew up in <a href="https://en.wikipedia.org/wiki/Waterloo,_Ontario">Waterloo Canada</a>, a university/tech city outside of Toronto. I played guitar in high school bands Another Heather and <a href={uyc} on:click|preventDefault={() => click("uyc")}>U.Y.C.</a> - 519 hardcore - what up! Then I started making <a href={studio} on:click|preventDefault={() => click("studio")}>dnb and djing</a> - Breakin' Borders, Earwaks, Wide Mind - what up! I moved to Toronto to attend the <a href="https://harrisinstitute.com/">Harris Institute</a> and received an honours diploma for their producing/engineering program. I worked at <a href="https://www.long-mcquade.com/">Long and McQuade</a> on Bloor St. I was the product specialist for <a href="https://musicmarketing.ca/">Steinberg Canada</a>. I was a recording engineer for <a href="https://mintmusic.ca/">Find A Way</a>.
        </p>

        <p>In 2006 I moved to Seattle and shortly after sunk deep into the nerd life and now I'm a web dev which is actually really cool but I do still make music though.</p>

        {#if show}
            <enhanced:img src={find(show)} alt={show} />
        {/if}

    </div>
</div>

<style>
    img {
        margin-bottom: 2em;
    }
</style>