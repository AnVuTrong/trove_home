import React from 'react';
import { useTranslation } from 'react-i18next';
import { PricingPerformanceSectionProps, PerformanceMetric, ChartDataPoint } from './PricingPerformanceSection.types';

/**
 * PricingPerformanceSection Component
 * 
 * A reusable performance section component for the pricing page
 * Displays performance metrics and investment success chart
 */
export class PricingPerformanceSectionClass {
  private static readonly SECTION_CONTAINER_CLASSES = 'py-20 px-4 bg-white dark:bg-gray-900';
  private static readonly CONTENT_CONTAINER_CLASSES = 'max-w-7xl mx-auto';
  private static readonly HEADER_CONTAINER_CLASSES = 'text-center mb-16';
  private static readonly TITLE_CLASSES = 'text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4';
  private static readonly SUBTITLE_CLASSES = 'text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto';
  private static readonly METRICS_GRID_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16';
  private static readonly METRIC_CARD_CLASSES = 'text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-gray-800 dark:to-gray-700 rounded-xl';
  private static readonly METRIC_VALUE_CLASSES = 'text-4xl md:text-5xl font-bold text-primary mb-2';
  private static readonly METRIC_TITLE_CLASSES = 'text-lg font-semibold text-gray-900 dark:text-white mb-2';
  private static readonly METRIC_DESCRIPTION_CLASSES = 'text-sm text-gray-600 dark:text-gray-400';
  private static readonly CHART_CONTAINER_CLASSES = 'bg-gray-50 dark:bg-gray-800 rounded-xl p-8';
  private static readonly CHART_HEADER_CLASSES = 'text-center mb-8';
  private static readonly CHART_TITLE_CLASSES = 'text-2xl font-bold text-gray-900 dark:text-white mb-2';
  private static readonly CHART_DESCRIPTION_CLASSES = 'text-gray-600 dark:text-gray-300';
  private static readonly CHART_CLASSES = 'relative h-80 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-inner';

  public static getSectionContainerClasses(): string {
    return this.SECTION_CONTAINER_CLASSES;
  }

  public static getContentContainerClasses(): string {
    return this.CONTENT_CONTAINER_CLASSES;
  }

  public static getHeaderContainerClasses(): string {
    return this.HEADER_CONTAINER_CLASSES;
  }

  public static getTitleClasses(): string {
    return this.TITLE_CLASSES;
  }

  public static getSubtitleClasses(): string {
    return this.SUBTITLE_CLASSES;
  }

  public static getMetricsGridClasses(): string {
    return this.METRICS_GRID_CLASSES;
  }

  public static getMetricCardClasses(): string {
    return this.METRIC_CARD_CLASSES;
  }

  public static getMetricValueClasses(): string {
    return this.METRIC_VALUE_CLASSES;
  }

  public static getMetricTitleClasses(): string {
    return this.METRIC_TITLE_CLASSES;
  }

  public static getMetricDescriptionClasses(): string {
    return this.METRIC_DESCRIPTION_CLASSES;
  }

  public static getChartContainerClasses(): string {
    return this.CHART_CONTAINER_CLASSES;
  }

  public static getChartHeaderClasses(): string {
    return this.CHART_HEADER_CLASSES;
  }

  public static getChartTitleClasses(): string {
    return this.CHART_TITLE_CLASSES;
  }

  public static getChartDescriptionClasses(): string {
    return this.CHART_DESCRIPTION_CLASSES;
  }

  public static getChartClasses(): string {
    return this.CHART_CLASSES;
  }
}

