import React from 'react';
import Context from './core/context';

export default function(Component){

    const WithReleaseToggleContext = (props, context) => {
        return <Component {...props} releaseToggleContext={context.releaseToggleContext}/>;
    };

    WithReleaseToggleContext.contextTypes = {
        releaseToggleContext: React.PropTypes.instanceOf(Context)
    };

    return WithReleaseToggleContext;
}