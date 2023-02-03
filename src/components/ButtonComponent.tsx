interface ButtonComponentProps {
  styleTag: string;
  buttonText: string;
}

function ButtonComponent({ styleTag, buttonText }: ButtonComponentProps) {
  return <button className={styleTag}>{buttonText}</button>;
}

export default ButtonComponent;
