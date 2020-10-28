import React, { Component } from 'react'
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer'
import '../common/style/reset.css'
import '../common/common-styles.css'

class App extends Component {

	state = {
		likedArticles:{
			// 1:0,
			// 2:0
		}
	}

	likeArticle = (articleId) => {
		this.setState((prevState) => ({
			likedArticles:{
				...prevState.likedArticles,
				[articleId]:(prevState.likedArticles[articleId])
			}
		}))
	}
	
	render () {
		return (
			<div>
				<Header/>
				<Main 
					likedArticles = {this.state.likedArticles}
					likeArticle = {this.likeArticle}
				/>
				<Footer/>
			</div>	
		)
	}
	
}

export default App