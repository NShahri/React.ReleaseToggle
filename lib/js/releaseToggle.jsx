import React from 'react';
import flatten from './core/flatten';
import Context from './core/context';

const ReleaseToggle = (props, context) => {
    let {children, features, ...otherProps} = props;
    
    let releaseToggleContext = null;
    if(!context || !context.releaseToggleContext){
        releaseToggleContext = Context.empty();
    }
    else{
        releaseToggleContext = context.releaseToggleContext;
    }

    if(releaseToggleContext.checkFeatures(flatten(features, otherProps))){
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