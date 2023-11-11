import { title } from '$lib/data/common.js';

/**
 * Build the title for the page
 * @param {string} [value]
 * @returns {string}
 */
export function pageTitle(value) {
    if (!value || value === title) {
        return title;
    }

    return `${title} | ${value}`;
}
