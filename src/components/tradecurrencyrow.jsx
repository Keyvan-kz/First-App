function TradeCurrencyRow (props) {

   const dailyChangeStyle = (change) => {
      if (change >= 0 ) {
         return <p className = "text-green-800"> ↑{change?.toLocaleString('fa-IR')}% </p>
      } else if (change < 0) {
         return <p className = "text-red-500"> ↓{change?.toLocaleString('fa-IR')}% </p>
      } else {
         return "---"
      }
   }

   const btnColor = (dailyChange) => {
  if (dailyChange >= 0) {
    return "p-2 rounded-lg cursor-pointer bg-[#262626] text-white transition ease duration-200 hover:bg-green-800";
  } else {
    return "p-2 rounded-lg cursor-pointer bg-[#262626] text-white transition ease duration-200 hover:bg-red-500";
  }
};


   return (
     <tr className="h-25">
        <td>{props.symbol} / {props.faName}</td>
        <td>{props.tmnPrice}</td>
        <td>{props.usdtPrice}</td>
        <td>{dailyChangeStyle(props.dailyChange)}</td>
        <td>{props.marketCap}</td>
        <td><button className = {btnColor(props.dailyChange)}>خرید و فروش آنی</button></td>
    </tr>
    


   );
}



export default TradeCurrencyRow