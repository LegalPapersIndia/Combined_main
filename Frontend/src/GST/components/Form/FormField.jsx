// src/components/Form/FormField.jsx

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  options = [],           
  children,               
  className = '',
  ...props
}) {
  const baseInputClass = `
    w-full px-4 py-3 border border-gray-300 rounded-xl 
    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
    transition-all duration-200 bg-white
    placeholder:text-gray-400
  `;

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700">
          {label} 
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseInputClass}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((opt, index) => (
            <option 
              key={index} 
              value={opt.value || opt}
            >
              {opt.label || opt}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={`${baseInputClass} resize-y min-h-[100px]`}
          {...props}
        />
      ) : type === 'radio' ? (
        <div className="flex flex-wrap gap-6">{children}</div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseInputClass}
          {...props}
        />
      )}
    </div>
  );
}