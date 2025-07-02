import MainCard from "../MainCard/MainCard.tsx";
import BuyCredit from "../BuyCredit/BuyCredit.tsx";
import Test from "../Test/Test.tsx";

export const Pages = [
    {path:"/", element: <MainCard/>},
    {path:"/buy", element: <BuyCredit/> },
    {path:"/test", element: <Test/>}
]