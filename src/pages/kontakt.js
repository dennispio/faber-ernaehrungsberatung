import React from 'react'
import PropTypes from 'prop-types'
import SubpageHeader from '../components/subpageHeader/SubpageHeader'
import Kontakt from '../components/contact/contact'
import Layout from '../components/layouts/Layout'

const Leistungen = props => {
    const { data } = props
    return (
        <Layout
            pageName="kontakt"
            title="Faber Ernährungsberatung Hannover | Kontakt"
            description="Gerne stehen wir Ihnen für weitere Rückfragen zur Verfügung -
    kontakt@ernaehrungsberatung-faber.de - Auf Wunsch auch über Skype erreichbar."
        >
            <SubpageHeader
                checkheader="h1"
                title="Kontakt"
                sitename="kontakt"
                text={[
                    'Ernährungsberatung faber GbR',
                    <br />,
                    'Maxim Faber, Daniel Faber',
                    <br />,
                    'Stadtparkallee 2B',
                    <br />,
                    '30853 Langenhagen',
                    <br />,
                    <br />,
                    'Telefon: +49 157 85624045',
                    <br />,
                    'Mail: kontakt@ernaehrungsberatung-faber.de',
                    <br />,
                    'Auf Wunsch auch über Skype erreichbar',
                ]}
            />
            <div className="button-container sperator">
                <div className="button">
                    <a href="mailto:Kontakt@ernaehrungsberatung-faber.de?subject=Ernährungsberatung">
                        <button>E-Mail</button>
                    </a>
                </div>
                <div className="button">
                    <a href="tel:+4915785624045">
                        <button>Telefon</button>
                    </a>
                </div>
            </div>
            <Kontakt />
            <div className="sperator" />
        </Layout>
    )
}
export default Leistungen

Leistungen.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}
