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
          columnsIn12: 6,
          parentMenuId: null
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 4,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 5,
          rowIndex: 0,
          columnsIn12: 4,
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
          columnsIn12: 6,
          parentMenuId: "1"
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 4,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 5,
          rowIndex: 0,
          columnsIn12: 4,
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
          columnsIn12: 6,
          parentMenuId: "1"
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 4,
          rowIndex: 0,
          columnsIn12: 4,
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 5,
          rowIndex: 0,
          columnsIn12: 4,
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
    menuId: "1"
    // groups: [
    //   { text: "Group1", menuId: "1-1", icon: "save" },
    //   { text: "Group1", menuId: "1-2", icon: "save" }
    // ]
  },

  //date1
  {
    fieldName: "date1",
    text: "from",
    editorType: "dateBox",
    location: {
      colIndex: 0,
      rowIndex: 0,
      columnsIn12: 12,
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 1,
          columnsIn12: 12
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: 6
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
      columnsIn12: 12,
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 2,
          columnsIn12: 12
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: 6
        }
      ]
    }
  }
];

const data1 = [
  // btnSearch1
  {
    fieldName: "btnSearch1",
    text: "search1",
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
          rowIndex: 2,
          columnsIn12: 6,
          parentMenuId: null
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 0,
          columnsIn12: 12,
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: 12,
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: 12,
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 2,
          rowIndex: 0,
          columnsIn12: 12,
          parentMenuId: null
        }
      ]
    }
  },
  // btnSearch2
  {
    fieldName: "btnSearch2",
    text: "search2",
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
          rowIndex: 5,
          columnsIn12: 6,
          parentMenuId: null
        },
        {
          size: "sm",
          colIndex: 1,
          rowIndex: 1,
          columnsIn12: 12,
          parentMenuId: null
        },
        {
          size: "md",
          colIndex: 2,
          rowIndex: 1,
          columnsIn12: 12,
          parentMenuId: null
        },
        {
          size: "lg",
          colIndex: 2,
          rowIndex: 1,
          columnsIn12: 12,
          parentMenuId: null
        },
        {
          size: "xl",
          colIndex: 2,
          rowIndex: 1,
          columnsIn12: 12,
          parentMenuId: null
        }
      ]
    }
  },

  //date1
  {
    fieldName: "date1",
    text: "from",
    editorType: "dateBox",
    location: {
      colIndex: 0,
      rowIndex: 0,
      columnsIn12: 12,
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: 12
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: 6
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
      columnsIn12: 12,
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 1,
          columnsIn12: 12
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 0,
          columnsIn12: 6
        }
      ]
    }
  },

  //text1
  {
    fieldName: "text1",
    text: "text1",
    editorType: "textBox",
    location: {
      colIndex: 0,
      rowIndex: 1,
      columnsIn12: 12,
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 3,
          columnsIn12: 12
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 1,
          columnsIn12: 6
        }
      ]
    }
  },

  //text2
  {
    fieldName: "text2",
    text: "text2",
    editorType: "textBox",
    location: {
      colIndex: 1,
      rowIndex: 1,
      columnsIn12: 12,
      layout: [
        {
          size: "xs",
          colIndex: 0,
          rowIndex: 4,
          columnsIn12: 12
        },
        {
          size: "sm",
          colIndex: 0,
          rowIndex: 1,
          columnsIn12: 6
        }
      ]
    }
  }
];

const dataLatest = [
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
          columnsIn12: "6",
          parentMenuId: null
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
          columnsIn12: "12",
          parentMenuId: "1",
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
          alignment: "left",
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
      // { text: "Group1", menuId: "1-2", icon: "save" }
    ]
  },

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
