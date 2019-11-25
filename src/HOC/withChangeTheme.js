import React, {Component} from 'react';
import {getTheme, setTheme} from "../utils/colors";
import {getDisplayName} from "../utils/Config/helpers";

export const withChangeTheme = WrapperComponent => {
    class WithChangeTheme extends Component {
        state = {
            theme: getTheme(),
        };

        changeTheme = theme => {
            setTheme(theme);
            this.setState({theme: getTheme()});
        };

        render() {
            return (
                <WrapperComponent theme={this.state.theme} changeTheme={this.changeTheme} {...this.props}/>
            )
        }
    }


    WithChangeTheme.displayName = `withChangeTheme(${getDisplayName(WrapperComponent)})`;

    return WithChangeTheme;
};
