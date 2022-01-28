import React from "react";


class Switchimg extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        "./images/img1.jfif",
        "./images/img2.jfif",
        "./images/img4.jfif",
        "./images/img5.jfif",
      ],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 2000);
  }

  render() {
  

    return (
      <div className="slideshow-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="cleaning images"
        />
      </div>
    );
  }
}

export default Switchimg;
