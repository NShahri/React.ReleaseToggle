import React from 'react';
import flatten from './core/flatten';
import Context from './core/context';

class ReleaseToggleApp extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    getChildContext() {
        let {children, styles, features, ...otherProps} = this.props; 
        let parentFeatures = ((this.context || {}).releaseToggleContext || {}).features || {};
        let releaseToggleContext = new Context(flatten(parentFeatures, features, otherProps));
        return { releaseToggleContext };
    }

    render() {
        let {children, styles, className} = this.props;

        return (children.length ? <div className={className} styles={styles}>{children}</div> : children);
    }
}

ReleaseToggleApp.propTypes = {
    children: React.PropTypes.node,
    features: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    className: React.PropTypes.string.isRequired,
    styles: React.PropTypes.object.isRequired
};

ReleaseToggleApp.defaultProps = {
    className: '',
    styles: {}
};

ReleaseToggleApp.childContextTypes = {
    releaseToggleContext: React.PropTypes.instanceOf(Context)
};

ReleaseToggleApp.contextTypes = {
    releaseToggleContext: React.PropTypes.instanceOf(Context)
};

export default ReleaseToggleApp;