import samples from '$lib/data/samples.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        samples
    };
}
