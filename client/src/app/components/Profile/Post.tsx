import { Post } from './Groups'
import React, { FC } from 'react'
import moment from 'moment'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'
import noAttach from '../../assets/images/noattach.png'

type IProps = {
    post: Post
}

const Post: FC<IProps> = ({ post }) => {
    const { text, attachments, likes, views, date } = post

    const media = () => {
        if (attachments[0].type === 'photo' && attachments[0].photo) {
            const photos = attachments[0].photo.sizes
            return <img src={photos[photos.length - 1].url} alt="post attachment" />
        } else if (attachments[0].type === 'video' && attachments[0].video) {
            const photos = attachments[0].video.image
            return <img src={photos[photos.length - 1].url} alt="post attachment" />
        }
    }

    const editedText = text.replace(/\[|]|(club([0-9]+)[|])/g, '')
    const limit = 350
    return (
        <article className="post">
            <div className="image">{attachments ? media() : <img src={noAttach} alt="no image post" />}</div>
            <div className="text">
                <span>
                    {editedText.substring(0, limit)}
                    {text.length > 350 ? '...' : ''}
                </span>
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
