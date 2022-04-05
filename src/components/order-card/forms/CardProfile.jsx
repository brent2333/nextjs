import { useRef } from "react";
import { Form } from "@unform/web";
import { useFormContext } from "../../../../context"
import Input from './input-fields/Input';

import styles from "../../../../styles/styles.module.scss"


export default function CardProfile({ formStep, nextFormStep }) {
  const { setFormValues } = useFormContext();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
    //   formRef.current.setErrors({});
    //   // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
      console.log('FORM DATA', data);

    } catch (err) {
      const errors = {};
      // Validation failed - do show error
    }
  }

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Card Profile</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input type="radio" id="3626869" value="3626869" name="profile" />
          <label htmlFor="3626869">Driver name</label>
        </div>
        <div>
          <Input type="radio" id="9977869" value="9977869" name="profile" />
          <label htmlFor="9977869">Diesel Box Truck</label>
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}