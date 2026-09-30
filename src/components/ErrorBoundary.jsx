// src/components/ErrorBoundary.jsx
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // runs when a child throws — update state so the next render shows the fallback
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // runs after the error — good place to log it somewhere
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Please refresh the page.</p>;
    }
    return this.props.children;
  }
}
