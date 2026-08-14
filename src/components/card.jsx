import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a contained box
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {string} variant - Card style variant
 */
function Card({ children, className = '', variant = 'default' }) {
  const variantClass =
    variant === 'primary'
      ? 'bg-white border-green-300'
      : variant === 'success'
      ? 'bg-green-100 border-green-300'
      : 'bg-gray-200 border-gray-300';

  return (
    <div
      className={`${variantClass} p-6 lg:p-8 rounded-lg border-2 text-gray-700 shadow-sm text-base lg:text-lg ${className}`.trim()}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'success']),
};

export default Card;
