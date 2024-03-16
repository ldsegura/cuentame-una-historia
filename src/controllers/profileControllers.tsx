import { supabase } from "../../lib/supabase";

const findProfileFromUUID = async (id: string | undefined) => {
  const { data, error, status } = await supabase
    .from("profiles")
    .select(`username, name, surname`)
    .eq("user", id)
    .single();

  if (data) return data;
  else return null; 
};

const profileControllers = {
  findProfileFromUUID,
};

export default profileControllers;
