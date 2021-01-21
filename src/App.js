import React, { useState } from "react";
import "./styles.css";
import data from "./data";
import TopPanel from "./TopPanel";

export default function App() {
  const [updatedData, setUpdatedData] = useState([]);
  const [showTopPanel, setShowTopPanel] = useState(false);

  function getMaxColumnCount() {
    let screenSize = window.innerWidth;

    if (screenSize < 576) {
      return 1;
    } else if (screenSize >= 576 && screenSize < 768) {
      return 2;
    } else if (screenSize >= 768 && screenSize < 992) {
      return 3;
    } else if (screenSize >= 992 && screenSize < 1200) {
      return 4;
    } else {
      return 6;
    }
  }

  function convertInputData() {
    //หน้าจอไหนที่ไม่แสดงให้วาดหน้าจอแต่ส่งออกมาเป็น null
    // button ถ้าไม่ได้วาดหน้าจอแต่อยู่ในเฉพาะ buttonMenu ให้หายไปแล้วส่งกลับเป็น items
    //ลบ property ของชั้น location ออก เหลือแค่ layout ของแต่ละหน้าจอ
    //ใส่ property layout ให้กับตัว buttonMenu โดยเอาจาก button ตัวลูกตัวแรกที่เจอ

    // สร้าง type ปกติ
    const controlsData = createControl();
    // allow menu type
    const buttonMenuData = combineMenuButton();
    mergeButtonMenuToUpdatedData(controlsData, buttonMenuData);
  }

  function createControl() {
    let common = Object.values(data).filter((x) => {
      let expr = x.editorType !== "buttonMenu";
      return expr;
    });

    common = findItem(common);

    common = common.filter(function (el) {
      return (
        el.editorType !== "button" ||
        (el.editorType === "button" && el.layout && el.layout.length > 0)
      );
    });

    return common;
  }

  function findItem(items, hasParent = false) {
    return items.map((x) => {
      if (x.editorType === "button") {
        if (x.location && x.location.layout) {
          let { parentMenuId, colIndex, rowIndex, columnsIn12 } = x.location;

          let layout = getLayout(x.location, !parentMenuId);

          if (hasParent) {
            x.layout = layout.filter((x) => x.parentMenuId);
          } else {
            x.layout = layout.filter((x) => !x.parentMenuId);
          }
        }
      } else {
        let layout = getLayout(x.location);
        x.layout = layout;
      }

      return x;
    });
  }

  function combineMenuButton() {
    let dat1 = Object.values(data).filter((x) => {
      return x.editorType === "button" || x.editorType === "buttonMenu";
    });

    let btnMenu = dat1.filter((x) => {
      return x.editorType === "buttonMenu";
    });

    let buttons = dat1.filter((x) => {
      return x.editorType === "button";
    });

    let buttonHasParents = [];

    //let dat = findItem(buttons, true);

    for (let x of buttons) {
      let loc = { ...x.location };
      let layout = getLayout(loc);
      let renew = { ...x };
      renew.layout = [];

      for (let lo of layout) {
        if (lo.parentMenuId) {
          renew.layout.push(lo);
        }
      }

      if (renew) buttonHasParents.push(renew);
    }

    if (buttonHasParents) {
      for (let b of buttonHasParents) {
        for (let lo of b.layout) {
          let pId = lo.parentMenuId;

          btnMenu.map((m) => {
            //items
            if (m.menuId === pId) {
              // console.log(b.layout);
              if (!m.layout) m.layout = [];
              if (!m.items) m.items = [];

              let found = Object.values(m.items).find(
                (x) => x.fieldName === b.fieldName
              );

              if (!found) {
                let button = b;
                delete button.fieldName;
                delete button.editorType;

                m.items.push(b);
                if (m.layout.length === 0) m.layout.push(...b.layout);
              }
            }

            //groups
            if (m.groups && m.groups.length > 0) {
              m.groups.map((g) => {
                let gId = g.menuId;

                if (pId === gId) {
                  if (!g.items) g.items = [];

                  let found = Object.values(g.items).find(
                    (x) => x.fieldName === b.fieldName
                  );

                  if (!found) {
                    g.items.push(b);
                  }
                }
              });
            }
          });
        }
      }
    }
    return btnMenu;
    //setUpdatedData2(btnMenu); //
  }

  function createItem(btn) {
    if (!btn) return false;
    let newItem = [];

    newItem = [btn].map((x) => {
      let defKey = {
        fieldName: null,
        text: null,
        type: null,
        icon: null,
        onClick: (x, s, d) => {
          console.log("default func");
        }
      };

      let item = Object.keys(defKey).reduce((res, key) => {
        return { ...res, [key]: x[key] };
      }, {});

      return item;
    });

    return newItem;
  }

  function getLayout(loc, hasMenu = true) {
    let screenSize = ["xs", "sm", "md", "lg", "xl"];
    let layout = [];
    let { parentMenuId, colIndex, rowIndex, columnsIn12 } = loc || {};

    screenSize.map((sc) => {
      let def = {
        size: sc,
        colIndex: colIndex >= 0 ? colIndex : -1,
        rowIndex: rowIndex >= 0 ? rowIndex : -1,
        columnsIn12: columnsIn12 && columnsIn12 >= 0 ? columnsIn12 : -1,
        parentMenuId: parentMenuId || null
      };

      if (loc && loc.layout && loc.layout.length > 0) {
        let b = Object.values(loc.layout).find((x) => x.size === sc);

        if (b) {
          return layout.push(b);
        } else {
          if (hasMenu) return layout.push(def);
        }
      } else {
        if (hasMenu) return layout.push(def);
      }
    });

    return layout;
  }

  function createRowsColumns() {
    //สร้าง Rows Columns(6เสมอ) ให้กับ updateData
    const param = updatedData;
    let row = [];
    if (!param) return [];

    let obj = param.map((x) => {
      let layout = x.layout;
      if (Array.isArray(x) && x.length > 0) {
        let o;
        x.map((i) => {
          o = Object.values(i.layout).reduce(function (prev, current) {
            return prev.rowIndex > current.rowIndex ? prev : current;
          }, {});
        });
        return o;
      } else {
        return Object.values(layout).reduce(function (prev, current) {
          return prev.rowIndex > current.rowIndex ? prev : current;
        }, {});
      }
    });

    let maxRow = Math.max(...obj.map((o) => o.rowIndex || 0));

    for (let i = 0; i <= maxRow; i++) {
      let col = {
        col0: [],
        col1: [],
        col2: [],
        col3: [],
        col4: [],
        col5: []
      };

      // let maxCol = getMaxColumnCount();
      // for (let i = 0; i < maxCol; i++) {
      //   col["col" + i] = [];
      // }

      row.push(col);
    }

    // console.log(param);

    param.forEach((el, idx) => {
      if (el.editorType === "buttonMenu") {
        fillDataRow(el.layout, row, el);
        // if (el.groups) {
        //   for (let group of el.groups) {
        //     for (let item of group.items) {
        //       fillDataRow(item.layout, row, item);
        //     }
        //   }
        // }
        // if (el.items) {
        //   for (let item of el.items) {
        //     fillDataRow(item.layout, row, item);
        //   }
        // }
      } else {
        fillDataRow(el.layout, row, el);
      }
    });

    setUpdatedData(row);
  }

  function fillDataRow(layouts, row, el) {
    if (!layouts) return false;

    layouts.forEach((x) => {
      let { rowIndex, colIndex } = x;

      if (rowIndex >= 0 && colIndex >= 0) {
        let dr = row[rowIndex]["col" + colIndex];

        if (dr) {
          var found = dr.find((o) => o.fieldName === el.fieldName);
          let item = { ...el };

          // delete item.layout;
          if (!found || el.editorType === "buttonMenu") dr.push(item);
        } else {
          dr.push([]);
        }
      }
    });
  }

  function addCSS() {
    //เอา css เข้ามาใส่แต่ละ columns ให้ถูกต้องการการแสดงผลไซส์หน้าจอ
    let rowIdx = 0;
    let colIdx;

    for (let row of updatedData) {
      for (let col of Object.keys(row)) {
        let items = row[col];
        colIdx = parseInt(col.replace("col", ""), 10);
        for (let item of items) {
          let { sizes, css, alignment } = generateCssLayouts(
            item.layout,
            rowIdx,
            colIdx
          );
          item["sizes"] = sizes;
          item["css"] = css;
          item["alignment"] = alignment;
          delete item.layout;
        }
      }
      rowIdx++;
    }
    console.log(updatedData);
  }

  function generateCssLayouts(layouts, row, col) {
    const screenSizes = ["xs", "sm", "md", "lg", "xl"];
    let obj = { sizes: {}, css: "", alignment: "" };

    if (!layouts) return obj;
    for (let screenSize of screenSizes) {
      let found = Object.values(layouts).find(
        (l) => l.size === screenSize && l.colIndex === col && l.rowIndex === row
      );

      if (found) {
        obj.sizes = { ...obj.sizes, [screenSize]: found.columnsIn12 || null };
        obj.css +=
          screenSize === "xs" ? ` d-block ` : ` d-${screenSize}-block `;
        obj.alignment = found.alignment || "";
      } else {
        //obj.css += ` d-${screenSize}-none `;
        obj.css += screenSize === "xs" ? ` d-none ` : ` d-${screenSize}-none `;
      }
    }

    return obj;
  }

  function mergeButtonMenuToUpdatedData(controlsData, btnMenu) {
    let result = controlsData.concat(btnMenu);
    // let result = [...controlsData, ...btnMenu];

    for (let item of result) {
      if (item.location) {
        delete item.location;
      }
      if (item.layout) {
        delete item.layout.parentMenuId;
      }

      if (item.groups) {
        item.groups.forEach((element) => {
          if (element.items) {
            element.items.forEach((element) => {
              delete element.location;
            });
          }
          if (element.items) {
            element.items.forEach((element) => {
              delete element.layout;
            });
          }
          if (element.items) {
            element.items.forEach((element) => {
              delete element.fieldName;
            });
          }
          if (element.items) {
            element.items.forEach((element) => {
              delete element.editorType;
            });
          }
        });
      }

      if (item.items) {
        item.items.forEach((element) => {
          delete element.location;
        });
      }

      if (item.items) {
        item.items.forEach((element) => {
          delete element.fieldName;
        });
      }

      if (item.items) {
        item.items.forEach((element) => {
          delete element.layout;
        });
      }

      if (item.items) {
        item.items.forEach((element) => {
          delete element.editorType;
        });
      }
    }
    setUpdatedData(result);
  }
  function printUpdatedData() {
    console.log(updatedData);
    //    console.log(JSON.stringify(result, null, 2));

    // console.log(JSON.stringify(result, null, 2));
  }
  return (
    <div>
      <div>
        {" "}
        <button onClick={printUpdatedData}>Print UpdatedData</button>
      </div>
      <button onClick={convertInputData}> convertInputData</button>

      <button onClick={createRowsColumns}>createRowsColumns</button>
      <button onClick={addCSS}>addCSS</button>
      <button
        onClick={() => {
          setShowTopPanel(!showTopPanel);
        }}
      >
        show Toppanel
      </button>

      {showTopPanel && <TopPanel data={updatedData}></TopPanel>}
    </div>
  );
}
