export const images = import.meta.glob('$lib/images/**/*.{jpg,jpeg,png}', {
    query: { enhanced: true },
    import: 'default',
    eager: true
});

const entries = Object.entries(images);

const fallback = entries.find(([key, value]) => key.includes("headshot")) || [];

/**
 * find an image
 * @param {string} needle
 * @returns {string|Picture}
 */
export function find(needle) {
    const found = entries.find(([key, value]) => key.includes(needle)) || fallback;

    return found[1];
}
