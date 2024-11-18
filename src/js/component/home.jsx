import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ digitfourth, digitthird, digitsecond, digitfirst }) => {
	return (
		<div className="simpleCounter d-flex justify-content-center">
			<div className="clock ">
				<i className="fa-regular fa-clock"></i></div>
			<div className="fourth">{digitfourth % 10}</div>
			<div className="third">{digitthird % 10}</div>
			<div className="second">{digitsecond % 10}</div>
			<div className="first">{digitfirst % 10}</div>




		</div>
	);
}



export default Home;
