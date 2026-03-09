import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error?.message ?? 'Unknown render error' };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('[ErrorBoundary] Caught render error:', error.message);
    console.error('[ErrorBoundary] Component stack:', info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback !== undefined) return this.props.fallback;
      return (
        <div className="flex flex-col items-center justify-center py-20 gap-4 text-center px-8">
          <p className="text-[#A78BFA] font-semibold">Content failed to load</p>
          <p className="text-[#9CA3AF] text-xs font-mono bg-[#13121E] px-4 py-2 rounded-lg max-w-sm break-all">
            {this.state.errorMessage}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, errorMessage: '' })}
            className="px-5 py-2 bg-[#A78BFA]/20 text-[#A78BFA] rounded-full text-sm border border-[#A78BFA]/30"
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
