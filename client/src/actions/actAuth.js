import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }

  //   REDUX AUTH EXPLAIN
  /** Pertama akan dimulai di form UI dapatkan data dari inputan user
   * dengan handlesubmit entah itu sigini atau signup sama saja
   * ketika diklik salah satu dari function di handle submit,
   * maka selanjutnya akan dikaukan dispatch(REDUX) yang
   * membawa dua parameter(props) fromData dan history
   * setelah itu redux akan memenej mengarahkan ke action auth
   * sesuai function pilihan dari handle submit
   * selanjutnya misal pilihan signin maka akan diarahkan
   * ke API signin dengan parameter formData,
   * ketika di API, API akan meminta data dari database
   * dicocok kan di backend apakah memliki hak untuk melakukan akses dll
   */
};
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
