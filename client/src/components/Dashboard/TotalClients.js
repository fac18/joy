// import React, { Component, useEffect } from "react";
// import ServicesGraph from "./ServicesGraph";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import upArrow from "../../assets/up-arrow.svg";
// import { Link } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "../../theme";
// import getRequest from "../../utils/getData";

// const useStyles = makeStyles({
//   root: {
//     margin: "auto",
//     textAlign: "center",
//     fontFamily: "Source Sans Pro"
//   },
//   card: {
//     minWidth: 275,
//     maxWidth: 500,
//     backgroundColor: "#EBEDEE",
//     margin: "auto",
//     marginTop: 25,
//     padding: 20,
//     color: "#676767",
//     display: "flex",
//     flexDirection: "row",
//     fontSize: 20
//   },
//   arrow: {
//     width: 130,
//     padding: 10
//   },
//   emphasis: {
//     fontSize: 40,
//     color: "#E71F67"
//   }
// });

// const TotalClients = ({ overallWellbeing, clients, setClients }) => {
//   useEffect(() => {
//     getRequest("/getallclients").then(res => {
//       setClients(res);
//     });
//   }, [setClients]);
//   const classes = useStyles();
//   return (
//     <Card className={classes.card}>
//       <img className={classes.arrow} src={upArrow} />
//       <h3>
//         You currently have:
//         <span className={classes.emphasis}> {clients.length} clients!</span>
//       </h3>
//     </Card>
//   );
// };

// export default TotalClients;