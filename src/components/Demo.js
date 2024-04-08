import React, { Component } from "react";


export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        firstName: "",
        lastName: "",
        Country: "",
      },
      userData: [],
    };
  }

  handlechange = (e) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleDelete = (i) => {
    const { userData } = this.state;
    userData.splice(i, 1);
    this.setState({ userData: [...userData] });
  };

  handleEdit = (i) => {
    const { userData } = this.state;
    this.setState({ userDetails: { ...userData[i] }, index: i });
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

  handleReset = () => {
    this.setState({
      userDetails: {
        firstName: "",
        lastName: "",
        Country: "",
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

        <button type="button" onClick={() => this.handleSubmit()}>
          Submit
        </button>

        <h2 style={{ textAlign: "center" }}>Table</h2>

        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
            {userData.map((Data, i) => (
              <tr key={i}>
                <td>{Data.firstName}</td>
                <td>{Data.lastName}</td>
                <td>{Data.Country}</td>
                <td>
                  <button
                    type="button"
                    style={{ background: "green", border: "none", padding: 8 }}
                    onClick={() => this.handleEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    style={{
                      background: "red",
                      marginLeft: 5,
                      border: "none",
                      padding: 8,
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
