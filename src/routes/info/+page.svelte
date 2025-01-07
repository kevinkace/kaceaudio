<script>
    import Links from '$lib/components/links.svelte';

    const uyc = '/images/uyc.jpg';

    let show = false;

    function click(e) {
        e.preventDefault();
        show = !show;
    }
</script>

<div class="split">
    <!-- <div>
        <img src={'avatar.png'} alt={''} />
    </div> -->
    <div>
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
        <p>I grew up in Waterloo Canada, a university/tech city outside of Toronto. I played guitar in high school bands Another Heather and <a href={uyc} on:click={click}>U.Y.C.</a> - 519 hardcore what's up. Then I started making dnb and djing - Breakin' Borders, Earwaks, Wide Mind what's up. I moved to Toronto to attend the Harris Institute and received an honours diploma for their producing/engineering program. I worked at Long and McQuade on Bloor St. I was the product specialist for Steinberg Canada. I was a recording engineer for Find a Way.</p>
        <p>I moved to Seattle in 2006 and shortly after sunk deep into the nerd life and now I'm a web dev which is actually really cool but I do still make music though.</p>

        {#if show}
            <img src={ uyc } alt="U.Y.C." />
        {/if}

    </div>
</div>