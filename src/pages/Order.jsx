import ErrorBoundary from "../components/ErrorBoundary";
import OrderSections from "../sections/order";

export default function Order() {
  return (
    <div>
      <ErrorBoundary>
        <OrderSections />
      </ErrorBoundary>
    </div>
  );
}
