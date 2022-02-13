import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { useState,useEffect} from 'react';
import Axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoTable from './components/pages/crypto-table/crypto-table';
import About from './components/pages/about-me/about';

function App() {
const [currentPage, setcurrentPage] = useState(1);
const [loading, setloading] = useState(false);
const [dataPerPage, setDataPerPage] = useState(20);
const [coinsInfo, setCoinsinfo] = useState([]);

var url =`https://api.coincap.io/v2/assets?limit=${100}`;

const callAPI = async () =>{

  var result = await Axios({
    method:"get",
    url:url
  });
  return setCoinsinfo(result.data.data);
}

useEffect(() => {
  callAPI();
},[]);

const indexOfLastData = currentPage * dataPerPage;
const indexOfFirstData = indexOfLastData - dataPerPage
const currentData = coinsInfo.slice(indexOfFirstData, indexOfLastData);


const paginate =(pageNum) =>{
  let test = document.getElementsByClassName(`list${pageNum}`);
  setcurrentPage(pageNum);
}

  return (
    <BrowserRouter>
    <div className="App">
      <Header totalFetchedData={coinsInfo.length} coinsInfo={currentData}/>
      <Routes>
        <Route path="/" element={<CryptoTable coinsInfoPerPage={currentData} dataPerPage={dataPerPage} totalData={coinsInfo.length} paginate={paginate}/>}>
        </Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
