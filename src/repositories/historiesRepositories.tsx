import moment from "moment";
import historiesControllers from "../controllers/historiesControllers";

const getListH = (response: any) => {
  if (response) {
    const newRN = response.map((item: any) => {
      const { id, title, resumen, aproved_at } = item;
      const categories = item.history_categories.map((i: any) => {
        return {
          //@ts-ignore
          name: i.categories?.name || "",
          //@ts-ignore
          keyname: i.categories?.keyname || "",
        };
      });

      //@ts-ignore
      const inItem: IHistory = {
        id,
        title,
        resumen,
        aproved_at,
        //@ts-ignore
        autor: item.profiles,
        //@ts-ignore
        state: item.state_histories || null,
        //@ts-ignore
        categories: categories || [],
      };
      return inItem;
    });

    return newRN;
  }

  return null;
};

const getHistoriesToday = async () => {
  const response = await historiesControllers.findHistoriestoDay(
    moment().format("YYYY-MM-DD")
  );

  return getListH(response);
};

const getHistoriesToMonth = async () => {
  await historiesControllers.findCountAllHistoriestoDay();
  const response = await historiesControllers.findHistoriestoDay(
    moment().startOf("month").format("YYYY-MM-DD")
  );
  return getListH(response);
};

const getHistory = async (idHistory: number) => {
  const response = await historiesControllers.findHistory(idHistory);

  if (response) {
    const { id, title, history, resumen, aproved_at } = response;
    const categories = response.history_categories.map((i: any) => {
      return {
        //@ts-ignore
        name: i.categories?.name || "",
        //@ts-ignore
        keyname: i.categories?.keyname || "",
      };
    });
    const inItem: IHistory = {
      id,
      title,
      history,
      resumen,
      aproved_at,
      //@ts-ignore
      autor: response.profiles,
      //@ts-ignore
      state: response.state_histories || null,
      //@ts-ignore
      categories: categories || [],
    };

    return inItem;
  }

  return null;
};

const getCountHistoriesToDay = async () => {
  const response = await historiesControllers.findCountAllHistoriestoDay();

  if (response) {
    //@ts-ignore
    return response?.length > 0 ? response[0]?.count || 0 : 0;
  }

  return 0;
};

const historiesRepositories = {
  getHistory,
  getHistoriesToday,
  getHistoriesToMonth,
  getCountHistoriesToDay,
};

export default historiesRepositories;
