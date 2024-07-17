import { ToastContainer } from "react-toastify";
import { styled } from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;

  .Toastify__toast {
    width: 15rem;
    height: 5.2rem;
    border-radius: 57px;
    background-color: ${({ theme }) => theme.colors.yellow_50};
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
    ${({ theme }) => theme.fonts.Body_2};
  }
`;