// Type definitions for chart-access

export default interface chartConfig {
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
