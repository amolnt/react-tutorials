import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ChildComponent = lazy(() => import("./ChildComponent")); 
import ErrorFallback from "./ErrorBoundry";

const LazyLoadingParentComponent = () => {
    return <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
        <h1>Parent Component</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<div>Loading.....</div>}>
                <ChildComponent />
            </Suspense>
        </ErrorBoundary>
    </div>
}

export default LazyLoadingParentComponent;