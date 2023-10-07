// rootSaga.js
import { all } from "redux-saga/effects";
import watchFetchData from "./sagas/saga";

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
