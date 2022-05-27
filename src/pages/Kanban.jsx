import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

// Dummy Data
import { kanbanData, kanbanGrid } from "../data/dummy";

import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="p-2 m-2 bg-white sm:mt-[100px] md:mt-[100px] drop-shadow-xl md:m-10 md:p-10 rounded-2xl border border-gray-100 ">
      <Header category="App" title="Kanban Board" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
