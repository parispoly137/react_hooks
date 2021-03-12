export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    const { target: { value } } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};;

// User가 입력하는 데이터에 조건을 붙인다.
