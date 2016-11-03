import React from 'react';
import withReleaseToggle from './withReleaseToggle.jsx';

class TestComponent extends React.Component {
    render() {
        
        let nima = Object.keys(this.props.releaseToggleContext.features).map(m=>m+'='+this.props.releaseToggleContext.features[m]).join(',');
        return (
            <div>
                NNNNNNNNN
                {this.displayName}
                {nima}
            </div>
        );
    }
}

export default withReleaseToggle(TestComponent);