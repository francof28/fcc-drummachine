import React from 'react';

class Pad extends React.Component  {
    constructor(props) {
        super(props)

        this.audio = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    playAudio = () => {
        this.audio.current.volume = this.props.volume;
        this.audio.current.play();
        this.props.handler(this.props.clip.id)
    }
    
    handleKeyDown = (e) => {
        if(e.keyCode === this.props.clip.keyCode){
            this.playAudio()
        }
    }

    render () {
    return (
        <div className="drum-pad" onClick={this.playAudio} onKeyDown={this.handleKeyDown} id={this.props.clip.keyTrigger}>
            {this.props.clip.keyTrigger}
            <audio ref={this.audio} className="clip" id={this.props.clip.keyTrigger} src={this.props.audio} />
        </div>
    )
    }
}



export default Pad;