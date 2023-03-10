import { Component } from "react";
export default class TwoImages extends Component {

    state = {
        imgOne: true,
        imgTwo: true,
    }

    onToggleOne = () => {
        this.setState(state => {
            return {
                imgOne: !state.imgOne
            }
        })
    }

    onToggleTwo = () => {
        this.setState(state => {
            return {
                imgTwo: !state.imgTwo
            }
        })
    }

    render() {
        return (
            <div className={"mt-5 d-flex justify-content-around"}>
                <div className={"justify-content-end d-flex flex-column gap-3 col-3 align-items-center"}>
                    {
                        this.state.imgOne
                        &&
                        <div>
                            <img src="https://pbs.twimg.com/profile_images/687354253371772928/v9LlvG5N_400x400.jpg" alt="water"/>
                        </div>
                    }
                    <button className="btn btn-outline-warning align-self-center"
                            onClick={this.onToggleOne}>Toggle</button>
                </div>
                <div className={"justify-content-end d-flex flex-column gap-3 col-3 align-items-center"}>
                    {
                        this.state.imgTwo
                        &&
                        <div>
                            <img src="https://www.visitdubai.com/-/media/images/leisure/campaigns/dubai-presents/itineraries/nature/nature-header-2.jpg?&cw=256&ch=256" alt="lake"/>
                        </div>
                    }
                    <button className="btn btn-outline-warning align-self-center"
                            onClick={this.onToggleTwo}>Toggle</button>
                </div>
            </div>
        )
    }
}