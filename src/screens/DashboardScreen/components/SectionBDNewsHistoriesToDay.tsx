import { View } from "react-native";
import CardElementHistory from "../../../components/ui/CardElementHistory";

interface Props {
  histories: Array<IHistory>;
  onclickHistory?: (item: any) => any;
  onClickCategory?: (item: any) => any;
}

const SectionBDNewsHistoriesToDay = (props: Props) => {
  const { histories, onclickHistory, onClickCategory } = props;

  const handleclickHistory = (item: any) => {
    onclickHistory && onclickHistory(item);
  };
  const handleClickCategory = (keyname: string) => {
    onClickCategory && onClickCategory(keyname);
  };

  return (
    <View style={{ gap: 10, width: "100%" }}>
      {histories.map((item: IHistory, i: number) => {
        return <CardElementHistory key={i} history={item} onClickCategory={handleClickCategory} onclickHistory={handleclickHistory} />;
      })}
    </View>
  );
};

export default SectionBDNewsHistoriesToDay;
