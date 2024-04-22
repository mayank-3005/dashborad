const SelectField = ({ name, id, value, onChange, className, options }) => (
  <select
    name={name}
    id={id}
    value={value}
    onChange={onChange}
    className={className}
  >
    {options.map(({ value, label }, index) => (
      <option key={index} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default SelectField;
