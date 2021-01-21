import React from "react";
import "./styles.css";

import { Container, Row, Col } from "reactstrap";
import EditorType from "./EditorType";
import TextBox from "devextreme-react/text-box";

const columns = [
  //xs 1 column
  {
    index: 0,
    css: "d-block"
  },
  //sm 2 column
  {
    index: 1,
    css: "d-none d-sm-block"
  },
  //md 3 column
  {
    index: 2,
    css: "d-none d-md-block"
  },
  //lg 5 column
  {
    index: 3,
    css: "d-none d-lg-block"
  },
  //xl 6 column
  {
    index: 4,
    css: "d-none d-lg-block"
  },
  //xl 6 column
  {
    index: 5,
    css: "d-none d-xl-block"
  }
];

// const data = [
//   {
//     col0: [
//       {
//         fieldName: "txt1",
//         text: "Text1",
//         editorType: "textBox",
//         sizes: { xs: "12", sm: "12", md: "12", lg: "12", xl: "12" },
//         css: "d-block d-sm-block d-md-block d-lg-block d-xl-block"
//       }
//     ],
//     col1: [],

//     col2: [],

//     col3: [],

//     col4: [],

//     col5: [
//       {
//         fieldName: "btn1",
//         text: "Button1",
//         editorType: "button",
//         onClick: () => {},
//         type: "danger",
//         icon: "save",
//         sizes: { sm: "12", md: "12", lg: "12", xl: "6" },
//         css: "d-none d-sm-block d-md-block d-lg-block d-xl-block"
//       }
//     ]
//   },
//   {
//     col0: [
//       {
//         fieldName: "btn1",
//         text: "Bt2",
//         editorType: "button",
//         onClick: () => {},
//         type: "danger",
//         icon: "save",
//         sizes: { xs: "6" },
//         css: "d-block d-sm-none d-md-none d-lg-none d-xl-none"
//       }
//     ],
//     col1: [],

//     col2: [],

//     col3: [],

//     col4: [],

//     col5: []
//   }
// ];
export default function TopPanel(props) {
  const { data } = props;
  return (
    <div>
      <Container fluid={true}>
        {data.map((row, rIdx) => {
          return (
            <Row key={rIdx} className="border-bottom">
              {columns.map((column) => {
                return (
                  <Col
                    key={column.index}
                    className={"border-right " + column.css}
                  >
                    <Row key={"c" + rIdx}>
                      {row["col" + column.index] &&
                        row["col" + column.index].map((c, c2Idx) => {
                          return (
                            <Col
                              key={rIdx + "_" + column.index + "_" + c2Idx}
                              {...c.sizes}
                              className={c.css}
                            >
                              <EditorType {...c} />
                            </Col>
                          );
                        })}
                    </Row>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    </div>
  );
  // return (
  //   <div>
  //     <Container>
  //       {data.map((row, idx) => {
  //         return (
  //           <Row key={idx} className="border-bottom">
  //             {columns.map((i) => {
  //               return (
  //                 <Col className="border-right">
  //                   <Row>
  //                     {row["col" + i].map((c) => {
  //                       return (
  //                         <Col {...c.sizes} className={c.css}>
  //                           <div>{c.text}, </div>
  //                           {/* <EditorType {...c}></EditorType> */}
  //                         </Col>
  //                       );
  //                     })}
  //                   </Row>
  //                 </Col>
  //               );
  //             })}
  //           </Row>
  //         );
  //       })}
  //     </Container>
  //   </div>
  // );
}
