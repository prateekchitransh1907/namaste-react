import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "xyz",
        location: "abc",
        contact: "ghj",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/prateekchitransh1907"
    );

    const json = await data.json();
    this.setState({
      userData: json,
    });
    console.log("the data", this.state.userData, json);
  }
  render() {
    const { name, location, bio, avatar_url } = this.state.userData;

    return (
      <div className="user-card">
        <img className="git-user-img" src={avatar_url} />
        <div className="git-info-container">
          <h2 className="git-user-name">{name}</h2>
          <h2 className="git-user-location">{location}</h2>
          <h2 className="git-user-bio">{bio}</h2>
          <h2 className="git-user-summary">
            Dynamic professional offering over 8 years 5 months of distinguished
            and insightful experience across high-growth environments in Hybrid
            application development offering experience in the full software
            development lifecycle – from concept through delivery of
            next-generation applications and customizable solutions directing
            timely completion of product roll-out & projects across multiple
            platforms
          </h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
