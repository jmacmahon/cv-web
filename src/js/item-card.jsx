import React from 'react';
import map from 'lodash/map';

import propTypes from './prop-types';

const ProjectCard = ({ projectData }) => (
  <div>
    <h2>{projectData.title}</h2>
    <p>
      {map(projectData.keywords, keyword => (
        <span key={keyword}>{keyword}&nbsp;</span>
      ))}
    </p>
    <h4>{projectData.description}</h4>
    <p>{projectData.longDescription}</p>
  </div>
);

ProjectCard.propTypes = propTypes.projectCard;

const WorkCard = () => (<div>not yet implemented</div>);

export { ProjectCard, WorkCard };
