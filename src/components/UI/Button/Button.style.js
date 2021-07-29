import styled from "styled-components";
import { colors, BUTTON_TYPES } from "../../../const/const";

export const ButtonElement = styled.div`
  display: inline-block;
  padding: 8px 2.4rem;
  border-radius: 2rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  ${({ buttonType }) => {
    switch (buttonType) {
      case BUTTON_TYPES.PRIMARY:
        return `
            background-color: ${colors.red.primary};
            border: 1px solid ${colors.red.primary};
            color: ${colors.white};
        `;
      case BUTTON_TYPES.SECONDARY:
        return `
            border: 1px solid ${colors.red.primary};
            color: ${colors.red.primary};
        `;
      default:
        return `
            color: ${colors.red.primary};
        `;
    }
  }};
`;
