import { Button, StyleSheet, Text, View, FlatList, Alert } from "react-native";
import theme from "../../theme";
import historiesMocks from "../../mocks/historiesMocks";
import DBInfoInitial from "./components/DBInfoInitial";
import DBNewsHistories from "./components/DBNewsHistories";
import SectionBDNewsHistoriesToDay from "./components/SectionBDNewsHistoriesToDay";
import SectionBDMonth from "./components/SectionBDMonth";
import ScreenName from "../../constants/ScreenName";
import { useEffect, useState } from "react";
import historiesControllers from "../../controllers/historiesControllers";
import historiesRepositories from "../../repositories/historiesRepositories";

// function HomeScreen({ navigation }: { navigation: any }) {
//   return (
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//   );
// }

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState(historiesMocks.data);
  const [historiesTheDay, setHistoriesTheDay] = useState<Array<IHistory>>([]);
  const [historiesCountDay, setHistoriesCountDay] = useState<number | any>(0);
  const [historiesTheMounth, setHistoriesTheMounth] = useState<Array<IHistory>>(
    []
  );
  const insideTypes = {
    discovery: "discovery",
    publishToDayInformation: "publishToDayInformation",
    publishToDay: "publishToDay",
    publishToMonth: "publishToMonth",
  };
  const dataRenders = [
    {
      id: 1,
      type: insideTypes.discovery,
    },
    {
      id: 2,
      type: insideTypes.publishToDayInformation,
    },
    {
      id: 3,
      type: insideTypes.publishToDay,
    },
    {
      id: 4,
      type: insideTypes.publishToMonth,
    },
  ];
  const onClicktoNavigationHistory = (item: any) => {
    navigation.navigate(ScreenName.ViewHistory, { id: item.id });
  };
  const onClicktoNavigationCategory = (keyname: string) => {
    console.log(keyname, ScreenName.CategorySelected)
    navigation.navigate(ScreenName.CategorySelected, { keyname: keyname });
  };

  useEffect(() => {
    const getHtoDay = async () => {
      const response = await historiesRepositories.getHistoriesToday();
      if (response) setHistoriesTheDay(response);
    };
    const getHtoMonth = async () => {
      const response = await historiesRepositories.getHistoriesToMonth();
      if (response) setHistoriesTheMounth(response);
    };
    const getCountHtoDay = async () => {
      const response = await historiesRepositories.getCountHistoriesToDay();
      if (response) setHistoriesCountDay(response);
    };
    getHtoDay();
    getCountHtoDay();
    getHtoMonth();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
        //keyExtractor={(item) => item.id}
        // ListHeaderComponentStyle={{ flex: 1 }}
        // ListHeaderComponent={
        //   <>
        //     {stories.complete && <SlideStories />}
        //     <View
        //       style={{
        //         paddingTop: 20,
        //         paddingBottom: 10,
        //         paddingHorizontal: 20,
        //       }}
        //     >
        //       <InputSearch onSubmit={onSubmitInputSearch} />
        //     </View>
        //   </>
        // }
        //stickyHeaderIndices={[0,1,2]} //TODO grega como sticky el header y los indices de componentes que sigan
        data={dataRenders}
        renderItem={({ item, index }) => {
          return (
            <>
              {item.type === insideTypes.discovery && (
                <DBInfoInitial key={index} />
              )}
              {item.type === insideTypes.publishToDayInformation && (
                <DBNewsHistories count={historiesCountDay} key={index} />
              )}
              {item.type === insideTypes.publishToDay && (
                <SectionBDNewsHistoriesToDay
                  histories={historiesTheDay}
                  key={index}
                  onclickHistory={onClicktoNavigationHistory}
                  onClickCategory={onClicktoNavigationCategory}
                />
              )}
              {item.type === insideTypes.publishToMonth && (
                <SectionBDMonth
                  histories={historiesTheMounth}
                  key={index}
                  onclickHistory={onClicktoNavigationHistory}
                  onClickCategory={onClicktoNavigationCategory}
                />
              )}
            </>
          );
        }}
        //onViewableItemsChanged={onViewableItemsChanged.current}
        // ListFooterComponent={
        //   <>
        //     {entertainments.loading && (
        //       <View>
        //         <Text style={{ color: "white" }}>loading...</Text>
        //       </View>
        //     )}
        //     {searchValue != "" && itemsFilters.length <= 0 && (
        //       <NoFoundResult
        //         section={{
        //           data: itemsFilters,
        //         }}
        //         valueSearch={searchValue}
        //       />
        //     )}
        //   </>
        // }
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.back,
    paddingTop: 50,
    paddingBottom: 20,
  },
});
