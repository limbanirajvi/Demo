import React, { Component } from "react";

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        firstName: "",
        lastName: "",
        Country: "",
        language: "",
        vehicle: [],
      },
      userDetailsDummy: {
        firstName: "",
        lastName: "",
        Country: "",
        language: "",
        vehicle: [],
      },
      userData: [],
      index: "",
    };
  }

  handlechange = (e) => {
    if (e.target.type === "checkbox") {
      const { vehicle } = this.state.userDetails;
      if (e.target.checked) {
        vehicle.push(e.target.value);
      } else {
        let id = vehicle.indexof(e.target.value);
        vehicle.splice(id, 1);
      }
      this.setState({
        userDetails: { ...this.state.userDetails, vehicle: vehicle },
      });
    } else {
      this.setState({
        userDetails: {
          ...this.state.userDetails,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  handlecheckboxchange = (e) => {
    const { vehicle } = this.state.userDetails;
    if (e.target.checked) {
      vehicle.push(e.target.value);
    } else {
      let id = vehicle.indexOf(e.target.value);
      vehicle.splice(id, 1);
    }
    this.setState({
      userDetails: { ...this.state.userDetails, vehicle: vehicle },
    });
  };

  handleDelete = (i) => {
    const { userData } = this.state;
    userData.splice(i, 1);
    this.setState({ userData: [...userData] });
  };

  handleEdit = (i) => {
    const { userData } = this.state;
    this.setState({
      userDetails: userData[i],
      userDetailsDummy: userData[i],
      index: i,
    });
  };

  handleSubmit = () => {
    const { userData, userDetails, index } = this.state;
    if (index !== "") {
      userData[index] = userDetails;
      this.setState({ userData: userData, index: "" });
    } else {
      this.setState({ userData: [...userData, userDetails] });
    }
    this.handleReset();
  };

  handleCancel = () => {
    this.setState({ userDetails: { ...this.state.userDetailsDummy } });
  };

  handleReset = () => {
    this.setState({
      userDetails: {
        firstName: "",
        lastName: "",
        Country: "",
        language: "",
        vehicle: [],
      },
    });
  };

  render() {
    const { userDetails, userData } = this.state;
    // console.log(userDetails.vehicle, "vehicle");

    return (
      <div className="container">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          value={userDetails.firstName}
          placeholder="Your name.."
          onChange={(e) => this.handlechange(e)}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          placeholder="Your last name.."
          value={userDetails.lastName}
          onChange={(e) => this.handlechange(e)}
        />

        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="Country"
          value={userDetails.Country}
          onChange={(e) => this.handlechange(e)}
        >
          <option value="" disabled>
            select country
          </option>
          <option value="Dubai">Dubai</option>
          <option value="canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>

        <input
          type="radio"
          id="html"
          name="language"
          value={"HTML"}
          onChange={(e) => this.handlechange(e)}
          checked={userDetails.language === "HTML"}
        />
        <label htmlFor="html">HTML</label>
        <br />

        <input
          type="radio"
          id="css"
          name="language"
          value={"CSS"}
          onChange={(e) => this.handlechange(e)}
          checked={userDetails.language === "CSS"}
        />
        <label htmlFor="css">CSS</label>
        <br />

        <input
          type="radio"
          id="javascript"
          name="language"
          value={"JavaScript"}
          onChange={(e) => this.handlechange(e)}
          checked={userDetails.language === "JavaScript"}
        />
        <label htmlFor="javascript">JavaScript</label>
        <br />

        <h3>activities</h3>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="song"
          checked={userDetails.vehicle.includes("song")}
          onChange={(e) => this.handlecheckboxchange(e)}
        />
        <label for="vehicle1"> I have like a song</label>
        <br />
        <input
          type="checkbox"
          id="vehicle2"
          name="vehicle2"
          value="dance"
          checked={userDetails.vehicle.includes("dance")}
          onChange={(e) => this.handlecheckboxchange(e)}
        />
        <label for="vehicle2"> I have like a dance</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="games"
          checked={userDetails.vehicle.includes("games")}
          onChange={(e) => this.handlecheckboxchange(e)}
        />
        <label for="vehicle3"> I have like a games</label>
        <br />
        <br />

        <button type="button" onClick={() => this.handleSubmit()}>
          Submit
        </button>
        <button
          type="button"
          style={{
            background: "red",
            marginLeft: 5,
            border: 20,
            padding: 6,
          }}
          onClick={(e) => this.handleCancel(i)}
        >
          Cancel
        </button>

        <h2 style={{ textAlign: "center" }}>Table</h2>

        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>language</th>
              <th>vehicle</th>
              <th>Action</th>
            </tr>
            {userData.map((Data, i) => (
              <tr key={i}>
                <td>{Data.firstName}</td>
                <td>{Data.lastName}</td>
                <td>{Data.Country}</td>
                <td>{Data.language}</td>
                <td>{Data.vehicle}</td>
                <td>
                  <button
                    type="button"
                    style={{ background: "green", border: 20, padding: 6 }}
                    onClick={() => this.handleEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    style={{
                      background: "red",
                      marginLeft: 5,
                      border: 20,
                      padding: 6,
                    }}
                    onClick={() => this.handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
