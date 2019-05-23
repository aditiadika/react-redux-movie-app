import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import { Poster } from './movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
	state = {
		movies: []
	};

	componentDidMount = () => {
		var config = {
			crossDomain: true
		};
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${this.props.match.params
					.id}?api_key=c1593a564f54f40619768a13410661be&language=en-US`,
				config
			)
			.then((response) => this.setState({ movies: response.data }));
	};

	render() {
		const { movies } = this.state;
		console.log(movies);
		return (
			<MovieWrapper backdrop={`${BACKDROP_PATH}${movies.poster_path}`}>
				<MovieInfo>
					<Overdrive id={movies.id}>
						<Poster src={`${POSTER_PATH}${movies.poster_path}`} alt={movies.title} />
					</Overdrive>
					<div>
						<h1>{movies.title}</h1>
						<h3>{movies.overview}</h3>
						<p>{movies.release_date}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		);
	}
}

export default MovieDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 85vh;
	background: url(${(props) => props.backdrop}) no-repeat;
	background-size: cover;
`;
const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;
