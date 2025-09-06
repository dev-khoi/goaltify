
const ErrorPage = () => {
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Oops! Something went wrong.</h1>
            <p>
                An unexpected error has occurred. Please try refreshing the page or go back to the homepage.
            </p>
            <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
                Go to Homepage
            </a>
        </div>
    );
};

export default ErrorPage;