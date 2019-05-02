// Airbnb React/JSX Style Guide





// 1. Basic Rules
//  - Only include one React component per file.
//      - However, multiple Stateless, or Pure, Components are allowed per file. eslint: react/no-multi-comp
//  - Always use JSX syntax.
//  - Do not use React.createElement unless you're initializing the app from a file that is not JSX
//  - react/forbid-prop-types will allow arrays and objects only if it is explicitly noted what array and object contains, using arrayOf, objectOf, or shape.


// 2. Class vs React.createClass vs stateless
// 
// - If you have internal state and/or refs, prefer class extends React.Component over React.createClass . eslint: react/prefer-es6-class react/prefer-stateless-function


// ex)
// bad
const Listing = React.createClass({
    // ... 
    render() {
        return <div>{this.state.hello}</div>;
    }
});

// good
class Listing extends React.Component {
    // ... 
    render() {
        return <div>{this.state.hello}</div>
    }
}

// - And if you don't have state or refs, prefer normal functions (not arrow functions) over class:

// bad
class Listing extends React.Component {
    render() {
        return <div>{this.props.hello}</div>
    }
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => {
    <div>{hello}</div>
};

// good
function Listing({ hello }) {
    return <div>{hello}</div>;
}

// 3. Mixings
// 
//  DO NOT USE MIXINS
// Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity.
// Most use cases for mixins can be accomplished in better ways via components, higher-order components, or itility modules.

// https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html