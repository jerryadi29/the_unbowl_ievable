/* Reusable Button component using TailwindCSS */

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
}) {
  const base =
    "rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {loading && (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
      )}
      {children}
    </button>
  );
}
