import React from 'react';
// import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import './App.css';

const slides = [
  {
    id: '1',
    color: '#3498db',
  },
  {
    id: 2,
    color: '#2ecc71',
  },
  {
    id: 3,
    color: '#8e44ad',
  },
  {
    id: 4,
    color: '#e74c3c',
  },
  {
    id: 5,
    color: '#16a085',
  },
  {
    id: 6,
    color: '#2c3e50',
  },
  {
    id: 7,
    color: '#f39c12',
  },
  {
    id: 8,
    color: '#2980b9',
  },
  {
    id: 9,
    color: '#1abc9c',
  },
  {
    id: 10,
    color: '#d35400',
  },
  {
    id: 11,
    color: '#34495e',
  },
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  renderSlides() {
    const { currentIndex } = this.state;
    
    return slides.map((slide, index) => {
      const classMapper = {
        [currentIndex - 2]: 'Carousel-slide--previous',
        [currentIndex - 1]: 'Carousel-slide--left',
        [currentIndex]: 'Carousel-slide--active',
        [currentIndex + 1]: 'Carousel-slide--right',
        [currentIndex + 2]: 'Carousel-slide--next',
      };
      
      if (index < currentIndex - 2 || index > currentIndex + 2) {
        return null;
      }
            
      return (
        <div 
          key={ slide.id }
          className={ `Carousel-slide ${ classMapper[index] }` }
          style={ { backgroundColor: slide.color } }
          onClick={ () => this.setState({ currentIndex: index }) }
        >
          { slide.id }
        </div>
      ); 
    });
  }

  render() {
    const { currentIndex } = this.state;
    
    return (
      <div className='Wrapper'>
        <div className='Carousel'>
          { this.renderSlides() }
        </div>
        
        <div className='Buttons'>
          <button 
            disabled={ currentIndex === 0 }
            onClick={ () => this.setState({ currentIndex: currentIndex - 1 }) }
          >
            Previous
          </button>
          <button
            disabled={ currentIndex === slides.length - 1 }
            onClick={ () => this.setState({ currentIndex: currentIndex + 1 }) }
          >
            Next
          </button>
        </div>
        
        {/* Read the <a href='https://stanko.github.io/using-react-keys'>blog post</a>. */}
      </div>
    );
  }
}


// ReactDOM.render(<Carousel />, document.getElementById('Root'));


export default Carousel ;



