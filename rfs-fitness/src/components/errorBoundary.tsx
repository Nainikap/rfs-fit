"use client"

import { Component } from "react";
import type { ReactNode } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;  // ← type it as Error | null, not just any
}

class ErrorBoundary extends Component<
  { children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState{
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: "red", fontSize:"32px" }}>Chart error: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;