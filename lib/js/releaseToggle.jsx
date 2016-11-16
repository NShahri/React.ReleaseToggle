import React from 'react';
import flatten from './core/flatten';
import Context from './core/context';
import warning from 'warning';

const ReleaseToggle = (props, context) => {
    let {children, className, features, ...otherProps} = props;

    let releaseToggleContext = null;
    if(!context || !context.releaseToggleContext){
        warning(false, 'Not defined context. Empty default context is used.', 'ReactCompositeComponent');
        releaseToggleContext = Context.empty();
    }
    else if(!context.releaseToggleContext.checkFeatures)
    {
        releaseToggleContext = Context.empty();
    }
    else{
        releaseToggleContext = context.releaseToggleContext;
    }

    if(releaseToggleContext.checkFeatures(flatten(features, otherProps))){
        return (<div className={className}>{children}</div>);
    }

    return null;
};

ReleaseToggle.propTypes = {
    children: React.PropTypes.node,
    features: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    className: React.PropTypes.string.isRequired
};

ReleaseToggle.defaultProps ={
    className: ''
};

ReleaseToggle.contextTypes = {
    releaseToggleContext: React.PropTypes.instanceOf(Context)
};

export default ReleaseToggle;