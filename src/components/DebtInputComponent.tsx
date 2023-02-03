import "../styles/DebtInputComponent.scss";

function DebtInputComponent() {
  return (
    <div className="debt-input-component-container">
      <h4 className="debt-input-component-title">Input Debt</h4>
      <div className="debt-name-input">
        <label>Debt Name</label>
        <input></input>
      </div>
      <div className="debt-total-due-input">
        <label>Total Amount Due</label>
        <input></input>
      </div>
      <div className="debt-monthly-payment-input">
        <label>Monthly Payment</label>
        <input></input>
      </div>
      <div className="debt-apr-input">
        <label>APR</label>
        <input></input>
      </div>
      <div className="debt-input-spacer"></div>
      <button className="debt-input-cancel">Cancel</button>
      <button className="debt-input-save">Save Debt</button>
    </div>
  );
}

export default DebtInputComponent;
