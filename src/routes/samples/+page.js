import samples from '$lib/data/samples.js';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        samples,
        meta : {
            title : 'samples',
            desc  : 'synth, drum, bass, fx...'
        }
    };
}
