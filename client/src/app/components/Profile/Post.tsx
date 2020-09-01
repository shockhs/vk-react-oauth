import { Post } from './Groups'
import React, { FC } from 'react'
import moment from 'moment'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'

type IProps = {
    post: Post
}

const Post: FC<IProps> = ({ post }) => {
    const { text, attachments, likes, views, date } = post

    const media = () => {
        if (attachments[0].type === 'photo' && attachments[0].photo) {
            const photos = attachments[0].photo.sizes
            return <img src={photos[photos.length - 1].url} alt="" />
        } else if (attachments[0].type === 'video' && attachments[0].video) {
            const photos = attachments[0].video.image
            return <img src={photos[photos.length - 1].url} alt="" />
        }
    }

    const editedText = text.replace(/\[|]|(club([0-9]+)[|])/g, '')

    return (
        <article className="post">
            <div className="image">{media()}</div>
            <div className="text">
                <span>{editedText}</span>
            </div>
            <div className="stats">
                <div className="counter">
                    <span className="likes">
                        <AiOutlineHeart color="red" />
                        {likes.count}
                    </span>
                    <span className="views">
                        <GrView />
                        {views.count}
                    </span>
                </div>
                <span className="date">{moment(date).locale('ru').format('D MMMM LT')}</span>
            </div>
        </article>
    )
}

export default Post
