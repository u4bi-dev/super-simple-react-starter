import 'semantic-ui-css/semantic.min.css';
import './assets/normalize.scss'
import './assets/base.scss'

import React from 'react'
import { Switch, Redirect, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import MyRoute from './components/MyRoute'
import routes from './routes'
import SEO from './SEO'

class App extends React.Component {
    render() {
        return (
        <div>
            <Helmet
                htmlAttributes={ SEO.htmlAttributes }
                title={ SEO.title }
                link={ SEO.link(this.props.location.pathname) }
                meta ={ SEO.meta }
            />            
            <Header />
            <Switch>
                {routes.map(route => <MyRoute key={route.path} {...route} />)}
                <Redirect to='/'/>
            </Switch>
        </div>
        )
    }
}

export default withRouter(App)
