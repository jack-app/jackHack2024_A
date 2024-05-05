import { getDiaryDataByDate } from "../../utils/database";
import { AuthContextConsumer } from "../../contexts/AuthContext";

export default function getdata() {

    // const data = [
    //     {
    //       subject: '勉強',
    //       A: 4,
    //       fullMark: 5,
    //     },
    //     {
    //       subject: '健康',
    //       A: 3,
    //       fullMark: 5,
    //     },
    //     {
    //       subject: '社会性',
    //       A: 2,
    //       fullMark: 5,
    //     },
    //     {
    //       subject: '社交性',
    //       A: 5,
    //       fullMark: 5,
    //     },
    //     {
    //       subject: '精神力',
    //       A: 0,
    //       fullMark: 5,
    //     },
    //   ];
    const { loginUser, userID, login, logout } = AuthContextConsumer();

    const date = new Date().toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
    day: "2-digit"}).replaceAll('/', '-')

    const data = getDiaryDataByDate(userID, date);

    if (data.length == 0) {
        return []
    }
    else {
        const data = [
            {
              subject: '勉強',
              A: data[0].healthy,
              fullMark: 5,
            },
            {
              subject: '健康',
              A: data[0].sociality,
              fullMark: 5,
            },
            {
              subject: '社会性',
              A: data[0].sociability,
              fullMark: 5,
            },
            {
              subject: '社交性',
              A: data[0].mental,
              fullMark: 5,
            },
            {
              subject: '精神力',
              A: data[0].mental,
              fullMark: 5,
            },
          ];
    }


    return data;
}