import '../../components/search-bar-content';
import '../../components/hospital-list';

const createSearchBarTemplate = () => {
  const searchBarContent = '<search-bar-content></search-bar-content>';
  return searchBarContent;
};

const createSearchResultTemplate = (hospitals) => {
  const hospitalListElem = document.createElement('hospital-list');
  hospitalListElem.hospitals = hospitals;
  return hospitalListElem;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSearchResultTemplate,
  createSearchBarTemplate,
};
