const data = [
  // btnSearch
  {
    fieldName: "btnSearch",
    text: "search",
    editorType: "button",
    onClick: (e) => {
      console.log("e --- onclick", e.element);
    },
    type: "danger",
    icon: "search",
    location: {
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 3,
          columnsIn12: "12",
          parentMenuId: null,
          alignment: "right"
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 4,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 5,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        }
      ]
    }
  },
  //btnPrint
  {
    fieldName: "btnPrint",
    text: "Print",
    editorType: "button",
    onClick: (e) => {
      console.log("e --- onclick", e.element);
    },
    type: "danger",
    icon: "print",
    location: {
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: "6",
          parentMenuId: "1-1"
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 4,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 5,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        }
      ]
    }
  },
  //btnSave
  {
    fieldName: "btnSave",
    text: "save",
    editorType: "button",
    onClick: (e) => {
      console.log("e --- onclick", e.element);
    },
    type: "danger",
    icon: "save",
    location: {
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: "6",
          parentMenuId: "1",
          alignment: "left"
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 4,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 5,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        }
      ]
    }
  },
  //btnEdit
  {
    fieldName: "btnEdit",
    text: "edit",
    editorType: "button",
    onClick: (e) => {
      console.log("e --- onclick", e.element);
    },
    type: "danger",
    icon: "edit",
    location: {
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 3,
          columnsIn12: "4",
          parentMenuId: "1-1",
          alignment: "right"
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 4,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 5,
          rowIndex: 0,
          columnsIn12: "4",
          parentMenuId: null
        }
      ]
    }
  },

  //buttonMenu
  {
    text: "MENU",
    editorType: "buttonMenu",
    type: "danger",
    icon: "menu",
    menuId: "1",
    groups: [
      { text: "Group1", menuId: "1-1", icon: "print" }
      //  { text: "Group2", menuId: "1-1", icon: "edit" }
    ]
  },
  // {
  //   text: "SELECT",
  //   editorType: "buttonMenu",
  //   type: "success",
  //   icon: "",
  //   menuId: "2",
  //   groups: [
  //     //{ text: "Group2", menuId: "2-1", icon: "print" }
  //     // { text: "Group1", menuId: "1-2", icon: "save" }
  //   ]
  // },

  //date1
  {
    fieldName: "date1",
    text: "from",
    editorType: "dateBox",
    location: {
      colIndex: 0,
      rowIndex: 0,
      columnsIn12: "12",
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 1,
          columnsIn12: "12",
          alignment: "right"
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: "6"
        }
      ]
    }
  },

  //date2
  {
    fieldName: "date2",
    text: "to",
    editorType: "dateBox",
    location: {
      colIndex: 1,
      rowIndex: 0,
      columnsIn12: "12",
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 2,
          columnsIn12: "12"
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: "6"
        }
      ]
    }
  }
];
export default data;
