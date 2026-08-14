import PropTypes from 'prop-types';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../constants/ui';

/**
 * Reusable Button component
 * @param {string} children - Button text content
 * @param {string} variant - Button style variant (primary, secondary, default)
 * @param {string} size - Button size (small, medium, large)
 * @param {function} onClick - Click handler function
 * @param {string} className - Additional CSS classes
 * @param {boolean} disabled - Disable button
 */
function Button({
  children = 'Button',
  variant = 'default',
  size = 'medium',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseClass = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.default;
  const sizeClass = BUTTON_SIZES[size] || BUTTON_SIZES.medium;
  const finalClass = `${baseClass} ${sizeClass} ${className} disabled:opacity-50 disabled:cursor-not-allowed`.trim();

  return (
    <button
      className={finalClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;