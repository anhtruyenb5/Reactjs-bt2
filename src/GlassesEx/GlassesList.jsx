import React, { Component } from 'react'
import Glasse from './Glasse'

export default class GlassesList extends Component {
    renderGlassesList = () => {
        return this.props.glassesArr.map((item) => {
            return (
                <Glasse
                    renderInfo={this.props.renderInfo}
                    handleChangeDetail={this.props.handleChangeDetail}
                    key={item.id}
                    data={item}
                />
            )
        })
    }
    render() {
        return (
            <div>
                <div className="row">{this.renderGlassesList()}</div>
            </div>
        )
    }
}
