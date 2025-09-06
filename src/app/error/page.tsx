import Link from "next/link";

const ErrorPage = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>
        An unexpected error has occurred. Please try refreshing the page or go
        back to the homepage.
      </p>
      <Link href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
