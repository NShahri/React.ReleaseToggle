# React.ReleaseToggle
Feature Flag is a technique to turn some functionality of your application off, via configuration, without deploying new code. Feature flags play key part in CI scheme where features are constantly being deployed but not necessarily "released" into production.

React.ReleaseToggle is a library which implments extendable feature flag as React component.

For more infomration use the followinf links:
- [What is a "feature flag"](http://stackoverflow.com/questions/7707383/what-is-a-feature-flag)
- [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle)

## Installation
If you'd like to use bower, it's as easy as:

``` 
bower install React.ReleaseToggle --save
```
And it's just as easy with npm:

```
npm install React.ReleaseToggle --save
```

## how to use

### es2015
```javascript
import Toggle, {ToggleReleaseApp, ToggleRelease, withReleaseToggleContext} from 'toggle-release';
```

### AMD
```javascript
var Toggle = require('toggle-release');
var ToggleReleaseApp = require('toggle-release/toggleReleaseApp');
var ToggleRelease = require('toggle-release/toggelRelase');
```

## Usage
```javascript
<ReleaseToggleApp feature1={true} feature2={false} feature3={true}>
    <p> ReleaseToggleApp only define context of exisiting features for all children</p>
    <ReleaseToggle feature1={true} feature2={false} feature3={true}>
        <p>This message is visible when feature1 and feature3 are enabled and feature2 is disabled</p>
    </ReleaseToggle>
</ReleaseToggleApp>
```

### defining features
The ReleaseToggleApp and ReleaseToggle components take any number of arguments which can be a string or object.
Property 'features' value will process as  
Arrays will be recursively flattened as per the rules above:
The argument 'foo' is short for { foo: true }. If the value of the key is falsy, it won't be included in the output.

You can use ReleaseToggleApp to define enabled/disabled features for all children.
You can use ReleaseToggle to check if features are matched to specified condition

### Other ways of ReleaseToggle usage
```javascript
<ReleaseToggle features={{feature1:true, feature2:false, feature3:true}}>
        <p>This message is visible when feature1 and feature3 are enabled and feature2 is disabled</p>
</ReleaseToggle>

<ReleaseToggle features={['feature1', 'feature3']} feature2={false}>
        <p>This message is visible when feature1 and feature3 are enabled and feature2 is disabled</p>
</ReleaseToggle>
```

### Pass context as property to React component
In order to more easily access the toggle context object, a withReleaseToggleContext component has been added. 
It is usable on any React Component of any type.

This component uses React context internally and as long as React supports this.context in its current form, any code written for that API will continue to work.
We think it is nicer and easier to use withReleaseToggleContext which hide the implementation details.

```javascript
import React from 'react';
import { withReleaseToggleContext } from 'release-toggle';

class Page extends React.Component{
    let features = this.props.releaseToggleContext.features;
    let result = Object.keys(features).map(m=>m+'='+features[m]).join(',');
    render() {
        return (<div>{result}</div>);
    }
}

export default withReleaseToggleContext(Page)
```
### Other ways of using releaseToggleApp
```javascript
<ReleaseToggleApp features={{feature1:true, feature2:false, feature3:true}}>
</ReleaseToggleApp>

<ReleaseToggleApp features={['feature1', 'feature3']} feature2={false}>
</ReleaseToggleApp>
```

### nested contexts

```javascript
<ReleaseToggleApp features={{feature1:true, feature2:false, feature3:true}}>
    <ReleaseToggleApp features={{feature1:true, feature2:false, feature3:true}}>
    </ReleaseToggleApp>
</ReleaseToggleApp>
```

### backlog
1. using cookies to get list of features
2. using query string for list of features
3. implmenting versioning for features, ie: feature1: '~1.0.2'
4. supporting different engine for checking features
5. server side supporting

Contributing

The main purpose of this repository is to continue to evolve React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### [Code of Conduct](https://code.facebook.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.


## Polyfills needed to support older browsers

`Array.isArray`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) for details about unsupported older browsers (e.g. <= IE8) and a simple polyfill.

`Object.keys`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) for details about unsupported older browsers (e.g. <= IE8) and a simple polyfill. This is only used in `dedupe.js`.

## License

[MIT](LICENSE). Copyright (c) 2016.

## Authors

* [Nima Shahri](https://github.com/NShahri)