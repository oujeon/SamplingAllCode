// data-plugins="transform-es2015-modules-umd" 이게 있으면 아래의 코드가 에러나지 않는다. 다만
// router는 작동되지 않고  const { HashRouter, NavLink, Route } = ReactRouterDOM;을 쓰거나
// <ReactRouterDOM.HashRouter>에 써야 한다.
// import {sample } from "./sample.js"; 이것은 사용가능하다.
// import {BrowserRouter,  NavLink} from 'react-router-dom';

// 아래의 주석을 풀면 ReactRouterDOM.HashRouter 이거 대신에 HashRouter을 쓸수 있다.
// data-plugins="transform-es2015-modules-umd" 이거 없이도 에러나지 않는다.
// react-router-dom안에 맨 마지막에 보며서 사용가능한 객체가 나열 되어 있다.
// const { HashRouter, NavLink, Route } = ReactRouterDOM;

// Component
class ProductShortInfo extends React.Component {
  render() {
    return (
      <div className="product">
        <h3>Samsung Galaxy S9</h3>
        <p>Price: $900</p>
      </div>
    );
  }
}
// Component
class ProductFeature extends React.Component {
  render() {
    return <h3>Some Features of Samsung Galaxy S9!</h3>;
  }
}
// Component
class ProductImages extends React.Component {
  render() {
    return <h3>Some Images of Samsung Galaxy S9</h3>;
  }
}
// Component
class ProductComments extends React.Component {
  render() {
    return <h3>Some Customer Comments</h3>;
  }
}
//
class Product extends React.Component {
  render() {
    return (
      <ReactRouterDOM.HashRouter>
        <div>
          <ProductShortInfo />
          <div className="product-nav">
            <ReactRouterDOM.NavLink exact to="/" activeClassName="selected">Feature</ReactRouterDOM.NavLink>
            <ReactRouterDOM.NavLink exact to="/images" activeClassName="selected">Images</ReactRouterDOM.NavLink>
            <ReactRouterDOM.NavLink to="/comments" activeClassName="selected">Comments</ReactRouterDOM.NavLink>
          </div>
          <div className="route-place">
            <ReactRouterDOM.Route exact path="/" component={ProductFeature} />
            <ReactRouterDOM.Route exact path="/images" component={ProductImages} />
            <ReactRouterDOM.Route path="/comments" component={ProductComments} />
          </div>
        </div>
      </ReactRouterDOM.HashRouter>
    );
  }
}
//
class App extends React.Component {
  render() {
    return <Product />;
  }
}

// Render
ReactDOM.render(<App />, document.querySelector("#app"));
