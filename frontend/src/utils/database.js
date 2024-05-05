import { db } from "../contexts/AuthContext";
import {
  ref,
  set,
  push,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

const createNewDiary = async (
  user_id,
  date,
  study,
  healthy,
  sociality,
  sociability,
  mental,
  diary_text,
  diary_feedback
) => {
  const diaryRef = ref(db, `diary/${user_id}`);
  const newDiaryRef = push(diaryRef);
  set(newDiaryRef, {
    date,
    study,
    healthy,
    sociality,
    sociability,
    mental,
    diary_text,
    diary_feedback,
  });
};

const getAllDiary = async (user_id) => {
  const queryRef = ref(db, `diary/${user_id}`);
  const snapshot = await get(queryRef);

  const data = snapshot.val();
  if (data) {
    const dataArr = Object.values(data);
    return dataArr;
  } else {
    return [];
  }
};

const getDiaryDataByDate = async (user_id, date) => {
  const queryRef = query(
    ref(db, `diary/${user_id}`),
    orderByChild("date"),
    equalTo(date)
  );
  const snapshot = await get(queryRef);

  const data = snapshot.val();
  if (data) {
    const dataArr = Object.values(data);
    return dataArr;
  } else {
    return [];
  }
};

export { createNewDiary, getAllDiary, getDiaryDataByDate };
