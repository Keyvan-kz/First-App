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


   return (
     <tr className="h-25">
        <td>{props.symbol} / {props.faName}</td>
        <td>{props.tmnPrice}</td>
        <td>{props.usdtPrice}</td>
        <td>{dailyChangeStyle(props.dailyChange)}</td>
        <td>{props.marketCap}</td>
        <td><button className = {props.hoverColor}>خرید و فروش آنی</button></td>
    </tr>
    


   );
}



export default TradeCurrencyRow