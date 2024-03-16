import { supabase } from "../../lib/supabase";
import moment from "moment";
const findAll = () => {
  return "";
};

const findHistoriestoDay = async (dateFormat: string = "YYYY-MM-DD") => {
  //TODO trae un listado de 5 historias de la fecha de hoy cuando estan aprovadas
  //TODO le removi history ya que trae mucha info y no lo necesito para los listados
  //history,
  const { data, error } = await supabase
    .from("histories")
    .select(
      `id, resumen, title, aproved_at,
    profiles(user, username, name, surname),
    state_histories(id, name),
    history_categories(categories(name, keyname))
    `
    )
    .eq("state_histories_id", 1)
    .gte("aproved_at", dateFormat) //mayor o igual
    .order("aproved_at", { ascending: true })
    .limit(5); //TODO tenia todo en parentesis

  if (data) return data;
  else return null;
};

const findHistory = async (idHistory: number) => {
  const { data, error } = await supabase
    .from("histories")
    .select(
      `id, resumen, title, history, aproved_at,
    profiles(user, username, name, surname),
    state_histories(id, name),
    history_categories(categories(name, keyname))
    `
    )
    .eq("state_histories_id", 1)
    .eq("id", idHistory)
    .single();

  if (data) return data;
  else return null;
};

const findCountAllHistoriestoDay = async (
  dateFormat: string = "YYYY-MM-DD"
) => {
  //TODO trae un listado de 5 historias de la fecha de hoy cuando estan aprovadas
  const { data, error } = await supabase
    .from("histories")
    .select("count", { count: "exact" })
    .eq("state_histories_id", 1)
    .gte("aproved_at", moment().format("YYYY-MM-DD")); //mayor o igual
  //count: N
  if (data) return data;
  else return { count: 0 };
};

const historiesControllers = {
  findHistoriestoDay,
  findHistory,
  findCountAllHistoriestoDay,
};

export default historiesControllers;
