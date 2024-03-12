const categorias = [
    { name: "Fantasía", keyname: "fantasia" },
    { name: "Ciencia ficción", keyname: "ciencia_ficcion" },
    { name: "Misterio", keyname: "misterio" },
    { name: "Aventura", keyname: "aventura" },
    { name: "Romance", keyname: "romance" },
    { name: "Terror", keyname: "terror" },
    { name: "Humor", keyname: "humor" },
    { name: "Drama", keyname: "drama" },
    { name: "Fábula", keyname: "fabula" },
    { name: "Histórico", keyname: "historico" },
    { name: "Realista", keyname: "realista" },
    { name: "Mitología y folclore", keyname: "mitologia_folclore" },
    { name: "Acción", keyname: "accion" },
    { name: "Suspenso", keyname: "suspenso" },
    { name: "Infantil", keyname: "infantil" }
  ];
const findCategorybyKeyname = (keyname: string) => {
  return categorias.find(item => item.keyname === keyname);
}

const categoriesMocks = {
    fantasia: categorias[0],
    romance: categorias[4],
    data: categorias,
    findCategorybyKeyname
}

export default categoriesMocks;