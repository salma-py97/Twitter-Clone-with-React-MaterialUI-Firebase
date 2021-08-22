import "./Post.css"
import { Avatar } from "@material-ui/core"

import { GoVerified } from "react-icons/go"

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

import { FiShare } from "react-icons/fi"

import {forwardRef} from 'react'

const Post = forwardRef(({
	displayName,
	username,
	verified,
	timestamp,
	text,
	image,
	avatar,
}, ref) => {

	return (
		<div className="post" ref={ref}>
			<div className="post__avatar">
				<Avatar src={avatar} />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post_headerText">
						<h3>
							{displayName}{" "}
							<span className="post__headerSpecial">
								{verified && <GoVerified className="post__badge" />} @{username}
							</span>
						</h3>
					</div>
					<div className="post__headerDescription">
						<p>{text}</p>
					</div>
				</div>
				<img src={image} alt="" />

				<div className="post__footer">
					<div className="post__icons">
						<ChatBubbleOutlineIcon fontSize="small" />
					</div>
					<div className="post__icons">
						<RepeatIcon fontSize="small" />
					</div>
					<div className="post__icons">
						<FavoriteBorderIcon fontSize="small" />
					</div>
					<div className="post__icons">
						<FiShare style={{ fontSize: "1.25rem" }} />
					</div>
				</div>
			</div>
		</div>
	)
})

export default Post
