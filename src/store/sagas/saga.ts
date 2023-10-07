import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataHighlights } from "../../service/keyhighlightsService";
import { FETCH_DATA_REQUEST, fetchDataSuccess } from "./action";

function* fetchDataSaga(): any {
  try {
    const response = yield call(fetchDataHighlights);

    yield put(fetchDataSuccess(response));
  } catch (error) {
    console.log("error", error);
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default watchFetchData;
