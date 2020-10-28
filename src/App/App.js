import React, { Component } from 'react'
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer'
import '../common/style/reset.css'
import '../common/common-styles.css'

class App extends Component {

	state = {
		likedArticles:{
			
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
				<Main/>
				<Footer/>
			</div>	
		)
	}
	
}

export default App