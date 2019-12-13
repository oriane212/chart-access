// Type definitions for chart-access

export interface chartConfig {
    type: string,

    data: {
        labels: string[],
        datasets: { label: string, data: number[], backgroundColor: string } []
      },
      
    options: {
        title: {
          display: boolean,
          text: string
        }
    }
    
}

export interface checkThreshold{
    (chartconfig: chartConfig, t: number): boolean;
} 
