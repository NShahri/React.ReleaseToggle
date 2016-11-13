import React from 'react';
import withReleaseToggleContext from './withReleaseToggleContext.jsx';
import Context from './core/context';

class CurrentTogglesView extends React.Component {
    render() {
        let features = this.props.releaseToggleContext.features;

        return (
            <div>
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