import { Pressable, Text, View } from "react-native";
import CardElementHistory from "../../ui/CardElementHistory";
import { IconStar } from "../../ui/image/svg";
import theme from "../../../theme";

interface Props {
  onPressAll?: () => void;
  onPressHistory?: (item: any) => void;
  componentTitle?: React.ReactElement;
  histories: Array<IHistory> | []
}

const SectionHistoryViewAll = (props: Props) => {
  const { onPressAll, onPressHistory, componentTitle, histories } = props;
  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {componentTitle}
          {/* <IconStar width={30} height={30} />
          <Text style={{ fontSize: 12 }}>Mis Recomendados</Text> */}
        </View>
        <Pressable
          onPress={onPressAll}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 12, color: theme.colors.info }}>
            Ver Todo
          </Text>
        </Pressable>
      </View>
      <View style={{ gap: 10, width: "100%" }}>
        {histories.map((item: IHistory, i: number) => {
          return (
            <CardElementHistory
              key={i}
              history={item}
              //onClickCategory={handleClickCategory}
              onclickHistory={onPressHistory}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SectionHistoryViewAll;
