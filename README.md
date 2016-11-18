# React.RT
Feature Flag is a technique to turn some functionality of your application off, via configuration, without deploying new code. Feature flags play key part in CI scheme where features are constantly being deployed but not necessarily "released" into production.

React.RT is a library which implements extendable feature flag as React component.

For more information see the following links: 
- [What is a "feature flag"](http://stackoverflow.com/questions/7707383/what-is-a-feature-flag)
- [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle)

## Installation
You can install React.RT with npm:

```
npm install react.rt --save
```

And it's just as easy with bower:
``` 
bower install react.rt --save
```

## Importing

### ES2015

```javascript
import Toggle from 'react.rt';
```
or

```javascript
import {ToggleReleaseApp, ToggleRelease, withReleaseToggleContext, CurrentTogglesView} from 'react.rt';
```

### AMD
```javascript
var Toggle = require('react.rt');
```

## Basic Usage
You can use ReleaseToggleApp to define enabled/disabled features for all children.

You can use ReleaseToggle to check if features are matched to specified condition.

```javascript
<ReleaseToggleApp feature1={true} feature2={false} feature3={true}>
    <p> ReleaseToggleApp only define context of existing features for all children</p>
    <ReleaseToggle feature1={true} feature2={false} feature3={true}>
        <p>This message is visible when feature1 and feature3 are enabled and feature2 is disabled</p>
    </ReleaseToggle>
</ReleaseToggleApp>
```

### Pass context as property to React component
In order to more easily access the toggle context object, a withReleaseToggleContext component has been added. 
It is usable on any React Component of any type.

This component uses React context internally and as long as React supports this.context in its current form, any code written for that API will continue to work.
We think it is nicer and easier to use withReleaseToggleContext which hide the implementation details.

```javascript
import React from 'react';
import { withReleaseToggleContext } from 'release-toggle';

class MyView extends React.Component{
    let features = this.props.releaseToggleContext.features;
    let result = Object.keys(features).map(m=>m+'='+features[m]).join(',');
    render() {
        return (<div>{result}</div>);
    }
}

export default withReleaseToggleContext(MyView)
```

### nested contexts

You can use ReleaseToggleApp nested in another ReleaseToggleApp. In the following sample nested ReleaseToggleApp will override feature2 and message should be visisble.

```javascript
<ReleaseToggleApp feature1={true} feature2={false} feature3={true}>
    <ReleaseToggleApp feature2={true}>
        <ReleaseToggle feature1={true} feature2={true} feature3={true}>
            <p>This message is visible when feature1, feature2 and feature3 are enabled</p>
        </ReleaseToggle>
    </ReleaseToggleApp>
</ReleaseToggleApp>
```

### Display Context

If you want to display context on your application you can use CurrentTogglesView. 

We do not recomment to use this component in your production release, but it can be useful for testing purposes.

```javascript
<CurrentTogglesView />
```

### API
The ReleaseToggleApp and ReleaseToggle components take any number of arguments which can be a string or object. also property 'features' value will process as object of features.  

Arrays will be recursively flattened as per the rules above:
The argument 'foo' is short for { foo: true }. If the value of the key is false, it won't be included in the output.


### Other ways of ReleaseToggle usage
```javascript
<ReleaseToggle features={{feature1:true, feature2:false, feature3:true}}>
        <p>This message is visible when feature1 and feature3 are enabled and feature2 is disabled</p>
</ReleaseToggle>

<ReleaseToggle features={['feature1', 'feature3']} feature2={false}>
        <p>This message is visible when feature1 and feature3 are enabled and feature2 is disabled</p>
</ReleaseToggle>
```

### Other ways of using releaseToggleApp
```javascript
<ReleaseToggleApp features={{feature1:true, feature2:false, feature3:true}}>
</ReleaseToggleApp>

<ReleaseToggleApp features={['feature1', 'feature3']} feature2={false}>
</ReleaseToggleApp>
```


### Future works
1. Documentation (in progress)
1. Moe unit tests (in progress)
1. Using build server
1. Fixing bower package
1. Publishing es6 and umd of each modules which can be used in any other application build process
1. Using cookies to get list of features
1. Using query string for list of features
1. Implementing versioning for features, ie: feature1: '~1.0.2'
1. Supporting different engine for checking features
1. Server side supporting

### Contributing
Use [GitHub issues](https://github.com/NShahri/React.ReleaseToggle/issues) for requests.

I actively welcome pull requests.
I expect project participants to adhere to [Code of Conduct](). 
Please read the full text so that you can understand what actions will and will not be tolerated.

## Polyfills needed to support older browsers

`Array.isArray`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) for details about unsupported older browsers and a simple polyfill.

`Object.keys`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) for details about unsupported older browsers and a simple polyfill.

`Array.map`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) for details about unsupported older browsers and a simple polyfill.

`Object.assign`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) for details about unsupported older browsers and a simple polyfill.

`Array.find`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) for details about unsupported older browsers and a simple polyfill.

## License

[MIT](LICENSE). Copyright (c) 2016.

## Authors

* [Nima Shahri](https://github.com/NShahri)