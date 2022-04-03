import { useEffect, useState, useRef } from 'react';
import Toggle from '../../src/components/toggle';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const ManageCards = ({cards}) => {
    return (
        <div>
        <h1>Manage Cards</h1>
        <div className="ag-theme-alpine" style={{height: 600, width: 1200}}>
           <AgGridReact
           frameworkComponents={{
            'toggle': Toggle,
            }}
               rowData={cards}>
                <AgGridColumn 
                field="Status"
                cellRenderer="toggle"></AgGridColumn>
                <AgGridColumn field="Card" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="Fleet" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="Profile" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="VehicleID" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="LastUsed" sortable={ true } filter={ true }></AgGridColumn>
           </AgGridReact>
       </div>
        </div>
    )
}

export default ManageCards;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/api/cards`)
    const {data} = await res.json()
    return {
      props: {cards: data}
    }
  }