import { songArchive, setArchive } from '$lib/data/archive';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        songArchive,
        setArchive,

        meta : {
            title : 'archive',
            desc  : 'the glory days of KW dnb'
        }
    };
}
