import React from 'react';
import '../crypto-table/crypto-table.css';
import { useEffect } from 'react';
import Pagination from '../../pagination/pagination';
const  CoinListAPICall = (coinsInfoPerPage) =>{
    var table = document.getElementById("table-body");
    var dataRows = '';
    coinsInfoPerPage.forEach(element => {
        var trs =`<tr>
        <td>${element.name || '-'}</td>
        <td>${element.rank || '-' }</td>
        <td>${element.symbol || '-'}</td>
        <td>${element.maxSupply || '-'}</td>
        <td>${element.marketCapUsd || '-'}</td>
        <td>${element.priceUsd|| '-'}</td>
        </tr>`
        dataRows=dataRows+trs;
    });
    table.innerHTML = dataRows;
   }



const CryptoTable = ({coinsInfoPerPage,dataPerPage,totalData,paginate}) => {
      useEffect(() => {
        CoinListAPICall(coinsInfoPerPage);
      }, [coinsInfoPerPage]);


    return (
        <div className='cu-container'>
            <div className='cu-res-table'>
            <table className='cu-table'>
                <thead className='cu-thead'>
                    <tr>
                        <th>Coin</th>
                        <th>Rank</th>
                        <th>Symbol</th>
                        <th>Max Supply</th>
                        <th>Market Cap</th>
                        <th>Current Price In USD</th>
                    </tr>
                </thead>
                <tbody id="table-body"></tbody>
            </table>
            </div>
            <Pagination dataPerPage={dataPerPage} totalData={totalData} paginate={paginate}/>
        </div>
        
    );
}

export default CryptoTable;
