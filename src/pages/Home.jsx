import ErrorBoundary from "../components/ErrorBoundary";
import HomeSections from "../sections/home";

export default function Home() {
  return (
    <div>
      <ErrorBoundary>
        <HomeSections />
      </ErrorBoundary>
    </div>
  );
}
