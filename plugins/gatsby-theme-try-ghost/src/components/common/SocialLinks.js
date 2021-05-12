import React from 'react'
import PropTypes from 'prop-types'

import TwitterIcon from './icons/twitter-icon'
import FacebookIcon from './icons/facebook-icon'
import LinkedinIcon from './icons/linkedIn-icon'
import InstagramIcon from './icons/instagram-icon'
import GithubIcon from './icons/github-icon'
import YoutubeIcon from './icons/youtube-icon'

const SocialLinks = ({ site }) => {
    const twitterUrl = site.twitter && `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    const facebookUrl = site.facebook && `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    const instagramUrl = 'https://www.instagram.com/daegyun_na/'
    const linkedinUrl = 'https://www.linkedin.com/in/daegyunna/'
    const githubUrl = 'https://github.com/daegyunna'
    const youtubeUrl = 'https://www.youtube.com/channel/UC0yValXPtImjTQ8_6Z0Ha4Q?view_as=subscriber'

    return (
        <React.Fragment>
            { site.facebook && <a href={ facebookUrl } className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Facebook"><FacebookIcon /></a>}
            { <a href={ instagramUrl } className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Instagram"><InstagramIcon /></a>}
            { <a href={ linkedinUrl } className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Linkedin"><LinkedinIcon /></a>}
            { <a href={ githubUrl } className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Github"><GithubIcon /></a>}
            { <a href={ youtubeUrl } className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Youtube"><YoutubeIcon /></a>}
            { site.twitter && <a href={ twitterUrl } className="social-link social-link-tw" target="_blank" rel="noopener noreferrer" title="Twitter"><TwitterIcon /></a>}
        </React.Fragment>
    )
}

SocialLinks.propTypes = {
    site: PropTypes.object.isRequired,
}

export default SocialLinks
