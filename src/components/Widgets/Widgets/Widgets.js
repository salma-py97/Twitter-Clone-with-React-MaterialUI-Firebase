import "./Widgets.css"
// npm i react-twitter-embed
import SearchIcon from "@material-ui/icons/Search"

import {
	TwitterTweetEmbed,
	TwitterTimelineEmbed,
	TwitterShareButton,
} from "react-twitter-embed"

const Widgets = () => {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input type="text" placeholder="Search Twitter" />
			</div>

			<div className="widgets__widgetsContainer">
				<h2>Trends for you</h2>

				<TwitterTweetEmbed tweetId={"1432301007225171968"} />

				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="barmaki_salma"
					options={{ height: 400 }}
				/>

				<TwitterShareButton
					url={"https://github.com/salma-py97"}
					options={{ text: "#reactjs is awesome", via: "barmaki_salma" }}
				/>
			</div>
		</div>
	)
}

export default Widgets
