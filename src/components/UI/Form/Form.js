import React from "react";
import { Page, FormWrapper } from "./Form.style";

export const Form = ({ children }) => {
  return (
    <Page>
      <FormWrapper>{children}</FormWrapper>
    </Page>
  );
};
