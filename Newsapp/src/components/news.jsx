import React, { useEffect, useState } from 'react';
import NewsItem from './newsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country = 'in', pageSize = 10, category = 'general', setProgress, apiKey }) => {
	// const { title = "Default Title", content = "Default Content" } = props; 

	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);


	const capitalize = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
	

	const fetchMoreData = async () => {
		
		try {
			const url = `https://newsapi.org/v2/top-headlines?country=${country}&from=2024-09-05&sortBy=publishedAt&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
			setPage(page + 1);
			let data = await fetch(url);
			let parsedData = await data.json();
			if (parsedData.articles && parsedData.totalResults) {
				setArticles(articles.concat(parsedData.articles));
				setTotalResults(parsedData.totalResults);
				setLoading(parsedData.articles.length === 0);
			}
		} catch (error) {
			console.error("Failed to fetch articles", error);
			setLoading(true);
		}
	};

	const updateNews = async () => {

		try {
			setProgress(10);
			const url = `https://newsapi.org/v2/top-headlines?country=${country}&from=2024-09-05&sortBy=publishedAt&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

			setLoading(true);
			let data = await fetch(url);
			setProgress(40);

			let parsedData = await data.json();

			if (parsedData.articles && parsedData.totalResults) {
				setArticles(parsedData.articles);
				setTotalResults(parsedData.totalResults);
				setLoading(parsedData.articles.length === 0);
			}
			setProgress(100);
			
		} catch (error) {
			console.error("Failed to fetch articles", error);
			setLoading(true);
		}
	} // so to change, can happens from here for all
	// It makes the app concise
	
	
	useEffect(() => {
		document.title =  `${capitalize(category)} - NewsMonkey`;
		updateNews();
		// eslint-disable-next-line
	}, [category, country]);


	// componentDidUpdate(prevProps) {
	// 	if (prevcategory !== category) {
	// 	  updateNews(); // or any method that fetches data
	// 	}
	// }


		return (
		<>
			<div className="container my-4 mt-18">

				<h2 className='text-center mx-12'>
					NewsMonkey - Top {capitalize(category)} Headlines </h2> 
				{/* {loading && <Spinner/>} */}



				<InfiniteScroll dataLength={articles.length} 
					next={fetchMoreData}
					style={{ display: 'flex', flexDirection: 'column'}}
					// To put endMessage and loader to the top.
					loader={<Spinner/>} 
					hasMore={articles.length !== totalResults} >


					<div className="container">
						<div className="row flex flex-wrap gap-8">

							{!loading && articles.map((element) => (

								<div className="col-md-4" >
									<NewsItem  
									title={element.title?element.title:"This is title"} 
									description={element.description?element.description.slice(0, 120):"This is description"} 
									imageUrl={element.urlToImage} url={element.url}
									author={element.author} date={element.publishedAt}
									source={element.source.name}  />
								</div>
							))}
						</div>
					</div>
					
				</InfiniteScroll>
				

				{/* {<div className="container pt-12 d-flex justify-content-between">

					<button disabled={page<=1} 
					type="button" className="btn btn-dark" 
					onClick={this.handlePreClick}>&larr; Previous</button>

					<button type="button" 
					className="btn btn-dark" 
					disabled={page + 1 > Math.ceil(totalResults/12)} 
					onClick={this.handleNextClick}>Next &rarr;</button>
				</div> } */}

			</div>
		</>
		)
}

News.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
	setProgress: PropTypes.func,
	apiKey: PropTypes.string   
};


export default News;
