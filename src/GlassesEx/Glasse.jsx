import React, { Component } from 'react'

export default class Glasse extends Component {
    renderGlasseOnFace = () => {
        return
    }
    render() {
        let { url } = this.props.data;
        return (
            <div className="col-3">
                <button onClick={() => {
                    this.props.handleChangeDetail(this.props.data)
                }} className="border-0 bg-white">
                    <img src={url} className="w-100 h-100" alt=""></img>
                </button>
            </div>

        )
    }
}
