import PropTypes from "prop-types";

export default function FilterButton({ content, selected }) {
  return (
    <button
      className={`mx-1 border-dotted ${
        selected ? "bg-gray-700 text-white border-white" : "border-black"
      } border-2  px-5 py-1 text-sm font-semibold  rounded-lg`}
    >
      {content}
    </button>
  );
}
// Prop validation using PropTypes
FilterButton.propTypes = {
  content: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
