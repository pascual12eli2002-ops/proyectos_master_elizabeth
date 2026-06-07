function InputNumber({ value, onChange }) {
  return (
    <input
      type="number"
      min="1"
      max="100"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Ingresa un número"
    />
  );
}

export default InputNumber;