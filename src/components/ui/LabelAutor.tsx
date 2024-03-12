import { Text } from "react-native";

const LabelAutor = (props: any) => {
  const { by, autor } = props;
  return (
    <>
      <Text style={{ paddingRight: 2, fontSize: 12 }}>{by}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 12 }}>{autor}</Text>
    </>
  );
};

export default LabelAutor;
