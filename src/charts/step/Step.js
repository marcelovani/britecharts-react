import React from 'react';
import PropTypes from 'prop-types';
import step from './stepChart';
import { loadingContainerWrapper } from '../loading/LoadingContainer';

class Step extends React.Component {
    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.arrayOf(PropTypes.any),

        /**
         * Chart exported to png and a download action is fired
         */
        exportChart: PropTypes.func,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the loading state of the chart (string must be markup).
         */
        loadingState: PropTypes.string,

        /**
         * Gets or Sets whether a loading state will be shown
         */
        shouldShowLoadingState: PropTypes.bool,

        /**
         * Gets or Sets the margin of the chart
         */
        margin: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number,
        }),

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        /**
         * Gets or Sets the text of the xAxisLabel on the chart
         */
        xAxisLabel: PropTypes.string,

        /**
         * Gets or Sets the offset of the xAxisLabel on the chart
         */
        xAxisLabelOffset: PropTypes.number,

        /**
         * Gets or Sets the text of the yAxisLabel on the chart
         */
        yAxisLabel: PropTypes.string,

        /**
         * Gets or Sets the offset of the yAxisLabel on the chart
         */
        yAxisLabelOffset: PropTypes.number,

        /**
         * Gets or Sets the number of ticks of the y axis on the chart (Default is 6)
         */
        yTicks: PropTypes.number,

        customMouseOver: PropTypes.func,
        customMouseMove: PropTypes.func,
        customMouseOut: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        chart: PropTypes.object,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        createTooltip: PropTypes.func,
    };

    static defaultProps = {
        chart: step,
        createTooltip: () => null,
        shouldShowLoadingState: false,
    };

    constructor(props) {
        super(props);

        this.setRef = this.setRef.bind(this);
    }

    componentDidMount() {
        const { data, shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            if (data !== null) {
                this.createChart();
            }
        }
    }

    componentDidUpdate() {
        const { createTooltip, shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            if (!this.chart) {
                this.createChart();
            } else {
                this.updateChart();
                createTooltip();
            }
        }
    }

    componentWillUnmount() {
        const { chart } = this.props;
        chart.destroy(this.rootNode);
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    getChartConfiguration() {
        const configuration = { ...this.props };

        delete configuration.data;
        delete configuration.chart;
        delete configuration.createTooltip;
        delete configuration.shouldShowLoadingState;

        return configuration;
    }

    setRef(componentNode) {
        this.rootNode = componentNode;
    }

    updateChart() {
        this.props.chart.update(
            this.rootNode,
            this.props.data,
            this.getChartConfiguration(),
            this.chart
        );
    }

    createChart() {
        this.chart = this.props.chart.create(
            this.rootNode,
            this.props.data,
            this.getChartConfiguration()
        );
    }

    render() {
        const { chart } = this.props;
        return loadingContainerWrapper(
            this.props,
            chart.loading(),
            <div className="step-container" ref={this.setRef} />
        );
    }
}

export default Step;
