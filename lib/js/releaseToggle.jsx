import React from 'react';
import flatten from './core/flatten';
import Context from './core/context';

const ReleaseToggle = (props, context) => {
    let {children, features, ...otherProps} = props;
    
    if(context.releaseToggleContext.checkFeatures(flatten(features, otherProps))){
        return (<div>{children}</div>);
    }

    return null;
};

ReleaseToggle.propTypes = {
    children: React.PropTypes.node,
    features: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
};

ReleaseToggle.contextTypes = {
    releaseToggleContext: React.PropTypes.instanceOf(Context)
};

export default ReleaseToggle;