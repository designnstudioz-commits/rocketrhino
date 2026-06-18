import InteractiveDesktop from "./components/InteractiveDesktop";
import { Suspense, Component, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: "red", background: "#fff", fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
          <h2>Render Error</h2>
          <p>{(this.state.error as Error).message}</p>
          <p>{(this.state.error as Error).stack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#05060a]">
      <div className="w-full relative">
        <ErrorBoundary>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen text-white">
              Loading...
            </div>
          }>
            <InteractiveDesktop />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
