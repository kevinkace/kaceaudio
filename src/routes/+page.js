import songs from '$lib/data/songs';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        songs
    };
}
