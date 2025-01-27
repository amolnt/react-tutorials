function ErrorFallback({error, resetErrorBoundry}) {
    return <div role="alert">
        <p>Something went wrong</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundry}>Try Again</button>
    </div>
}

export default ErrorFallback;