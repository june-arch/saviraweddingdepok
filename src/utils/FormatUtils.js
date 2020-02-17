


const getDaHaMi = (numberOfHours) =>{
    let Days=Math.floor(numberOfHours/24);
    let Remainder=numberOfHours % 24;
    let Hours=Math.floor(Remainder);
    let Minutes=Math.floor(60*(Remainder-Hours));
    return({"days":Days,"hours":Hours,"minutes":Minutes})
}

const getMonthText = (date) => {
    let split = date.split("/")
    switch (split[0]) {
      case "1":
          split[0] = "Januari";
          break;
      case "2":
          split[0] = "Februari";
          break;
      case "3":
          split[0] = "Maret";
          break;
      case "4":
          split[0] = "April";
          break;
      case "5":
          split[0] = "Mei";
          break;
      case "6":
          split[0] = "Juni";
          break;
      case "7":
          split[0] = "Juli";
          break;
      case "8":
          split[0] = "Agustus";
          break;
      case "9":
          split[0] = "September";
          break;
      case "10":
          split[0] = "Oktober";
          break;
      case "11":
          split[0] = "November";
          break;
      case "12":
          split[0] = "Desember";
          break;
      default:
        split[0] = ""
    }
    return split[1]+" "+split[0]+" "+split[2]
}

export default {getMonthText,getDaHaMi}