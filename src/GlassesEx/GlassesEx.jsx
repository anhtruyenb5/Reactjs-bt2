import React, { Component } from 'react'
import GlassesList from './GlassesList'

export default class GlassesEx extends Component {
    state = {
        glassesArr:
            [
                {
                    "id": 1,
                    "price": 30,
                    "name": "GUCCI G8850U",
                    "url": "./glassesImage/v1.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 2,
                    "price": 50,
                    "name": "GUCCI G8759H",
                    "url": "./glassesImage/v2.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 3,
                    "price": 30,
                    "name": "DIOR D6700HQ",
                    "url": "./glassesImage/v3.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 4,
                    "price": 70,
                    "name": "DIOR D6005U",
                    "url": "./glassesImage/v4.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 5,
                    "price": 40,
                    "name": "PRADA P8750",
                    "url": "./glassesImage/v5.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 6,
                    "price": 60,
                    "name": "PRADA P9700",
                    "url": "./glassesImage/v6.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 7,
                    "price": 80,
                    "name": "FENDI F8750",
                    "url": "./glassesImage/v7.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 8,
                    "price": 100,
                    "name": "FENDI F8500",
                    "url": "./glassesImage/v8.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                },
                {
                    "id": 9,
                    "price": 60,
                    "name": "FENDI F4300",
                    "url": "./glassesImage/v9.png",
                    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                }
            ],
        detail: {},
    }
    handleChangeDetail = (glasse) => {
        this.setState({
            detail: glasse,
        })
    }
    renderInfo = (glasses) => {
        return (<div>
            <div style={{ width: "150px", height: "70px", position: "absolute", top: "85px", right: "480px" }}>
                <img style={{ width: "100%", height: "auto" }} src={glasses.url} alt={glasses.name} />
            </div>
            <p style={{ color: "red", frontWeight: "700" }}><strong style={{ color: "red", frontWeight: "700" }}>Name:</strong > {glasses.name}</p>
            <p style={{ color: "red", frontWeight: "700" }}><strong style={{ color: "red", frontWeight: "700" }}>Price:</strong> ${glasses.price}</p>
        </div>
        );
    }
    render() {
        return (
            <div>
                <div className="text-center">
                    <div style={{ position: "relative" }}>
                        <img className="w-25 h-25" src="./glassesImage/model.jpg" alt="" />
                        {this.renderInfo(this.state.detail)}
                    </div>
                </div>
                <GlassesList
                    renderInfo={this.renderInfo}
                    glassesArr={this.state.glassesArr}
                    handleChangeDetail={this.handleChangeDetail}
                />
            </div>
        )
    }
}
