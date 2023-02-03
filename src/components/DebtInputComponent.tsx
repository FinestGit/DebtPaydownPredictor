import "../styles/DebtInputComponent.scss";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function DebtInputComponent() {
  return (
    <div className="debt-input-component-container">
      <h4 className="debt-input-component-title">Input Debt</h4>
      <InputComponent styleTag="debt-input" inputLabel="Debt Name" />
      <InputComponent styleTag="debt-input" inputLabel="Total Amount Due" />
      <InputComponent styleTag="debt-input" inputLabel="Monthly Payment" />
      <InputComponent styleTag="debt-input" inputLabel="APR" />
      <div className="debt-input-spacer"></div>
      <ButtonComponent styleTag="debt-button" buttonText="Cancel" />
      <ButtonComponent styleTag="debt-button" buttonText="Save Debt" />
    </div>
  );
}

export default DebtInputComponent;
