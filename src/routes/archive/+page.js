import samples from '$lib/data/samples.js';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        samples,
        meta : {
            title : 'archive',
            desc  : 'the glory days of KW dnb'
        }
    };
}
