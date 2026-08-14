import PropTypes from 'prop-types';

/**
 * Container component for centering and containing page content
 * @param {React.ReactNode} children - Container content
 * @param {string} className - Additional CSS classes
 */
function Container({ children, className = '' }) {
  return (
    <div className={`flex w-full flex-col min-h-[calc(100vh-68px)] items-center justify-center ${className}`.trim()}>
      <main className="flex justify-center w-full items-center py-8">
        {children}
      </main>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
