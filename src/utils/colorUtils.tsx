const getRandomColor = () => {
  const colors = [
    "#FF0000", // Rojo
    "#00FF00", // Verde
    "#0000FF", // Azul
    "#FFFF00", // Amarillo
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Naranja
    "#800080", // Púrpura
    "#008000", // Verde lima
    "#808080", // Gris
    "#000000", // Negro
    // Agrega más colores aquí según sea necesario
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getColorByCategory = (categoryName: string) => {
  let bgColor;
  switch (categoryName) {
    case "fantasia":
      bgColor = "#7e5bff";
      break;
    case "ciencia_ficcion":
      bgColor = "#33cccc";
      break;
    case "misterio":
      bgColor = "#6a4abc";
      break;
    case "aventura":
      bgColor = "#ff9933";
      break;
    case "romance":
      bgColor = "#ff66cc";
      break;
    case "terror":
      bgColor = "#990000";
      break;
    case "humor":
      bgColor = "#ffcc00";
      break;
    case "drama":
      bgColor = "#ff6666";
      break;
    case "fabula":
      bgColor = "#99cc00";
      break;
    case "historico":
      bgColor = "#996633";
      break;
    case "realista":
      bgColor = "#666666";
      break;
    case "mitologia_folclore":
      bgColor = "#663300";
      break;
    case "accion":
      bgColor = "#ff3300";
      break;
    case "suspenso":
      bgColor = "#3366ff";
      break;
    case "infantil":
      bgColor = "#66cc66";
      break;
    default:
      bgColor = colorUtils.getRandomColor(); // Color por defecto en caso de no coincidencia
  }
  return bgColor;
};

const colorUtils = {
    getRandomColor,
    getColorByCategory
};

export default colorUtils;
