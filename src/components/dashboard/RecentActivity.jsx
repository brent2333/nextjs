import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const RecentActivity = ({transactions}) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '300px' }), []);
    const autoSizeAll = useCallback((skipHeader) => {
        const allColumnIds = [];
        gridRef.current.columnApi.getAllColumns().forEach((column) => {
          allColumnIds.push(column.getId());
        });
        gridRef.current.columnApi.autoSizeColumns(allColumnIds, skipHeader);
      }, []);
      useEffect(() => {
        setTimeout(() => {autoSizeAll()},600)
      }, [])
    return (
        <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="ag-theme-alpine" style={containerStyle}>
            <AgGridReact
                ref={gridRef}
                rowData={transactions}>
                   <AgGridColumn field="status" sortable={ true } filter={ true } ></AgGridColumn>
                   <AgGridColumn field="transLoc" sortable={ true } filter={ true } ></AgGridColumn>
                   <AgGridColumn field="details" sortable={ true } filter={ true } ></AgGridColumn>
                   <AgGridColumn field="locationdatetime" sortable={ true } filter={ true } ></AgGridColumn>
               </AgGridReact>
               </div>
        </div>
    )
}

export default RecentActivity;

