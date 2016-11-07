# React.ReleaseToggle
React Release Toggle

## how to install

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
