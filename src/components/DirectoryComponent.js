import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export default class Directory extends Component {
	render() {
		const directory = this.props.campsites.map((campsite) => {
			return (
				<div key={campsite.id} className="col-md-5 m-1">
					<Card onClick={() => this.props.onClick(campsite.id)}>
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
				<div className="row"></div>
			</div>
		);
	}
}
