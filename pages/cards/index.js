import { useEffect, useState, useRef } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const ManageCards = ({cards}) => {
    return (
        <div>
        <h1>Manage Cards</h1>
        <div className="ag-theme-alpine" style={{height: 600, width: 1200}}>
           <AgGridReact
               rowData={cards}>
                <AgGridColumn field="Status"></AgGridColumn>
                <AgGridColumn field="Card"></AgGridColumn>
                <AgGridColumn field="Fleet"></AgGridColumn>
                <AgGridColumn field="Profile"></AgGridColumn>
                <AgGridColumn field="VehicleID"></AgGridColumn>
                <AgGridColumn field="LastUsed"></AgGridColumn>
           </AgGridReact>
       </div>
        </div>
    )
}

export default ManageCards;

export async function getStaticProps() {
    const res = await fetch(`${process.env.API_URL}/api/cards`)
    const {data} = await res.json()
    return {
      props: {cards: data}
    }
  }