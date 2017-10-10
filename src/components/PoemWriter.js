import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false

    };
  }

  handlePoem = event => {
    this.setState(
      {
        poem: event.target.value
      }
  )

  if (this.checkIt(event.target.value)){
    this.setState({
      valid: true
    })
  } else {
    this.setState({
      valid: false
    })
  }
}

checkIt(value){
  let poem = value.trim()
  let poemArray = poem.split('\n') //splitting by line

   if(!poem || poemArray.length !== 3 ||
     poemArray[0].trim().split(/\s+/).length !== 5 ||
   poemArray[1].trim().split(/\s+/).length !== 3 ||
   poemArray[2].trim().split(/\s+/).length !== 5){
    return false
  } else {
    return true
  }
}


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handlePoem}
        />

        {this.state.valid ? null :
          <div
          id="poem-validation-error"
          style={{color: 'red'}}>
          "This poem is not written in the right structure!"
        </div>

      }
      </div>

    );
  }
}

export default PoemWriter;
