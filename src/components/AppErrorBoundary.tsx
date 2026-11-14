import React, { type ErrorInfo, type ReactNode } from 'react';

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

export class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  declare readonly props: Readonly<AppErrorBoundaryProps>;
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[v0] Application render failed', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          role="alert"
          className="min-h-screen bg-[#ede7dd] text-[#1a1816] flex items-center justify-center p-6"
        >
          <section className="max-w-lg border border-[#d5cdc0] bg-[#faf7f2] p-8 text-center shadow-sm">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#7b6e54]">
              Application error
            </p>
            <h1 className="mt-3 font-headline text-2xl font-bold">VANTA could not load this page.</h1>
            <p className="mt-3 text-sm text-[#59544c]">
              The page encountered an unexpected rendering error. Reload to try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 bg-[#1a1816] px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-[#f5efe6] hover:bg-[#35322e]"
            >
              Reload page
            </button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
