import upLoadFile from '../../ipfs/ipfs';
import React from 'react'

class MerchantHome extends React.Component {

  constructor(props) {
    super(props);
    this.upLoadProductImageClick = this.upLoadProductImageClick.bind(this)
    this.fileInput = React.createRef();
  }

  upLoadProductImageClick (event) {
    event.preventDefault();
    const path = this.fileInput.current.files[0].name
    console.log('Clicked',path)
    upLoadFile(path)
  }

  render () {
    return (
      <div className="MerchantHome">
        <header className="App-header">
            Merchant Home
        </header>

        <form >
          <section>
            <input type='file' ref={this.fileInput}></input>
            <button type='submit' onClick={this.upLoadProductImageClick}>Upload</button>
          </section>
        </form>
      </div>
    );
  }
}

export default MerchantHome;
