import React from 'react'
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer'
import '../common/style/reset.css'
import '../common/common-styles.css'

const App = () => {
	return (
		<div>
			<Header/>
			<Main/>
			<Footer/>
		</div>	
	)
}

export default App