import { Component } from 'react';

export interface BarChartProps {
    /**
     * Internally used, do not overwrite.
     */
    data: { value: number; name: string }[];
    /**
     * Gets or Sets the padding of the chart
     */
    betweenBarsPadding?: number;

    /**
     * Gets or Sets the colorSchema of the chart
     */
    colorSchema?: string[];

    /**
     * If true, adds labels at the end of the bars
     */
    enableLabels?: boolean;

    /**
     * Gets or Sets the hasPercentage status
     */
    hasPercentage?: boolean;

    /**
     * Gets or Sets the hasSingleBarHighlight status. If the value is true (default), only the hovered bar is considered to be highlighted and will be darkened by default. If the value is false, all the bars but the hovered bar are considered to be highlighted and will be darkened (by default). To customize the bar highlight or remove it completely, use highlightBarFunction instead.
     */
    hasSingleBarHighlight?: boolean;

    /**
     * Gets or Sets the height of the chart
     */
    height?: number;

    /**
     * Gets or Sets the highlightBarFunction function. The callback passed to this function returns a bar selection from the bar chart. Use this function if you want to apply a custom behavior to the highlighted bar on hover. When hasSingleBarHighlight is true the highlighted bar will be the one that was hovered by the user. When hasSingleBarHighlight is false the highlighted bars are all the bars but the hovered one. The default highlight effect on a bar is darkening the highlighted bar(s) color.
     */
    highlightBarFunction?: Function;

    /**
     * Gets or Sets the isAnimated property of the chart, making it to animate
     * when render. By default this is 'false'
     */
    isAnimated?: boolean;

    /**
     * Gets or Sets the horizontal direction of the chart
     */
    isHorizontal?: boolean;

    /**
     * Offset between end of bar and start of the percentage bars
     */
    labelsMargin?: number;

    /**
     * Gets or Sets the labels number format
     */
    labelsNumberFormat?: string;

    /**
     * Get or Sets the labels text size
     */
    labelsSize?: number;

    /**
     * Gets or Sets the loading state of the chart
     */
    loadingState?: string;

    /**
     * Gets or Sets the margin of the chart
     */
    margin?: { top?: number; bottom?: number; left?: number; right?: number };

    /**
     * Gets or Sets the nameLabel of the chart
     */
    nameLabel?: number;

    /**
     * Gets or Sets the number format of the bar chart
     */
    numberFormat?: string;

    /**
     * Changes the order of items given the custom function
     */
    orderingFunction?: Function;

    /**
     * Configurable extension of the x axis if your max point was 50%
     * you might want to show x axis to 60%, pass 1.2
     */
    percentageAxisToMaxRatio?: number;

    /**
     * Default 10px. Offset between end of bar and start of the percentage bars
     */
    percentageLabelMargin?: number;

    /**
     * Gets or Sets whether the color list should be reversed or not
     */
    shouldReverseColorList?: boolean;

    /**
     * Gets or Sets whether a loading state will be shown
     */
    shouldShowLoadingState?: boolean;

    /**
     * Gets or Sets the valueLabel of the chart
     */
    valueLabel?: number;

    /**
     * Gets or Sets the width of the chart
     */
    width?: number;

    /**
     * Gets or Sets the number of ticks of the x axis on the chart (Default is 5)
     */
    xTicks?: number;

    /**
     * Gets or Sets the minimum width of the graph in order
     * to show the tooltip NOTE: This could also depend on the aspect ratio
     */
    tooltipThreshold?: number;

    /**
     * Gets or Sets the numberFormat to a percentage format if true (default false)
     */
    usePercentage?: boolean;

    /**
     * Space between y axis and chart (Default 10)
     */
    yAxisPaddingBetweenChart?: number;

    /**
     * Gets or Sets the number of vertical ticks on the chart (Default is 6)
     */
    yTicks?: number;

    customMouseOver?: Function;

    customMouseMove?: Function;

    customMouseOut?: Function;

    /**
     * Internally used, do not overwrite.
     *
     * @ignore
     */
    chart?: any;

    /**
     * Internally used, do not overwrite.
     *
     * @ignore
     */
    createTooltip?: Function;
}

export default class Bar extends Component<BarChartProps> {}
