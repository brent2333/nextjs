import { useRef } from "react";
import { useFormData } from "../../../../context";
import { Form } from "@unform/web";

import styles from "../../../../styles/styles.module.scss"

export default function CardSettings({ formStep, nextFormStep }) {
  // const { setFormValues } = useFormData();
  console.log('STYLES', styles);

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
    //   if (err instanceof yup.ValidationError) {
    //     console.log(err.inner);
    //     // Validation failed - do show error
    //     err.inner.forEach((error) => {
    //       errors[error.path] = error.message;
    //     });
    //     formRef.current.setErrors(errors);
    //   }
    }
  }

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Card Details</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <input type="text" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}