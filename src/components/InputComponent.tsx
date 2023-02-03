interface InputComponentProps {
  styleTag: string;
  inputLabel: string;
}

function InputComponent({ styleTag, inputLabel }: InputComponentProps) {
  return (
    <div className={styleTag}>
      <label>{inputLabel}</label>
      <input></input>
    </div>
  );
}

export default InputComponent;
