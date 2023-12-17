import createRestaurantHomePage from './restaurant'
import createTabs from './tabs';
import createFooter from './footer';


function initialLoad() {
  createTabs()
  createRestaurantHomePage();
  createFooter();
}

export default initialLoad;
