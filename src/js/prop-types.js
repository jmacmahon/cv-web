import PropTypes from 'prop-types';

const projectData = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  longDescription: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
});

const workData = PropTypes.shape({});

const projectCard = {
  projectData: projectData.isRequired,
};

const cardsListInner = {
  projectItems: PropTypes.arrayOf(projectData).isRequired,
  workItems: PropTypes.arrayOf(workData).isRequired,
};

export default { projectCard, cardsListInner };
