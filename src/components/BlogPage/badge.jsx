// badge.jsx
function Badge({ className = "", variant = "default", children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium";

  const variants = {
    default: "border-transparent bg-blue-400 text-blue-950",
    secondary: "border-transparent bg-gray-200 text-gray-800",
    destructive: "border-transparent bg-red-500 text-white",
    outline: "text-white border-white",
  };

  const variantStyle = variants[variant] || variants.default;

  return (
    <span
      className={`${baseStyles} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge };
