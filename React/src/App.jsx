import React from "react";

function Student(props) {

  return (

    <div style={styles.card}>

      <h2>Student Details</h2>

      <p><b>Name:</b> {props.name}</p>

      <p><b>Course:</b> {props.course}</p>

      <p><b>Marks:</b> {props.marks}</p>

    </div>
  );
}

function App() {

  return (

    <div style={styles.container}>

      <h1>React Student Information</h1>

      <Student
        name="Rahul"
        course="B.Tech CSE"
        marks="85"
      />

      <Student
        name="Anita"
        course="BCA"
        marks="90"
      />

      <Student
        name="Aman"
        course="MCA"
        marks="78"
      />

    </div>
  );
}

const styles = {

  container: {

    textAlign: "center",

    backgroundColor: "#f2f2f2",

    minHeight: "100vh",

    padding: "30px"
  },

  card: {

    backgroundColor: "white",

    width: "350px",

    margin: "20px auto",

    padding: "20px",

    borderRadius: "10px",

    boxShadow: "0px 0px 10px gray"
  }
};

export default App;