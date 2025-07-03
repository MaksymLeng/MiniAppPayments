import BuyCredit from "../BuyCredit/BuyCredit.tsx";
import MainPage from "./MainPage.tsx";

export const Pages = [
    {path:"/", element: <MainPage/>},
    {path:"/buy", element: <BuyCredit/> },
]