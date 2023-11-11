import { title } from '$lib/data/common.js';

/**
 * Build the title for the page
 * @param {string} [value]
 * @returns {string}
 */
export function buildTitle(value) {
    if (!value) {
        return title;
    }

    return `${title} | ${value}`;
}
