import TradeCurrencyRow from "./components/tradecurrencyrow";
import Input from "./components/input" ;

let currenciesList = [
  {
    networkFees: {
      BITCOIN: 0.00005,
    },
    baseAsset: "BTC",
    enBaseAsset: "Bitcoin",
    faBaseAsset: "بیت کوین",
    isNew: false,
    categories: [44],
    buyCategories: [44],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2020-04-01T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 6,
    isIndex: true,
    circulatingSupply: 19881909,
    maxSupply: 21000000,
    totalSupply: 19881909,
    rank: 1,
    dominance: 58.7016,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "90660.07",
        change24h: "-0.68",
        quoteVolume24h: "818285.095925784",
        quotePrecision: 2,
        marketCap: "1908162416025.5",
        isFavorite: false,
        volume24h: "48799739982.2",
        ath: "111814",
        atl: "67.81",
        wPrice: "90660.07",
        yearlyHighPrice: "101235.37",
        yearlyLowPrice: "39504.73",
        dailyHighPrice: "103982",
        dailyLowPrice: "103982",
        percentChange24h: "0.11",
        percentChange7d: "-6.41",
        percentChange30d: "-9.98",
        percentChange1h: "-0.84",
        flags: [],
      },
      TMN: {
        price: "10299999972",
        change24h: "-0.28",
        quoteVolume24h: "84895526242.63715974",
        quotePrecision: 0,
        marketCap: "215140124994650000",
        isFavorite: false,
        volume24h: "5502038019040600",
        ath: "12606724529",
        atl: "7645393",
        wPrice: "10221676430",
        yearlyHighPrice: "7071290713",
        yearlyLowPrice: "2759405395",
        dailyHighPrice: "11723687821",
        dailyLowPrice: "11723687821",
        percentChange24h: "-0.2",
        percentChange7d: "-6.99",
        percentChange30d: "-5.71",
        percentChange1h: "-1.67",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      ERC20: 0.003,
      ARBITRUM: 0.0004,
    },
    baseAsset: "ETH",
    enBaseAsset: "Ethereum",
    faBaseAsset: "اتریوم",
    isNew: false,
    categories: [13, 16, 44, 53],
    buyCategories: [13, 16, 44, 152],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2020-05-01T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 5,
    isIndex: true,
    circulatingSupply: 120720158.41149,
    maxSupply: null,
    totalSupply: 120720158.41149,
    rank: 2,
    dominance: 11.7878,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "2973.95",
        change24h: "-3.02",
        quoteVolume24h: "472550.7564722282",
        quotePrecision: 2,
        marketCap: "383175704336.2",
        isFavorite: false,
        volume24h: "19682009142.18",
        ath: "4878.26",
        atl: "0.43",
        wPrice: "2973.95",
        yearlyHighPrice: "4070.6",
        yearlyLowPrice: "2176.84",
        dailyHighPrice: "2445.05",
        dailyLowPrice: "2445.05",
        percentChange24h: "-0.71",
        percentChange7d: "-7.26",
        percentChange30d: "-16.46",
        percentChange1h: "-1.87",
        flags: [],
      },
      TMN: {
        price: "336973117",
        change24h: "-2.61",
        quoteVolume24h: "134976050133.95341806",
        quotePrecision: 0,
        marketCap: "43202018986155000",
        isFavorite: false,
        volume24h: "2219093024488900",
        ath: "550010553",
        atl: "48817",
        wPrice: "335304778",
        yearlyHighPrice: "284331695",
        yearlyLowPrice: "152052233",
        dailyHighPrice: "275672741",
        dailyLowPrice: "275672741",
        percentChange24h: "-1.018",
        percentChange7d: "-7.84",
        percentChange30d: "-12.2",
        percentChange1h: "-2.7",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      TRC20: 3.5,
      BSC: 0.8,
      ERC20: 5.5,
    },
    baseAsset: "USDT",
    enBaseAsset: "Tether",
    faBaseAsset: "تتر",
    isNew: false,
    categories: [1],
    buyCategories: [1],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2020-01-01T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 2,
    isIndex: true,
    circulatingSupply: 155888093658.42,
    maxSupply: null,
    totalSupply: 155888093658.42,
    rank: 3,
    dominance: 5.6592,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      TMN: {
        price: "113605",
        change24h: "0.5",
        quoteVolume24h: "374856703638.65762782",
        quotePrecision: 0,
        marketCap: "20740669189948000",
        isFavorite: false,
        volume24h: "9274749520050700",
        ath: "148826",
        atl: "64550",
        wPrice: "112747",
        yearlyHighPrice: "70520",
        yearlyLowPrice: "69583",
        dailyHighPrice: "112747",
        dailyLowPrice: "112747",
        percentChange24h: "-0.29",
        percentChange7d: "-0.63",
        percentChange30d: "4.23",
        percentChange1h: "-0.83",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      RIPPLE: 0.25,
    },
    baseAsset: "XRP",
    enBaseAsset: "Ripple",
    faBaseAsset: "ریپل",
    isNew: false,
    categories: [13, 44, 53],
    buyCategories: [13, 44, 152],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2020-11-01T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 1,
    isIndex: true,
    circulatingSupply: 58938652386,
    maxSupply: 100000000000,
    totalSupply: 99986013292,
    rank: 4,
    dominance: 4.1669,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "2.1",
        change24h: "-0.8",
        quoteVolume24h: "154682.338674",
        quotePrecision: 5,
        marketCap: "135450872947.94",
        isFavorite: false,
        volume24h: "2976897910.02",
        ath: "3.4",
        atl: "0.0027",
        wPrice: "2.1",
        yearlyHighPrice: "0.82",
        yearlyLowPrice: "0.34",
        dailyHighPrice: "2.14",
        dailyLowPrice: "2.14",
        percentChange24h: "-1.53",
        percentChange7d: "-1.064",
        percentChange30d: "-1.59",
        percentChange1h: "-1.12",
        flags: [],
      },
      TMN: {
        price: "238000",
        change24h: "-0.65",
        quoteVolume24h: "41920678064.59432548",
        quotePrecision: 0,
        marketCap: "15271717696521000",
        isFavorite: false,
        volume24h: "335637146544510",
        ath: "383341",
        atl: "303",
        wPrice: "236769",
        yearlyHighPrice: "57363",
        yearlyLowPrice: "23638",
        dailyHighPrice: "241279",
        dailyLowPrice: "241279",
        percentChange24h: "-1.83",
        percentChange7d: "-1.65",
        percentChange30d: "2.67",
        percentChange1h: "-1.95",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      BSC: 0.0005,
    },
    baseAsset: "BNB",
    enBaseAsset: "Binance Coin",
    faBaseAsset: "بایننس کوین",
    isNew: false,
    categories: [13, 16, 44, 7],
    buyCategories: [7, 13, 16, 44],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2021-06-01T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 5,
    isIndex: true,
    circulatingSupply: 145887575.79,
    maxSupply: 200000000,
    totalSupply: 145887575.79,
    rank: 5,
    dominance: 3.9806,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "895",
        change24h: "-2.76",
        quoteVolume24h: "61203.997630866",
        quotePrecision: 4,
        marketCap: "129392730157.73",
        isFavorite: false,
        volume24h: "1790801047.76",
        ath: "788.84",
        atl: "0.04",
        wPrice: "895",
        yearlyHighPrice: "347.87",
        yearlyLowPrice: "205",
        dailyHighPrice: "645.11",
        dailyLowPrice: "645.11",
        percentChange24h: "-1.42",
        percentChange7d: "-5.15",
        percentChange30d: "-12.66",
        percentChange1h: "-0.9",
        flags: [],
      },
      TMN: {
        price: "101500000",
        change24h: "-2.28",
        quoteVolume24h: "15952720902.16346",
        quotePrecision: 0,
        marketCap: "14588678566217000",
        isFavorite: false,
        volume24h: "201907949773950",
        ath: "88939566",
        atl: "4489",
        wPrice: "100908817",
        yearlyHighPrice: "24298411",
        yearlyLowPrice: "14319174",
        dailyHighPrice: "72734399",
        dailyLowPrice: "72734399",
        percentChange24h: "-1.73",
        percentChange7d: "-5.73",
        percentChange30d: "-8.39",
        percentChange1h: "-1.74",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      BSC: 0.003,
      SOLANA: 0.01,
    },
    baseAsset: "SOL",
    enBaseAsset: "Solana",
    faBaseAsset: "سولانا",
    isNew: false,
    categories: [16, 44],
    buyCategories: [16, 44],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2022-03-16T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 5,
    isIndex: true,
    circulatingSupply: 531086900.91686,
    maxSupply: null,
    totalSupply: 603580326.5907,
    rank: 6,
    dominance: 2.4053,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "138.69",
        change24h: "1.43",
        quoteVolume24h: "390368.47675938",
        quotePrecision: 2,
        marketCap: "78185662853.42",
        isFavorite: false,
        volume24h: "3281795422.66",
        ath: "293.31",
        atl: "0.5",
        wPrice: "138.69",
        yearlyHighPrice: "176.22",
        yearlyLowPrice: "14.51",
        dailyHighPrice: "142.45",
        dailyLowPrice: "142.45",
        percentChange24h: "0.058",
        percentChange7d: "-11.4",
        percentChange30d: "-22.41",
        percentChange1h: "-1.38",
        flags: [],
      },
      TMN: {
        price: "15838369",
        change24h: "2.18",
        quoteVolume24h: "40011152828.6744307",
        quotePrecision: 0,
        marketCap: "8815220936020000",
        isFavorite: false,
        volume24h: "370013512218640",
        ath: "33069905",
        atl: "56464",
        wPrice: "15636920",
        yearlyHighPrice: "12309177",
        yearlyLowPrice: "1013656",
        dailyHighPrice: "16060850",
        dailyLowPrice: "16060850",
        percentChange24h: "-0.25",
        percentChange7d: "-11.98",
        percentChange30d: "-18.14",
        percentChange1h: "-2.21",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      ERC20: 5.5,
    },
    baseAsset: "USDC",
    enBaseAsset: "USDC",
    faBaseAsset: "یو اس دی کوین",
    isNew: false,
    categories: [1],
    buyCategories: [1],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: false,
    maxLeverage: 0,
    leverageStep: 0,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2024-11-06T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 2,
    isIndex: true,
    circulatingSupply: null,
    maxSupply: null,
    totalSupply: null,
    rank: 7,
    dominance: 2.3045,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "0.9974",
        change24h: "0",
        quoteVolume24h: "486.2325",
        quotePrecision: 4,
        marketCap: "74911094317.92",
        isFavorite: false,
        volume24h: "7654376180.13",
        ath: "0",
        atl: "0",
        wPrice: "1",
        yearlyHighPrice: "0",
        yearlyLowPrice: "0",
        dailyHighPrice: "0",
        dailyLowPrice: "0",
        percentChange24h: "0",
        percentChange7d: "0.0049",
        percentChange30d: "0.04",
        percentChange1h: "0.021",
        flags: [],
      },
      TMN: {
        price: "113681",
        change24h: "0.73",
        quoteVolume24h: "2615981101.46",
        quotePrecision: 0,
        marketCap: "8446022235681100",
        isFavorite: false,
        volume24h: "863010105596880",
        ath: "0",
        atl: "0",
        wPrice: "112454",
        yearlyHighPrice: "0",
        yearlyLowPrice: "0",
        dailyHighPrice: "0",
        dailyLowPrice: "0",
        percentChange24h: "0",
        percentChange7d: "-0.58",
        percentChange30d: "4.31",
        percentChange1h: "-0.81",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      TRC20: 5,
    },
    baseAsset: "TRX",
    enBaseAsset: "TRON",
    faBaseAsset: "ترون",
    isNew: false,
    categories: [13, 16, 44],
    buyCategories: [13, 16, 44],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2021-02-01T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 1,
    isIndex: true,
    circulatingSupply: 94818610952.666,
    maxSupply: null,
    totalSupply: 94818645601.753,
    rank: 8,
    dominance: 0.8646,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "0.28301",
        change24h: "-1.25",
        quoteVolume24h: "20720.782814",
        quotePrecision: 5,
        marketCap: "28105133332.67",
        isFavorite: false,
        volume24h: "575610063.35",
        ath: "0.43",
        atl: "0.0018",
        wPrice: "0.28",
        yearlyHighPrice: "0.11",
        yearlyLowPrice: "0.052",
        dailyHighPrice: "0.27",
        dailyLowPrice: "0.27",
        percentChange24h: "0.43",
        percentChange7d: "2.47",
        percentChange30d: "-4.31",
        percentChange1h: "-0.52",
        flags: [],
      },
      TMN: {
        price: "32224",
        change24h: "-0.76",
        quoteVolume24h: "11439997604.99287772",
        quotePrecision: 0,
        marketCap: "3168777378383000",
        isFavorite: false,
        volume24h: "64898469824772",
        ath: "48627",
        atl: "203",
        wPrice: "31909",
        yearlyHighPrice: "7594",
        yearlyLowPrice: "3642",
        dailyHighPrice: "30970",
        dailyLowPrice: "30970",
        percentChange24h: "0.13",
        percentChange7d: "1.89",
        percentChange30d: "-0.043",
        percentChange1h: "-1.35",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      DOGECOIN: 8,
    },
    baseAsset: "DOGE",
    enBaseAsset: "Dogecoin",
    faBaseAsset: "دوج کوین",
    isNew: false,
    categories: [4],
    buyCategories: [4],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2022-12-18T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 1,
    isIndex: true,
    circulatingSupply: 149751366383.71,
    maxSupply: null,
    totalSupply: 149780866383.71,
    rank: 9,
    dominance: 0.7598,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "0.15585",
        change24h: "-1.44",
        quoteVolume24h: "155372.4732961234432",
        quotePrecision: 5,
        marketCap: "24696560956.73",
        isFavorite: false,
        volume24h: "1102359718.46",
        ath: "0.73",
        atl: "0",
        wPrice: "0.16",
        yearlyHighPrice: "0.1",
        yearlyLowPrice: "0.058",
        dailyHighPrice: "0.16",
        dailyLowPrice: "0.16",
        percentChange24h: "-1.89",
        percentChange7d: "-7.13",
        percentChange30d: "-11.21",
        percentChange1h: "-1.48",
        flags: [],
      },
      TMN: {
        price: "17769",
        change24h: "0.01",
        quoteVolume24h: "30550070494",
        quotePrecision: 0,
        marketCap: "2784470109329700",
        isFavorite: false,
        volume24h: "124288061449020",
        ath: "82483",
        atl: "10",
        wPrice: "17572",
        yearlyHighPrice: "7111",
        yearlyLowPrice: "4040",
        dailyHighPrice: "18506",
        dailyLowPrice: "18506",
        percentChange24h: "-2.19",
        percentChange7d: "-7.72",
        percentChange30d: "-6.94",
        percentChange1h: "-2.31",
        flags: [],
      },
    },
  },
  {
    networkFees: {
      BSC: 0.5,
    },
    baseAsset: "ADA",
    enBaseAsset: "Cardano",
    faBaseAsset: "کاردانو",
    isNew: false,
    categories: [13, 16, 44],
    buyCategories: [13, 16, 44],
    isInMarket: true,
    spotIsNew: false,
    otcIsNew: false,
    isSpot: true,
    isOtc: true,
    isMargin: true,
    maxLeverage: 10,
    leverageStep: 0.5,
    isTmnBased: true,
    isUsdtBased: false,
    isZeroFee: false,
    cratedAt: "2021-05-01T00:00:00.000000Z",
    buyStatus: "ENABLE",
    sellStatus: "ENABLE",
    exchangeStatus: "ENABLE",
    precision: 1,
    isIndex: true,
    circulatingSupply: 36110476425.403,
    maxSupply: 45000000000,
    totalSupply: 45000000000,
    rank: 10,
    dominance: 0.5546,
    hasAnalysisPage: true,
    hasPricePage: true,
    isPreLaunch: false,
    quotes: {
      USDT: {
        price: "0.4616",
        change24h: "-0.77",
        quoteVolume24h: "66480.002673965332",
        quotePrecision: 4,
        marketCap: "18029296382.33",
        isFavorite: false,
        volume24h: "589726141.61",
        ath: "3.09",
        atl: "0.019",
        wPrice: "0.46",
        yearlyHighPrice: "0.45",
        yearlyLowPrice: "0.24",
        dailyHighPrice: "0.59",
        dailyLowPrice: "0.59",
        percentChange24h: "-1.11",
        percentChange7d: "-10.62",
        percentChange30d: "-18.89",
        percentChange1h: "-1.057",
        flags: [],
      },
      TMN: {
        price: "52301",
        change24h: "-0.04",
        quoteVolume24h: "7128588133.48880682",
        quotePrecision: 0,
        marketCap: "2032754153778400",
        isFavorite: false,
        volume24h: "66490019273589",
        ath: "348389",
        atl: "2171",
        wPrice: "52044",
        yearlyHighPrice: "31723",
        yearlyLowPrice: "16872",
        dailyHighPrice: "66168",
        dailyLowPrice: "66168",
        percentChange24h: "-1.41",
        percentChange7d: "-11.2",
        percentChange30d: "-14.62",
        percentChange1h: "-1.89",
        flags: [],
      },
    },
  },
];


