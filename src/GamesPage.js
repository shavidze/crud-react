import React, { Component } from "react";
import GamesList from "./GamesList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchGames } from "./action";
class GamesPage extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

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
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchGames }
)(GamesPage);
