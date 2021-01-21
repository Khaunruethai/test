import React, { useState } from "react";

import SelectBox from "devextreme-react/select-box";
import TextBox from "devextreme-react/text-box";
import DateBox from "devextreme-react/date-box";
import { NumberBox } from "devextreme-react/number-box";
import { CheckBox } from "devextreme-react/check-box";

import { Button } from "devextreme-react/button";
import { ContextMenu } from "devextreme-react";

const EditorType = (props) => {
  //   console.log('EditorType   ======', props).
  //   console.log('EditorType BTTTT  ======', props.buttonsList)

  const {
    editorType,
    fieldName,
    value,
    //  columnsIn12,
    text,
    icon,
    onClick,
    type,
    items,
    groups,
    alignment
  } = props;

  const SelectBoxItem = [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42"
  ];
  const colors = {
    default: "#337ab7",
    success: "#5cb85c",
    danger: "#d9534f"
  };

  const now = new Date();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  const itemClick = (e) => {
    setActionSheetVisible(false);
  };
  // console.log("props==>", props);

  const menuItems1 = () => {
    return groups && groups.length > 0 ? groups : items;
  };

  // let menuItems1 = items && items.filter((data) => {
  //   return data.parentMenuId === props.menuId;
  // });

  // let menuItems1 =
  //   items &&
  //   items.filter((data) => {
  //     return true;
  //   });

  // if (props.groups) {
  //   let groups = null;
  //   groups = props.groups.map((d) => {
  //     for (let i = 0; i < props.menuItems.length; i++) {
  //       if (d.menuId === props.menuItems[i].parentMenuId) {
  //         if (d.items) {
  //           console.log("hhh");
  //           const isDuplicate = d.items.filter(
  //             (d2) => d2.text === props.menuItems[i].text
  //           );
  //           if (!isDuplicate) d.items.push(props.menuItems[i]);
  //         } else {
  //           d.items = [];
  //           d.items.push(props.menuItems[i]);
  //         }
  //         // break
  //       }
  //     }
  //   });
  //   menuItems = [...menuItems, ...props.groups];
  // }

  return (
    <div
      className={alignment && `text-${alignment}`}
      style={{ marginBottom: "3px" }}
    >
      {editorType === "selectBox" && (
        <SelectBox items={SelectBoxItem}></SelectBox>
      )}
      {editorType === "textBox" && (
        <TextBox name={fieldName} value={value} text={text}></TextBox>
      )}
      {editorType === "dateBox" && (
        <DateBox defaultValue={now} displayFormat={"dd/MM/yyyy"}></DateBox>
      )}
      {editorType === "numberBox" && <NumberBox></NumberBox>}
      {editorType === "checkBox" && (
        <CheckBox
          defaultValue={false}
          text={text}
          style={{ padding: "7.5px 0px" }}
          // height={80}
        ></CheckBox>
      )}
      {editorType === "button" && (
        <Button
          width="100%"
          text={text}
          icon={icon}
          onClick={onClick}
          // onClick={(e) => props.onListItemClick(e, props.showInMenu)}
          type={type}
          //  className="d-none d-md-inline-block px-5"
        ></Button>
      )}
      {editorType === "buttonMenu" && menuItems1().length !== 0 && (
        <React.StrictMode>
          <Button
            width="100%"
            elementAttr={{ id: "id-" + props.menuId }}
            text={text}
            icon={icon}
            onClick={onClick}
            // onClick={(e) => props.onListItemClick(e, props.showInMenu)}
            type={type}
            // className="d-none d-md-inline-block px-5"
            onClick={(e) => setActionSheetVisible(true)}
          ></Button>

          <ContextMenu
            dataSource={menuItems1()}
            width={200}
            target={`#id-` + props.menuId}
            showEvent="dxclick"
            onItemClick={() => itemClick()}
            itemRender={(e) => {
              // console.log("eeeee",colors[props.type])
              // console.log("eeeee",props.type)

              return (
                <>
                  <i
                    style={{ color: props.type ? colors[props.type] : "black" }}
                    className={`mr-2 dx-icon-${e.icon}`}
                  ></i>
                  {e.text}
                </>
              );
            }}
          />
        </React.StrictMode>
      )}
    </div>
  );
};
export default EditorType;
