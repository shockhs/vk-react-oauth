import React, { useEffect, FC, useState } from 'react'
import DataProvider from '../../services/DataProvider'
import Post from './Post'
import { User } from '../../store/Auth'

export type Post = {
    text: string
    attachments: [{ type: string; photo?: { sizes: Array<{ url: string }> }; video?: { image: Array<{ url: string }> } }]
    likes: { count: number }
    views: { count: number }
    date: Date
}

type IProps = {
    id?: number
}

const Profile: FC<IProps> = ({ id }) => {
    const [posts, setPosts] = useState<null | Post[]>(null)
    useEffect(() => {
        if (id)
            DataProvider.getGroupsData().then((res) => {
                if (res.status === 200) {
                    setPosts(res.data)
                }
            })
    }, [id])

    return <div>{posts ? (posts.length ? posts.map((item) => <Post post={item} />) : 'Постов нет') : 'Loading...'}</div>
}

export default Profile
