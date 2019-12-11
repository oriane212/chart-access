/**
 * generate fallback text for canvas
 * @param title Chart.js object title
 * @param type Chart.js object type
 * 
 * @returns {string}
 */
export default function generateFallbackText(title: string, type: string) {
    if (title === "") {
        return `Untitled ${type} chart`;
    } else {
        return `${type} chart titled, '${title}'.`;
    }
}
