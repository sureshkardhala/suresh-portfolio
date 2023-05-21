import { portfolioActions } from "./portfolio";

export const fetchData = () =>{
    return async (dispatch) =>{
        const fetchHandler = async()=>{
            const res= await fetch("https://portfolio-api-9e248-default-rtdb.firebaseio.com/portfolio.json");
            const data = await res.json();
            return data;
        }
        try{
            const portfolioData= await fetchHandler()
            dispatch(portfolioActions.fetchPortfolio(portfolioData));
            // console.log("Data fetched successfully" );
        }catch(err){
            console.log('unable to fetch data');
        }
    }
}