import { useRef } from "react";
import styles from "../../../../styles/styles.module.scss"
import { Form } from "@unform/web";
import { useFormContext } from "../../../../context"

export default function ShippingMethod({ formStep, nextFormStep }) {
  const { setFormValues } = useFormContext();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
    //   formRef.current.setErrors({});
    //   // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
    }
  }

  return (
    <div className={formStep === 3 ? styles.showForm : styles.hideForm}>
      <h2>Select Shipping Method</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
      <div>
          <input type="radio" id="4" value="4" name="shipping" />
          <label htmlFor="4">Standard</label>
        </div>
        <div>
          <input type="radio" id="3" value="3" name="shipping" />
          <label htmlFor="3">Expedited</label>
        </div>
        <div>
          <input type="radio" id="2" value="2" name="shipping" />
          <label htmlFor="2">Overnight</label>
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}