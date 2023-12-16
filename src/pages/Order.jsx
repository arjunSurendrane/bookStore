import ErrorBoundary from "../components/Errorboundary";
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
