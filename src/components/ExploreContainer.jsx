import './ExploreContainer.css';
import HomePage from '../pages/home-page/HomePage';

const ExploreContainer = ({ name }) => {

  const renderPage1 = () => {
    if(name === 'home'){
      return <HomePage/>
    } else {
      return ( 
      <div id="container">
        <strong>{name}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>);
    }
  }

  return (
    <>
       {renderPage1()}
    </>
  );
};

export default ExploreContainer;
