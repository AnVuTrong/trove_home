export interface PerformanceMetric {
  title: string;
  value: string;
  description: string;
}

export interface ChartDataPoint {
  period: string;
  portfolio: number;
  benchmark: number;
}

export interface PricingPerformanceSectionProps {
  className?: string;
  titleKey?: string;
  subtitleKey?: string;
}

export interface PricingPerformanceSectionStyles {
  sectionContainer: string;
  contentContainer: string;
  headerContainer: string;
  title: string;
  subtitle: string;
  metricsGrid: string;
  metricCard: string;
  metricValue: string;
  metricTitle: string;
  metricDescription: string;
  chartContainer: string;
  chartHeader: string;
  chartTitle: string;
  chartDescription: string;
  chart: string;
} 