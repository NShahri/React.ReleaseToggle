import React from 'react';
import withReleaseToggleContext from './withReleaseToggleContext.jsx';
import Context from './core/context';

class CurrentTogglesView extends React.Component {
    render() {
        let features = this.props.releaseToggleContext.features;

        return (
            <div style="left: 168px; top: 0px; position: absolute; background-color: rgb(238, 238, 238); box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px; border: 1px solid rgb(204, 204, 204); border-radius: 3px; margin-left: -5px; margin-top: 5px; padding: 10px;">
                {Object.keys(features).map(key => <div key={key}>{key}:{features[key].toString() }</div>)}
            </div>
        );
    }
}

CurrentTogglesView.propTypes = {
    releaseToggleContext: React.PropTypes.instanceOf(Context)
};

CurrentTogglesView.defaultProps = {
    releaseToggleContext: Context.empty()
};

export default withReleaseToggleContext(CurrentTogglesView);