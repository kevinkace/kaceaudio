import { error } from '@sveltejs/kit';

import songs   from '$lib/data/songs';
import samples from '$lib/data/samples.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const song = songs.data[params.title];

    if (!song) {
        throw error(404, 'Not found');
    }

    return {
        song,
        samples,
        meta : {
            title : song.title,
            desc  : song.desc,
            img   : `/images/songs/${song.img}`
        }
    };
}
