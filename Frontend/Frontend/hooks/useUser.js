import axios from "axios";
import { ApiEndPoint } from "../helpers/common";
import axios from "axios";

const useUser = () => {
    const login = useCallback(
        async (data) => {
          await axios
            .post(ApiEndPoint + "/user/login", {
              email: data.email,
              password: data.password,
            })
            .then(function (response) {
              console.log("responseresponse" + response);
            })
            .catch(function (error) {
              console.log("error--->", error);
            });
        },
        [axios]
      );

    return {
      login
    };
};
  
export default useUser;
  