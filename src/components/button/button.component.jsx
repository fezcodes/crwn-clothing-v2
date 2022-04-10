/** default, inverted, google-sign-in */
import {
  ButtonBase,
  ButtonInverted,
  ButtonGoogleSignIn,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: ButtonBase,
    [BUTTON_TYPE_CLASSES.google]: ButtonGoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: ButtonInverted,
  }[buttonType]);

export const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
