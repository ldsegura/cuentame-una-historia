import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import theme from "../../theme";
import historiesMocks from "../../mocks/historiesMocks";
import DBInfoInitial from "./components/DBInfoInitial";
import DBNewsHistories from "./components/DBNewsHistories";
import SectionBDNewsHistoriesToDay from "./components/SectionBDNewsHistoriesToDay";
import SectionBDMonth from "./components/SectionBDMonth";
import ScreenName from "../../constants/ScreenName";
import { useState } from "react";

// function HomeScreen({ navigation }: { navigation: any }) {
//   return (
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//   );
// }

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  const [ data, setData] = useState(historiesMocks.data);
  const insideTypes = {
    discovery: "discovery",
    publishToDayInformation: "publishToDayInformation",
    publishToDay: "publishToDay",
    publishToMonth: "publishToMonth",
  }
  const dataRenders = [
    {
      id: 1,
      type: insideTypes.discovery
    },
    {
      id: 2,
      type: insideTypes.publishToDayInformation
    },
    {
      id: 3,
      type: insideTypes.publishToDay
    },
    {
      id: 4,
      type: insideTypes.publishToMonth
    },
  ]

  const onClicktoNavigationHistory = (item: any) => {
    navigation.navigate(ScreenName.ViewHistory, { id: item.id})
  }
  const onClicktoNavigationCategory = (keyname: string) => {
    navigation.navigate(ScreenName.CategorySelected, { keyname: keyname})
  }
  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={{gap: 10, paddingHorizontal: 20}}
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
              {item.type === insideTypes.discovery && <DBInfoInitial key={index} />}
              {item.type === insideTypes.publishToDayInformation && <DBNewsHistories  key={index}/>}
              {item.type === insideTypes.publishToDay && <SectionBDNewsHistoriesToDay histories={historiesMocks.histories}  key={index} onclickHistory={onClicktoNavigationHistory} onClickCategory={onClicktoNavigationCategory} />}
              {item.type === insideTypes.publishToMonth && <SectionBDMonth histories={[data[0],data[1],data[2],data[3],data[4],data[5]]}  key={index} onclickHistory={onClicktoNavigationHistory} onClickCategory={onClicktoNavigationCategory}/>}
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
    // alignItems: "center",
    // justifyContent: "center",
    //width: "100%",
    //padding: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
});
