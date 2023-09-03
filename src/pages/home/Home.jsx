import Banner from '../../components/panner/Banner';
import NewsLetter from '../../components/news-letter/NewsLetter';
import HeroHeader from '../../components/hero-header/Hero-header';
import Paginationn from '../../components/paginationn/Paginationn';
import Services  from '../../components/services/Services';
import TourList from '../../components/tours/Tour-list';
import Sortinput from '../../components/sort-input/Sortinput';
import {toursList} from "../../data"
import { useState } from 'react';
import { paginate } from '../../utils/Pagination';


const Home = () =>{
    const [currentPage,setCurrentPage] =   useState(1);
    const [sortItem,setSortItem] =   useState("recommended");
  
    //sort tour
    const sortedTourList=
    sortItem==="low"
    ? toursList.sort((a,b)=> a.priceFrom - b.priceFrom)
    : sortItem==="high" ? toursList.sort((a,b)=> b.priceFrom - a.priceFrom)
    : toursList.sort((a,b)=> b.rating - a.rating);
  
    const {pages,orderedTourList} = paginate(toursList.length,sortedTourList,currentPage)
    return (
        <div>
            <HeroHeader/>
            <Services/>
            <Sortinput setSortItem={setSortItem} sortItem={sortItem} toursLenght={toursList.length}/>
            <TourList toursList={orderedTourList}/>
            <Paginationn pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Banner/>
            <NewsLetter/>
        </div>
    );
}
export default Home;

// const = () =>{
//     return ();
// }
// export default;