const SimpleLineChart: React.FC = () => {
  // Sample data for the chart - showing portfolio vs benchmark performance
  const chartData: ChartDataPoint[] = [
    { period: 'Q1', portfolio: 8, benchmark: 5 },
    { period: 'Q2', portfolio: 15, benchmark: 8 },
    { period: 'Q3', portfolio: 22, benchmark: 12 },
    { period: 'Q4', portfolio: 32, benchmark: 15 },
    { period: 'Q5', portfolio: 38, benchmark: 18 },
    { period: 'Q6', portfolio: 45, benchmark: 22 },
  ];

  const maxValue = 50;
  const chartHeight = 240;
  const chartWidth = 600;
  const leftPadding = 60;
  const bottomPadding = 40;

  const getX = (index: number) => leftPadding + (index * (chartWidth - leftPadding) / (chartData.length - 1));
  const getY = (value: number) => chartHeight - bottomPadding - (value / maxValue) * (chartHeight - bottomPadding);

  const portfolioPath = chartData
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${getX(index)} ${getY(point.portfolio)}`)
    .join(' ');

  const benchmarkPath = chartData
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${getX(index)} ${getY(point.benchmark)}`)
    .join(' ');

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
        className="w-full h-full"
        role="img"
        aria-label="Performance chart showing portfolio vs benchmark"
      >
        {/* Grid lines */}
        {[0, 10, 20, 30, 40, 50].map(value => (
          <g key={value}>
            <line
              x1={leftPadding}
              y1={getY(value)}
              x2={chartWidth - 20}
              y2={getY(value)}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-200 dark:text-gray-600"
              strokeDasharray="2,2"
            />
            <text
              x={leftPadding - 10}
              y={getY(value) + 4}
              textAnchor="end"
              className="text-xs fill-current text-gray-500 dark:text-gray-400"
            >
              {value}%
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {chartData.map((point, index) => (
          <text
            key={index}
            x={getX(index)}
            y={chartHeight - 10}
            textAnchor="middle"
            className="text-xs fill-current text-gray-500 dark:text-gray-400"
          >
            {point.period}
          </text>
        ))}

        {/* Portfolio line */}
        <path
          d={portfolioPath}
          fill="none"
          stroke="rgb(16, 185, 129)"
          strokeWidth="3"
          className="drop-shadow-sm"
        />

        {/* Benchmark line */}
        <path
          d={benchmarkPath}
          fill="none"
          stroke="rgb(107, 114, 128)"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Data points for portfolio */}
        {chartData.map((point, index) => (
          <circle
            key={`portfolio-${index}`}
            cx={getX(index)}
            cy={getY(point.portfolio)}
            r="4"
            fill="rgb(16, 185, 129)"
            className="drop-shadow-sm"
          />
        ))}

        {/* Data points for benchmark */}
        {chartData.map((point, index) => (
          <circle
            key={`benchmark-${index}`}
            cx={getX(index)}
            cy={getY(point.benchmark)}
            r="3"
            fill="rgb(107, 114, 128)"
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
        <div className="flex items-center mb-2">
          <div className="w-4 h-0.5 bg-green-500 mr-2"></div>
          <span className="text-xs text-gray-700 dark:text-gray-300">Trove Portfolio</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-gray-500 mr-2" style={{ backgroundImage: 'repeating-linear-gradient(to right, rgb(107, 114, 128), rgb(107, 114, 128) 5px, transparent 5px, transparent 10px)' }}></div>
          <span className="text-xs text-gray-700 dark:text-gray-300">Market Benchmark</span>
        </div>
      </div>
    </div>
  );
};

const PricingPerformanceSection: React.FC<PricingPerformanceSectionProps> = ({ 
  className = '',
  titleKey = 'pricing.performance.title',
  subtitleKey = 'pricing.performance.subtitle'
}) => {
  const { t } = useTranslation();

  const metricsData = t('pricing.performance.metrics', { returnObjects: true });
  const metrics = (typeof metricsData === 'object' && metricsData !== null) 
    ? metricsData as Record<string, PerformanceMetric> 
    : {};

  // Fallback metrics if none are loaded
  const fallbackMetrics: Record<string, PerformanceMetric> = {
    roi: {
      title: "ROI Improvement",
      value: "25%+",
      description: "Average improvement in returns"
    },
    accuracy: {
      title: "Accuracy",
      value: "85%+",
      description: "Prediction accuracy"
    },
    users: {
      title: "Users",
      value: "10K+",
      description: "Active investors"
    },
    satisfaction: {
      title: "Satisfaction",
      value: "4.8/5",
      description: "Customer rating"
    }
  };

  const displayMetrics = Object.keys(metrics).length > 0 ? metrics : fallbackMetrics;

  return (
    <section 
      className={`${PricingPerformanceSectionClass.getSectionContainerClasses()} ${className}`}
      role="region"
      aria-labelledby="performance-title"
    >
      <div className={PricingPerformanceSectionClass.getContentContainerClasses()}>
        <div className={PricingPerformanceSectionClass.getHeaderContainerClasses()}>
          <h2 id="performance-title" className={PricingPerformanceSectionClass.getTitleClasses()}>
            {t(titleKey)}
          </h2>
          <p className={PricingPerformanceSectionClass.getSubtitleClasses()}>
            {t(subtitleKey)}
          </p>
        </div>

        {/* Performance Metrics */}
        <div className={PricingPerformanceSectionClass.getMetricsGridClasses()}>
          {Object.entries(displayMetrics).map(([key, metric]) => (
            <div key={key} className={PricingPerformanceSectionClass.getMetricCardClasses()}>
              <div className={PricingPerformanceSectionClass.getMetricValueClasses()}>
                {metric.value}
              </div>
              <div className={PricingPerformanceSectionClass.getMetricTitleClasses()}>
                {metric.title}
              </div>
              <div className={PricingPerformanceSectionClass.getMetricDescriptionClasses()}>
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Chart */}
        <div className={PricingPerformanceSectionClass.getChartContainerClasses()}>
          <div className={PricingPerformanceSectionClass.getChartHeaderClasses()}>
            <h3 className={PricingPerformanceSectionClass.getChartTitleClasses()}>
              {t('pricing.performance.chartTitle')}
            </h3>
            <p className={PricingPerformanceSectionClass.getChartDescriptionClasses()}>
              {t('pricing.performance.chartDescription')}
            </p>
          </div>
          
          <div className={PricingPerformanceSectionClass.getChartClasses()}>
            <SimpleLineChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPerformanceSection; 