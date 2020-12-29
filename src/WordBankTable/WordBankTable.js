import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from 'react-bootstrap-table2-editor';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import './index.css';

const WordBankTable = () => {
  const columns = [
    {
      dataField: "spanishWord",
      text: "Spanish Word",
    },
    {
      dataField: "englishWord",
      text: "English Word",
    },
  ];

  const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");
  const { SearchBar } = Search;

  return (
    <div className='table-container'>

<ToolkitProvider
  keyField="id"
  data={ currentBank }
  columns={ columns }
  search
>
  {
    props => (
      <div>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
          pagination={paginationFactory()}
          cellEdit={ cellEditFactory({ 
            mode: 'click', 
            onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
            beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
            afterSaveCell: (oldValue, newValue, row, column) => { 

              // currentBank.map((item) => item !== wordToUpdate)
              if(column.dataField === 'spanishWord') {
                console.log('capturing correctly')
              } else if (column.dataField === 'englishWord') {
                console.log('capturing even more correctly')
              }

              // currentBank.push(wordToUpdate)

              // console.log(wordToUpdate)

              // localStorage.setItem('wordBank', currentBank)
             }
        }) }
        />
      </div>
    )
  }
</ToolkitProvider>
    </div>
  );
};

export default WordBankTable;
