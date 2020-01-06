import { stringArrayFromData } from './index';
import * as chartjs from 'chart.js';
export declare const percentages: stringArrayFromData;
/**
 * generate fallback text for chart
 *
 * @param chartconfig: ChartConfiguration interface
 *
 * @returns {string}
 */
export declare function generateFallbackText(chartconfig: chartjs.ChartConfiguration): string;
/**
 * add fallback text for chart to its canvas
 *
 * @param chart: Chart instance
 */
export default function addFallback(chart: Chart): void;
