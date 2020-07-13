import React, { Component } from 'react'
import './AudioPlayer.less'
class AudioPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlay: false, // 是否播放 默认不播放
            isMuted: false, // 是否静音
            volume: 100, // 默认音量值
            allTime: 0, // 音频总时长
            currentTime: 0, // 当前播放时间
            showVioce: false // 是否展示静音图标
        }
        this.playInput = React.createRef();
        
    }
    millisecondToDate(time) {
        const second = Math.floor(time % 60)
        let minite = Math.floor(time / 60)
        return `${minite}:${second >= 10 ? second : `0${second}`}`
    }
    changeAudio(type, value) {
        const { id } = this.props;
        const { allTime } = this.state;
        const audio = document.getElementById(`myAudio${id}`)
        audio.volume = 1
        switch (type) {
            case 'allTime':
                this.setState({
                    allTime: audio.duration
                })
                break
            case 'play':
                audio.play()
                this.setState({
                    isPlay: true
                })
                break
            case 'pause':
                audio.pause()
                this.setState({
                    isPlay: false
                })
                break
            case 'changeCurrentTime':
                let str = (value.target.value) / allTime * 100 + "% 100%";
                this.playInput.current.style.backgroundSize = str;
                this.setState({
                    currentTime: value.target.value
                })
                audio.currentTime = value.target.value
                if (value.target.value === audio.duration) {
                    this.setState({
                        isPlay: false
                    })
                }
                break
            case 'getCurrentTime':
                let str1 = (audio.currentTime) / allTime * 100 + "% 100%";
                this.playInput.current.style.backgroundSize = str1;
                this.setState({
                    currentTime: audio.currentTime
                })
                if (audio.currentTime === audio.duration) {
                    this.setState({
                        isPlay: false
                    })
                }
                break
            default:
                break
        }
    }
    audioEnded() {
        this.playInput.current.style.backgroundSize = '0% 100%';
        this.setState({
            currentTime: 0,
            isPlay: false
        })
    }
    render() {
        const { id, isPlay, currentTime, allTime } = this.state
        const { audioName, audioSize, audioUrl } = this.props.data
        return (
            <div className="audioComponent">
                <audio 
                    preload="true"
                    id={`myAudio${id}`}
                    src={audioUrl}
                    onCanPlay={() => this.changeAudio('allTime')}
                    onTimeUpdate={(e) => this.changeAudio('getCurrentTime')}
                    onEnded={()=> this.audioEnded()}
                >
                    您的浏览器不支持 audio 标签。
                </audio>
                <div className="control_btn">
                    {
                        isPlay ? 
                        <div className="play_btn" onClick={()=> this.changeAudio('pause')}></div> : 
                        <div className="pause_btn" onClick={()=> this.changeAudio('play')}></div>
                    }
                </div>
                <div className="control_process_box">
                    <div className="audio_top">
                        <div className="audio_name">{audioName}</div>
                        <div className="audio_size">{audioSize}</div>
                    </div>
                    <div className="control_process">
                        <input
                            type="range"
                            className="time"
                            ref={this.playInput}
                            step="0.01"
                            max={allTime}
                            value={currentTime}
                            onChange={(value) => this.changeAudio('changeCurrentTime', value)}
                        />
                    </div>
                    <div className="audio_time">
                        <div className="time_current_time">{this.millisecondToDate(currentTime)}</div>
                        <div className="time_all_time">{this.millisecondToDate(allTime)}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AudioPlayer
