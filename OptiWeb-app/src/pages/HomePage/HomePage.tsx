import { ListComponent, Loader } from "../../components";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { repoQueries, postQueries, userQueries } from "../../query.factory";
import { nanoid } from "nanoid";
import { TFullUser } from "./types";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { TRootState } from "../../store/types";
import { setShowInfoToast } from "../../store/info/slice";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const hasShownToast = useSelector(
    (state: TRootState) => state.info.hasShownToast
  );
  const dispatch = useDispatch();

  const showInfoToast = () => {
    toast.info(
      <div>
        <p>Мы добавили новые функции Проверьте их сейчас.</p>
        <Link to={"/Info"}>{"Перейти на страницу"}</Link>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const {
    isLoading: repoLoading,
    error: repoError,
    data: repoData,
  } = useQuery(repoQueries.fetchRepoData());
  const {
    isLoading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(postQueries.fetchPosts());
  const {
    isLoading: usersLoading,
    error: usersError,
    data: usersData,
  } = useQuery(userQueries.fetchUsers());

  useEffect(() => {
    if (!hasShownToast) {
      showInfoToast();
      dispatch(setShowInfoToast(true));
    }
  }, []);

  if (repoLoading || postsLoading || usersLoading) return <Loader />;

  if (repoError instanceof Error)
    return <p>Ошибка данных сотрудников: {repoError.message}</p>;
  if (postsError instanceof Error)
    return <p>Ошибка постов: {postsError.message}</p>;
  if (usersError instanceof Error)
    return <p>Ошибка пользователей: {usersError.message}</p>;

  const filteredUsersData = usersData.map((user: TFullUser) => {
    const { address, company, ...rest } = user;
    return rest;
  });

  const listsData = [
    {
      title: "Сотрудники:",
      data: repoData,
      listHeight: 500,
      listWidth: 1000,
      rowHeight: 220,
    },
    {
      title: "Посты:",
      data: postsData,
      listHeight: 500,
      listWidth: 1000,
      rowHeight: 140,
    },
    {
      title: "Пользователи:",
      data: filteredUsersData,
      listHeight: 500,
      listWidth: 1000,
      rowHeight: 160,
    },
  ];

  return (
    <>
      <h2>Главная</h2>
      {listsData.map((list) => (
        <div
          style={{
            width: "1000px",
            backgroundColor: "#a0a0a0",
            paddingTop: "5px",
            marginBottom: "30px",
            borderRadius: "20px",
          }}
          key={nanoid(8)}
        >
          <h3 style={{ color: "white" }}>{list.title}</h3>
          <ListComponent
            data={list.data}
            listHeight={list.listHeight}
            listWidth={list.listWidth}
            rowHeight={list.rowHeight}
          />
        </div>
      ))}
      <ToastContainer />
    </>
  );
};

export { HomePage };
