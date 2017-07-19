import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import filter from 'lodash/filter';
import some from 'lodash/some';
import startsWith from 'lodash/startsWith';

import propTypes from './prop-types';
import { ProjectCard, WorkCard } from './item-card';

const CardsListInner = ({ keyword, projectItems, workItems }) => {
  const filteredProjectItems = filter(projectItems, projectData => (
    some(map(projectData.keywords, kw => startsWith(kw, keyword)))
  ));
  const filteredWorkItems = filter(workItems, workData => (
    some(map(workData.keywords, kw => startsWith(kw, keyword)))
  ));
  return (
    <div>
      {map(filteredProjectItems, projectData => (
        <ProjectCard key={projectData.title} projectData={projectData} />
      ))}
      {map(filteredWorkItems, workData => (
        <WorkCard key={workData.title} workData={workData} />
      ))}
    </div>
  );
};

CardsListInner.propTypes = propTypes.cardsListInner;

const mapStateToProps = state => ({
  keyword: state.searchBox.value,
  projectItems: state.itemStore.projects,
  workItems: state.itemStore.work,
});

const CardsList = connect(mapStateToProps)(CardsListInner);

export default CardsList;
