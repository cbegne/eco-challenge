import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { yellow } from '../_variables';
import { MainPadding } from '../challenge/components/MainPadding';
import { TitleSticker } from '../challenge/components/TitleSticker';
import { ReturnButton } from '../challenge/components/ReturnButton';
import { Link } from 'react-router-dom';

export const About = ({ id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout color={yellow}>
      <Page>
        <MainPadding>
          <Link to="/">
            <ReturnButton />
          </Link>
          <TitleSticker>A PROPOS</TitleSticker>
          <br />
          <br />
          <div
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              padding: 40,
              fontFamily: 'Calibre',
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Le <em>Bas les Steaks Challenge</em> a été créé pendant la
            Trattoria, un hackathon de 5 jours organisé par le collectif de
            designers{' '}
            <a
              href="https://mozza.io/"
              target="_blank"
              style={{ color: 'black', textDecoration: 'underline' }}
            >
              Mozza
            </a>{' '}
            à Aix-en-Provence en février 2020.
            <br />
            <br />
            L’équipe, constituée d’Adrien Montcoudiol, Céline Begne, Mathieu
            Grac, Micka Touillaud et Noé Malzieu avait pour but de rendre
            l’engagement écologique plus accessible.
            <br />
            <br />
            De notre réflexion est né ce concept de challenge social qui permet
            aux défiés d’explorer de manière ludique un nouveau mode
            d’alimentation plus responsable. <br />
            <br />
            Il s’agit d’un outil gratuit sans visée économique, dont le seul
            objectif est de sensibiliser à l’alimentation végétarienne. <br />
            <br />
            Aucun steak n’a été maltraité durant le codage. <br />
            <br />
            Contact : <a
              href="mailto:salut@baslessteaks.org"
              rel="noopener noreferrer"
              style={{ color: 'black', textDecoration: 'underline' }}
            >salut@baslessteaks.org</a>
            <br />
            Instagram:{' '}
            <a
              href="https://www.instagram.com/baslessteaks/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black', textDecoration: 'underline' }}
            >
              @BasLesSteaks
            </a>
          </div>
        </MainPadding>
      </Page>
    </Layout>
  );
};
