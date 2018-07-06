import React, { Component } from "react";
import GamesList from "./GamesList";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class GamesPage extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.games)}

        <GamesList games={this.props.games} />

        {console.log(this.props.games)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games
  };
}
GamesPage.propTypes = {
  games: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(GamesPage);
