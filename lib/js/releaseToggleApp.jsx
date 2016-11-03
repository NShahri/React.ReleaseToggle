import React from 'react';
import flatten from './core/flatten';
import Context from './core/context';

class ReleaseToggleApp extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    getChildContext() {
        let {children, features, ...otherProps} = this.props; 
        let parentFeatures = ((this.context || {}).releaseToggleContext || {}).features || {};
        let releaseToggleContext = new Context(flatten(parentFeatures, features, otherProps));
        return { releaseToggleContext };
    }

    render() {
        let {children} = this.props;

        return (children.length ? <div>{children}</div> : children);
    }
}

ReleaseToggleApp.propTypes = {
    children: React.PropTypes.node,
    features: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
};

ReleaseToggleApp.childContextTypes = {
    releaseToggleContext: React.PropTypes.instanceOf(Context)
};

ReleaseToggleApp.contextTypes = {
    releaseToggleContext: React.PropTypes.instanceOf(Context)
};

export default ReleaseToggleApp;