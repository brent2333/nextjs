import { useRef } from "react";
import { useFormData } from "../../../../context";
import styles from "../../../../styles/styles.module.scss"
import { Form } from "@unform/web";


export default function ReviewOrder({ formStep, nextFormStep }) {
  // const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
    //   formRef.current.setErrors({});

    //   await schema.validate(data, {
    //     abortEarly: false,
    //   });
    //   // Validation passed - do something with data
      // setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner);
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <div className={formStep === 4 ? styles.showForm : styles.hideForm}>
      <h2>Review Your Order</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
        </div>
        <button type="submit">Place Order</button>
      </Form>
    </div>
  );
}