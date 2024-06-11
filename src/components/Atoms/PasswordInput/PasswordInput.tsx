import Style from "./PasswordInput.module.css";

function PasswordInput() {
  return (
    <div className={Style.inputWrapper}>
      <input placeholder="Password"></input>
      <button></button>
    </div>
  );
}
export default PasswordInput;
