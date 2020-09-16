
import React from 'react';

import Layout  from '../components/layout/layout';
import SEO     from '../components/seo';

const archive = [{
    year  : 2003,
    songs : [{
        label   : "Breakin'Borders Dub",
        bitrate : 320,
        href    : "https://kevinkace.s3-us-west-2.amazonaws.com/archive/Breakin'Borders+Dub+-+Kace+%26+Andyslim.mp3"
    }, {
        label   : "Realize",
        bitrate : 128,
        href    : "https://kevinkace.s3-us-west-2.amazonaws.com/archive/Realize+(feat+MC+Flight)+-+Kace+%26+Andyslim.mp3"
    }, {
        label   : "Freezeline",
        bitrate : 320,
        href    : "https://kevinkace.s3-us-west-2.amazonaws.com/archive/Freezeline+-+Kace+%26+Andyslim.mp3"
    }]
}];

export default function ArchivePage() {

    return (
        <Layout>
            <SEO title='Kace Archive' description="You don't know where you're going if you don't know where you've been" />

            {archive.map(({ year, songs }) =>
                <div>
                    <h2>{year}</h2>
                    <ul>
                        {songs.map(({ href, label, bitrate }) =>
                            <li>{label} - <a href={href}>mp3 ({bitrate})</a></li>
                        )}
                    </ul>
                </div>
            )}

        </Layout>
    );
};
