import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { SocialLinks } from '.'
import { SiGatsby } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { SiGhost } from 'react-icons/si'
import LogoIcon from './icons/logo-icon'

const Footer = ({ data }) => {

    const config = data.site.siteMetadata
    const site = data.allGhostSettings.edges[0].node

    return (
        <React.Fragment>
            {/* The footer at the very bottom of the screen */}
            <footer className="site-footer outer" >
                <div className="site-footer-content inner">
                    <section className="copyright">
                    <a href="/release/" className="social-link social-link-fb" rel="noopener noreferrer" title="Gatsby"><LogoIcon /></a>&copy; {new Date().getFullYear()} <Link to="basePath/about"><b>{config.shortTitle}</b></Link> | build with 
                        <a href="https://www.gatsbyjs.com" className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Gatsby"><SiGatsby /></a>
                        <a href="https://ghost.org" className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Ghost"><SiGhost /></a>
                        <a href="https://www.netlify.com" className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Netlify"><SiNetlify /></a>
                    </section>
                    <div className="social-links">
                        <SocialLinks site={site} />
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

Footer.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Footer
