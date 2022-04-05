import { useRef, useContext } from "react";
import { Form } from "@unform/web";
import { useFormContext } from "../../../../context"
import styles from "../../../../styles/styles.module.scss"
import Input from './input-fields/Input';
export default function CardSettings({ formStep, nextFormStep }) {
  const { setFormValues } = useFormContext();
  const formRef = useRef();
  async function handleSubmit(data) {
    try {
    //   formRef.current.setErrors({});
    //   Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
    }
  }

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Card Details</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Fleet 
          <select id="fleet" name="fleets">
            <option value="JB HOLLANDCONSTRUCTION,TRKING 2305436">JB HOLLANDCONSTRUCTION,TRKING 2305436</option>
            </select>
          </label>
        </div>
        <div>
          <label>Vehicle Name 
          <Input id="vehicle-name" name="vehicle-name" type="text" />
          </label>
        </div>
        <div>
          <label>Vehicle Number 
          <Input id="vehicle-number" name="vehicle-number" type="text" />
          </label>
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}