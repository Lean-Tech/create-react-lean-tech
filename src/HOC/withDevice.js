import React, {Component} from 'react';
import {breakPoints} from '../utils/Config';
import {getDisplayName} from "../utils/Config/helpers";

export const withDevice = WrapperComponent => {
    class WithDevice extends Component {
        state = {
            device: null
        };

        updateDimensions = () => {
            let device = 'desktop';
            if (window.innerWidth <= breakPoints.DESKTOP)
                device = 'table';

            if (window.innerWidth <= breakPoints.TABLET)
                device = 'phone';

            this.setState({device});
        };

        componentDidMount() {
            this.updateDimensions();
            window.addEventListener('resize',this.updateDimensions, true);
        }

        componentWillUnmount() {
            window.addEventListener('resize',this.updateDimensions, true);
        }

        render() {
            return (<WrapperComponent device={this.state.device}/>)
        }

    }

    WithDevice.displayName = `withDevice(${getDisplayName(WrapperComponent)})`;

    return WithDevice;

};
