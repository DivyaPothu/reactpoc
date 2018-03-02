import React from 'react';
const JSON = {
  image1: {
    type: 'Juhu Club Millenium',
    portfolioImage: './images/image1.jpg'
  },
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
  },
  image5: {
    type: 'The Corinthians Resort Club',
    portfolioImage: './images/image5.jpg'
  },
  image6: {
    type: 'Ponvandi - JP Hotel',
    portfolioImage: './images/image6.jpg'
  }
};

class App extends React.Component {
render() {
    return (
      <div>
        {Object.keys(JSON).map(key => (
          <div>
            <table>
            <tr>
            {JSON[key].type}
         </tr>
      </table>
            <img src={JSON[key].portfolioImage} key={key} />
          </div>
        ))}
      </div>
    );
  }
}


export default App;