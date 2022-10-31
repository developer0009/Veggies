import React from "react";
import { productData } from "../DB/data";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

export default function SingleProduct() {
  const options = {
    filterType: "checkbox",
  };
  return (
    <div>
      <div className="container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            {" "}
            <h1 className="cobLight">COB Lights</h1>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className="cobImageG">
            <img
              src={productData[Math.floor(Math.random() * 7)]}
              alt=""
              className="cobImage"
              style={{ width: "130px", height: "150px" }}
            />
          </Grid>
          <div className="cobButton">
            <Button href="/contacts" variant="contained">
              Book Now{" "}
            </Button>
          </div>
        </Grid>
      </div>
    </div>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Container from "@material-ui/core/Container";

// const useStyles = makeStyles({
//   root: {
//     // background: "red",
//     paddingBottom: "100"
//   },
//   table: {
//     minWidth: 650
//   }
// });

// function createData(name, calories, fat, carbs, protein, hello) {
//   return { name, calories, fat, carbs, protein, hello };
// }

// const rows = [
//   createData("POWER", "5W", "10W", "15W", "20W", "30W"),
//   createData("LED SIZE", "COB", "COB", "COB", "COB", "COB"),
//   createData(
//     "LED",
//     "Osram/Edison",
//     "Osram/Edison",
//     "Osram/Edison",
//     "Osram/Edison",
//     "Osram/Edison"
//   ),
//   createData("BODY COLOR", "white", "white", "white", "white", "white"),
//   createData("IP Rating", 20, 20, 20, 20, 20),
//   createData(
//     "COLOR TEMP",
//     "3000/4000/6500K",
//     "3000/4000/6500K",
//     "3000/4000/6500K",
//     "3000/4000/6500K",
//     "3000/4000/6500K"
//   ),
//   createData(
//     "LUMEN OUTPUT",
//     "> 300 Im",
//     "> 900 Im",
//     "> 1350 Im",
//     "> 1800 Im",
//     "> 3000 Im"
//   ),
//   createData(
//     "MATERIAL",
//     "Pressure die cast aluminium enclosure",
//     "Pressure die cast aluminium enclosure",
//     "Pressure die cast aluminium enclosure",
//     "Pressure die cast aluminium enclosure",
//     "Pressure die cast aluminium enclosure"
//   ),
//   createData(
//     "DIMENTSION",
//     "Dia 82 * 53 mm",
//     "Dia 100 * 53 mm",
//     "Dia 125 * 50 mm",
//     "Dia 155 * 53 mm",
//     "Dia 177 * 70 mm"
//   ),
//   createData(
//     "CUT OUT",
//     "Dia 60 mm",
//     "Dia 85 mm",
//     "Dia 100 mm",
//     "Dia 135 mm",
//     "Dia 157 mm"
//   ),
//   createData("BEAM ANGLE", "24 Deg", "30 Deg", "42 Deg", "110 Deg", "76 Deg"),
//   createData(
//     "MOUNTING",
//     "False ceiling",
//     "False ceiling",
//     "False ceiling",
//     "False ceiling",
//     "False ceiling"
//   ),
//   createData("WARRANTY", "2 yrs", "2 yrs", "2 yrs", "2 yrs", "2 yrs"),
//   createData("MRP", "645 /-", " 795 /-", "965 /-", "1250 /-", "1940 /-")
// ];

// export default function DenseTable() {
//   const classes = useStyles();

//   return (
//     <div className="product">
//       {" "}
//       <React.Fragment>
//         <Container>
//           <h1>COB lights</h1>
//           <TableContainer component={Paper} className={classes.root}>
//             <Table
//               className={classes.table}
//               size="small"
//               aria-label="a dense table"
//             >
//               <TableHead>
//                 {/* <TableRow>
//                 <TableCell>Dessert (100g serving)</TableCell>
//                 <TableCell align="right">Calories</TableCell>
//                 <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                 <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                 <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                 <TableCell align="right">hello&nbsp;(g)</TableCell>
//               </TableRow> */}
//               </TableHead>
//               <TableBody>
//                 {rows.map(row => (
//                   <TableRow key={row.name}>
//                     <TableCell component="th" scope="row">
//                       {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.calories}</TableCell>
//                     <TableCell align="right">{row.fat}</TableCell>
//                     <TableCell align="right">{row.carbs}</TableCell>
//                     <TableCell align="right">{row.protein}</TableCell>
//                     <TableCell align="right">{row.hello}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Container>
//       </React.Fragment>
//     </div>
//   );
// }
