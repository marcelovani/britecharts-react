import { Component } from 'react';

export interface StackedBarProps {
    /**
     * Internally used, do not overwrite.
     */
    data: {
        name: string;
        stack: string;
        value: number;
    }[];

    /**
     * Gets or Sets the aspect ratio of the chart
     */
    aspectRatio?: number;

    /**
     * Gets or Sets the padding of the stacked bar chart
     */
    betweenBarsPadding?: number;

    /**
     * Gets or Sets the colorSchema of the chart
     */
    colorSchema?: string[];

    /**
     * Chart exported to png and a download action is fired
     */
    exportChart?: Function;

    /**
     * Gets or Sets the grid mode.
     */
    grid?: string;

    /**
     * Gets or Sets the hasPercentage status
     */
    hasPercentage?: boolean;

    /**
     * Gets or Sets the hasReversedStacks property of the chart, reversing the order of stacks.
     */
    hasReversedStacks?: boolean;

    /**
     * Gets or Sets the height of the chart
     */
    height?: number;

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
     * Gets or Sets the loading state of the chart
     */
    loadingState?: string;

    /**
     * Pass language tag for the tooltip to localize the date. Feature
     * uses Intl.DateTimeFormat, for compatability and support, refer
     * to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     */
    locale?: string;

    /**
     * Gets or Sets the margin of the chart
     */
    margin?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };

    /**
     * Gets or Sets the nameLabel of the chart
     */
    nameLabel?: number;

    /**
     * Gets or Sets the nameLabelFormat of the chart
     */
    nameLabelFormat?: string[];

    /**
     * Configurable extension of the x axis
     * If your max point was 50% you might want to show x axis to 60%, pass 1.2
     */
    percentageAxisToMaxRatio?: number;

    /**
     * Gets or Sets whether a loading state will be shown
     */
    shouldShowLoadingState?: boolean;

    /**
     * Gets or Sets the stackLabel of the chart
     */
    stackLabel?: string;

    /**
     * Gets or Sets the minimum width of the graph in order
     * to show the tooltip NOTE: This could also depend on the aspect ratio
     */
    tooltipThreshold?: number;

    /**
     * Gets or Sets the valueLabel of the chart
     */
    valueLabel?: number;

    /**
     * Gets or Sets the valueLabelFormat of the chart
     */
    valueLabelFormat?: string[];

    /**
     * Gets or Sets the width of the chart
     */
    width?: number;

    /**
     * Exposes the ability to force the chart to show a certain x ticks. It
     * requires a `xAxisFormat` of 'custom' in order to work. NOTE: This
     * value needs to be a multiple of 2, 5 or 10. They won't always work
     * as expected, as D3 decides at the end how many and where the ticks will appear.
     */
    xTicks?: number;

    /**
     * Gets or Sets the y-axis label of the chart
     */
    yAxisLabel?: string;

    /**
     * Gets or Sets the offset of the yAxisLabel of the chart. The method accepts both positive and negative values. The default value is -60
     */
    yAxisLabelOffset?: number;

    /**
     * Gets or Sets the number of ticks of the y axis on the chart (Default is 5)
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

export default class StackedBar extends Component<StackedBarProps> {}
