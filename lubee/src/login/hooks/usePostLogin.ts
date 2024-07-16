import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .post("서버가 주는 링크", null, {
        headers: {
          Authorization: `Bearer ${KAKAO_CODE}`,
        },
      })
      .then((res: loginResProps) => {
        console.log("로그인 성공");
        console.log(res);
        // 로그인완료되고 메인뷰로 이동
      })
      .catch((err: loginErrorProps) => {
        if (err.response.data.code === 404) {
          navigate("/onboarding");
        } else {
          navigate("/error");
        }
      });
  }, []);
};

export default usePostLogin;
