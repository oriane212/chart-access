import chartConfig from './index';

/**
 * generate fallback text for canvas
 * @param chartconfig of chartConfig interface
 * 
 * @returns {string}
 */

export default function generateFallbackText(chartconfig: chartConfig) {
    console.log(chartconfig.data.datasets[0].label);
    if (chartconfig.options.title.text === "") {
        return `Untitled ${chartconfig.type} chart`;
    } else {
        return `${chartconfig.type} chart titled, '${chartconfig.options.title.text}'.`;
    }
    
}