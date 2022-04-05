import { useRef } from "react";
import styles from "../../../../styles/styles.module.scss"
import { Form } from "@unform/web";
import { useFormContext } from "../../../../context"

export default function ReviewOrder({ formStep, nextFormStep }) {
  const { data } = useFormContext();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
    //   formRef.current.setErrors({});
    // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
    }
  }

  return (
    <div className={formStep === 4 ? styles.showForm : styles.hideForm}>
      <h2>Review Your Order</h2>
      <pre>{JSON.stringify(data)}</pre>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <button type="submit">Place Order</button>
      </Form>
    </div>
  );
}