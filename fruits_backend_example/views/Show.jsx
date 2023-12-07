const React = require("react");
class Show extends React.Component {
  render() {
    const fruit = this.props.fruit;
    return (
      <div>
        <h1>Show page</h1>
        <div>
          The {fruit.name} is {fruit.color}
        </div>
        <div>{fruit.readyToEat ? "It is ready to eat" : "Not ready"}</div>
      </div>
    );
  }
}
module.exports = Show;
