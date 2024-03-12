import { Text, View } from "react-native";
import CardElementHistory from "../../../components/ui/CardElementHistory";
import theme from "../../../theme";

interface Props {
    histories: Array<IHistory>;
    onclickHistory?: (item: any) => any;
    onClickCategory?: (item: any) => any;
}

const SectionBDMonth = (props: Props) => {
  const { histories, onclickHistory, onClickCategory } = props;

  const handleclickHistory = (item: any) => {
    onclickHistory && onclickHistory(item);
  };
  const handleClickCategory = (keyname: string) => {
    onClickCategory && onClickCategory(keyname);
  };
  return (
    <View>
      <View style={{ width: "100%", paddingVertical: 10 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: theme.colors.primary,
          }}
        >
          Los favoritos del mes
        </Text>
      </View>
      <View style={{ gap: 10, width: "100%" }}>
        {histories.map((item: IHistory, i: number) => {
          return <CardElementHistory key={i} history={item} onClickCategory={handleClickCategory} onclickHistory={handleclickHistory} />;
        })}
      </View>
    </View>
  );
};

export default SectionBDMonth;
