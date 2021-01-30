import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import CampsiteInfoComponent from "./CampsiteInfoComponent";

export default class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCampsite: null,
		};
	}

	onCampsiteSelect(campsite) {
		this.setState({ selectedCampsite: campsite });
	}

	render() {
		const directory = this.props.campsites.map((campsite) => {
			return (
				<div key={campsite.id} className="md-5 m-1">
					<Card onClick={() => this.onCampsiteSelect(campsite)}>
						<CardImg width="100%" src={campsite.image} alt={campsite.name} />
						<CardImgOverlay>
							<CardTitle>
								<h2>{campsite.name}</h2>
							</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">{directory}</div>
				<div className="row">
					<CampsiteInfoComponent campsite={this.state.selectedCampsite} />
				</div>
			</div>
		);
	}
}
