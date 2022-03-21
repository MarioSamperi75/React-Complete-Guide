import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // it will be triggered automatically whenever one of the child component throws an error
  // child component: you have to wrap some other code with a ErrorBoundary component
  // the method set the has error state as true
  // we will render conditionally the children or en error depending on this state

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
