import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Search,
  Toolbar,
  Inject,
  Selection,
} from "@syncfusion/ej2-react-grids";
// Dummy Data
import { customersGrid, customersData } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="p-2 m-2 bg-white sm:mt-[100px] md:mt-[100px] drop-shadow-xl md:m-10 md:p-10 rounded-2xl border border-gray-100 ">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Search", "Delete", "Edit", "Add"]}
        editSettings={{allowDeleting: true, allowEditing: true, allowAdding: true}}
        
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            Search,
            ExcelExport,
            Edit,
            PdfExport,
            Toolbar,
            Selection
          ]}
        />
      </GridComponent>
    </div>
  )
}

export default Customers