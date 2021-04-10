import React, { useState, useEffect } from 'react';
import axios from "axios";

const Post=()=> {
    const [data, setData] = useState([]);

    const loadData = () => {

        axios.get('/mocks/FeedPost.json').then(res => {
            setData(res.data)
        });
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <div>
            {data.map((post, key) => {
                return (
                    <div>
                        <div className="post" styles={{ height: '500px', overflowY: 'scroll' }}>
                            <div className="post-wrapper">
                                {/* UserInfo  */}
                                <div className="user-info">

                                    <div className="item-user">
                                        <div className="user-avatar">
                                            <img src={post.userAvatar} alt="author"></img>
                                        </div>

                                        <div className="user-name-wrapper">
                                            <div className="user-name">
                                                <a href="https://www.instagram.com/houseofsingles_bergen" title="houseofsingles_bergen" target="_blank" >
                                                    {post.userName}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-actions">
                                        <div className="user-follow-link">
                                            <a href="https://www.instagram.com/houseofsingles_bergen" target="_blank" >Følg</a>
                                        </div>
                                        <div className="item-instagram-link">
                                            <a href="https://www.instagram.com/p/CKrsS-NpDdV/" target="_blank" title="Se på Instagram">
                                                <svg viewBox="0 0 24 24" width="24" height="24">
                                                    <path d="M17.1,1H6.9C3.7,1,1,3.7,1,6.9v10.1C1,20.3,3.7,23,6.9,23h10.1c3.3,0,5.9-2.7,5.9-5.9V6.9C23,3.7,20.3,1,17.1,1z
                                                M21.5,17.1c0,2.4-2,4.4-4.4,4.4H6.9c-2.4,0-4.4-2-4.4-4.4V6.9c0-2.4,2-4.4,4.4-4.4h10.3c2.4,0,4.4,2,4.4,4.4V17.1z"></path>
                                                    <path d="M16.9,11.2c-0.2-1.1-0.6-2-1.4-2.8c-0.8-0.8-1.7-1.2-2.8-1.4c-0.5-0.1-1-0.1-1.4,0C10,7.3,8.9,8,8.1,9S7,11.4,7.2,12.7
                                                C7.4,14,8,15.1,9.1,15.9c0.9,0.6,1.9,1,2.9,1c0.2,0,0.5,0,0.7-0.1c1.3-0.2,2.5-0.9,3.2-1.9C16.8,13.8,17.1,12.5,16.9,11.2z
                                                 M12.6,15.4c-0.9,0.1-1.8-0.1-2.6-0.6c-0.7-0.6-1.2-1.4-1.4-2.3c-0.1-0.9,0.1-1.8,0.6-2.6c0.6-0.7,1.4-1.2,2.3-1.4
                                                c0.2,0,0.3,0,0.5,0s0.3,0,0.5,0c1.5,0.2,2.7,1.4,2.9,2.9C15.8,13.3,14.5,15.1,12.6,15.4z"></path>
                                                    <path d="M18.4,5.6c-0.2-0.2-0.4-0.3-0.6-0.3s-0.5,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6s0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.6,0.3
                                                s0.5-0.1,0.6-0.3c0.2-0.2,0.3-0.4,0.3-0.6C18.7,5.9,18.6,5.7,18.4,5.6z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* PostContent */}
                                <div className="post-content">
                                    <img src={post.postContent} alt=""></img>
                                </div>

                                <div className="item-content">
                                    <div className="item-meta">
                                        <div class="item-likes">
                                            {post.likes}
                                        </div>
                                    </div>
                                    <div class="item-text">
                                        <a href="https://www.instagram.com/p/CKrsS-NpDdV/" title="houseofsingles_bergen" class="item-text-author" target="_blank" >
                                            {post.userName}
                                        </a> {post.text}
                                    </div>
                                    <div>
                                        <div class="item-comments-item">
                                            <span class="item-comments-item-author">
                                                <a href="https://www.instagram.com/ghasim_7" target="_blank">
                                                    {post.comment}
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item-date">{post.date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }


        </div>
    );
}

export default Post