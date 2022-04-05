import { useState, useRef } from "react";
import Head from "next/head";
import FormCard from "../../../src/components/order-card/FormCard";
import {
    CardSettings,
    CardProfile,
    DeliveryAddress,
    ShippingMethod,
    ReviewOrder
  } from "../../../src/components/order-card/forms";

  const OrderCards = () => {
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return    (
    <div>
    <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
      {formStep >= 0 && (
        <CardSettings formStep={formStep} nextFormStep={nextFormStep} />
      )}
      {formStep >= 1 && (
        <CardProfile formStep={formStep} nextFormStep={nextFormStep} />
      )}
      {formStep >= 2 && (
        <DeliveryAddress formStep={formStep} nextFormStep={nextFormStep} />
      )}
        {formStep >= 3 && (
        <ShippingMethod formStep={formStep} nextFormStep={nextFormStep} />
      )}
      {formStep > 4 && <ReviewOrder />}
    </FormCard>
  </div>
    )

  }

  export default OrderCards