import React from 'react';
const JSON = {
  image2: {
    type: 'MQ Palace Function Hall',
    portfolioImage: './images/image2.jpg'
  },
  image3: {
    type: 'Pai Comforts - Flamingo',
    portfolioImage: './images/image3.jpg'
  },
  image4: {
    type: 'Siddiqua Function Hall',
    portfolioImage: './images/image4.jpg'
  }
};

class App extends React.Component {
render() {
    return (
      <div>
        {Object.keys(JSON).map(key => (
          <div>
            <table>
            
            <img src={JSON[key].portfolioImage} key={key} />
            <tr> {JSON[key].type}</tr></table>
          </div>
        ))}
      </div>
    );
  }
}


export default App;