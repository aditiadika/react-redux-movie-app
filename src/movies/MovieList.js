import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ReactLoading from "react-loading";
import styled from "styled-components";

import Movie from "./movie";
import { getMovies } from "../movies/actions";

class MovieList extends Component {
  componentDidMount = () => {
    const { getMovies, isLoading } = this.props;
    setTimeout(function() {
      if (!isLoading) {
        getMovies();
      }
    }, 5000);
  };

  render() {
    const { movies, isLoading } = this.props;
    if (!isLoading) {
      return (
        <Section>
          <ReactLoading
            type={"bars"}
            color={"white"}
            height={500}
            width={300}
          />
        </Section>
      );
    }
    return (
      <MovieGrid>
        {movies.map(res => (
          <Movie movie={res} key={res.id} />
        ))}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoading: state.movies.moviesLoaded
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMovies }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
