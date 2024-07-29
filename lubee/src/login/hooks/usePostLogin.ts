import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";
import { setToken } from "login/utils/token";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 추적

  useEffect(() => {
    if (KAKAO_CODE) {
      api
        .post(`api/users/kakao/simpleLogin?code=${KAKAO_CODE}`)
        .then((res) => {
          const data = res.data as loginResProps; // AxiosResponse의 data를 loginResProps로 단언
          setToken(data.response.accessToken);
          setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
          console.log("로그인 성공");
          console.log("로그인 데이터", data);
        })
        .catch((err) => {
          const errorData = err.response.data as loginErrorProps; // 에러 응답 데이터 단언
          if (errorData.success_or_error_code.status === 404) {
            setToken(errorData.response.accessToken);
            navigate("/onboarding");
          } else {
            navigate("/error");
            console.log(KAKAO_CODE);
          }
        });
    }
  }, [KAKAO_CODE, navigate]);

  // 403에러 캐치해서 로딩페이지 띄우기
  // useGetCouplesInfo 훅은 isLoggedIn이 true일 때만 쿼리를 실행
  // 로그인 토큰이 설정된 이후에만 GetCouplesInfo API 호출을 해서 403 에러를 방지
  const { data: couplesInfoResponse, isLoading, error } = useGetCouplesInfo(isLoggedIn); // 로그인 상태를 의존성으로 추가

  useEffect(() => {
    if (!isLoading && couplesInfoResponse) {
      console.log("커플정보 얻기", couplesInfoResponse.success);
      if (couplesInfoResponse.success) {
        console.log(couplesInfoResponse);
        navigate("/loading");
      } else {
        navigate("/onboarding");
      }
    } else if (!isLoading && error) {
      console.log("커플 정보 가져오기 실패", error);
      navigate("/error");
    }
  }, [isLoading, couplesInfoResponse, error, navigate]);
};

export default usePostLogin;
