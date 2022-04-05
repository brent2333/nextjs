import { useRef } from "react";
import styles from "../../../../styles/styles.module.scss"
import { Form } from "@unform/web";
import { useFormContext } from "../../../../context"
import Input from './input-fields/Input';

export default function DeliveryAddress({ formStep, nextFormStep }) {
  const { setFormValues } = useFormContext();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
    //   formRef.current.setErrors({});
    //   Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
      console.log('FORM DATA', data);

    } catch (err) {
      const errors = {};
      // Validation failed - do show error
    }
  }

  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>Delivery Details</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
      <div>
          <Input type="radio" id="3626869" value="3626869" name="address" />
          <label htmlFor="3626869">Default Address</label>
        </div>
        <div>
          <Input type="radio" id="9977869" value="2092 Hwy 9 West - DECORAH, IA 52101" name="address" />
          <label htmlFor="9977869">Diane Krentz - 2092 Hwy 9 West - DECORAH, IA 52101</label>
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}