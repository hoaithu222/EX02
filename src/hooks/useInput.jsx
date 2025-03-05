import { useState } from "react";

export default function useInput({ initialValue }) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    const [name, value] = e.target;
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleReset = () => {
    setValue(initialValue);
  };
  return { value, handleChange, handleReset };
}
