// Type definitions for chart-access

import * as chartjs from 'chart.js';

export interface checkThreshold{
    (chartconfig: chartjs.ChartConfiguration, t: number): boolean;
} 

export interface stringArrayFromData {
  (data: number[] | chartjs.ChartPoint[]) : string[];
}

export interface editString {
  (string: string): string;
}