function App() {
  return (
    <>
   <section className="flex justify-center items-center m-5">
    <Input  />
   </section> 
    
    
    
    
    <section className="m-5">
      <div className="mt-15 m-auto text-center p-10 max-w-300 bg-white shadow-md rounded-lg">
        <h1 className="mb-15 text-2xl font-bold">
          خرید معتبرترین ارزهای بازار کریپتو
        </h1>
        <div className="flex mt-4 mb-8 justify-between items-center">
          <div className="basis-[25%] p-1.5 flex gap-2.5 bg-[#f5f6f7] rounded-lg">
            <label htmlFor="search-inp" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </label>
            <input
              type="text"
              name="search-crypto"
              id="search-inp"
              placeholder="جست و جو"
              className="mx-2.5 my-1.25 bg-[#f5f6f7] basis-[80%] border-none outline-none text-xs"
            />
          </div>
          <div className="flex gap-5 justify-between">
            <span className="pb-2.5 cursor-pointer text-[#015ecf] border-b-2">
              رتبه بازار
            </span>
            <span className="pb-2.5 cursor-pointer text-[#b1b1b1]">
              سودآورترین
            </span>
            <span className="pb-2.5 cursor-pointer text-[#b1b1b1]">
              ضررده ترین
            </span>
            <span className="pb-2.5 cursor-pointer text-[#b1b1b1]">
              جدیدترین
            </span>
          </div>
          <div className="flex justify-between items-center gap-2.5">
            <button className="p-2.5 bg-white border border-[#e0e0e0] rounded-lg flex items-center gap-1.5 cursor-pointer transition ease duration-200 hover:bg-[#e0e0e0]">
              <p>همه بازار ها</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="down-arrow"
                width="20px"
                height="20px"
              >
                <g>
                  <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path>
                </g>
              </svg>
            </button>
            <button className="p-2.5 bg-white border border-[#e0e0e0] rounded-lg flex items-center gap-1.5 cursor-pointer transition ease duration-200 hover:bg-[#e0e0e0]">
              <p>همه بازار ها</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="down-arrow"
                width="20px"
                height="20px"
              >
                <g>
                  <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full">
          <table className="w-full text-right border-separate">
            <thead>
              <tr>
                <th className="text-[#494949ac] font-normal text-[14px]">
                  رمز ارز
                </th>
                <th className="text-[#494949ac] font-normal text-[14px]">
                  قیمت لحظه‌ای تومان
                </th>
                <th className="text-[#494949ac] font-normal text-[14px]">
                  قیمت لحظه‌ای تتر
                </th>
                <th className="text-[#494949ac] font-normal text-[14px]">
                  تغییر روزانه (تتر)
                </th>
                <th className="text-[#494949ac] font-normal text-[14px]">
                  ارزش بازار (دلار)
                </th>
                <th className="text-[#494949ac] font-normal text-[14px]"></th>
              </tr>
            </thead>
            <tbody>
              {currenciesList.map((item, i) => {
                return (
                  <TradeCurrencyRow
                    key={i}
                    symbol={item.baseAsset}
                    faName={item.faBaseAsset}
                    tmnPrice={Number(item.quotes.TMN.price).toLocaleString(
                      "fa-IR"
                    )}
                    usdtPrice={
                      item.quotes?.USDT?.price
                        ? Number(item.quotes.USDT.price).toLocaleString("fa-IR")
                        : "---"
                    }
                    marketCap={
                      item.quotes?.USDT?.marketCap
                        ? Number(item.quotes.USDT.marketCap).toLocaleString(
                            "fa-IR"
                          )
                        : "---"
                    }
                    dailyChange={
                      item.quotes?.USDT?.change24h
                        ? Number(item.quotes.USDT.change24h)
                        : "---"
                    }
                    
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
