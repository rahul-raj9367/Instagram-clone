
import './story.css'
import './post.css'
import {FiMoreHorizontal,FiBookmark} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import {BiMessageRounded} from "react-icons/bi"
import {IoPaperPlaneOutline} from "react-icons/io5"
import {CiFaceSmile} from "react-icons/ci"

function Story(){
    return(
        <div className='Rahull'>
            <div className="vel">
            <div className="total-img">
            <div className="story1">
                <img  src="image/rahul.png.jpg" alt="++" height={55} width={55}/>
                <p>rahul_raj9367</p>
            </div>
            <div className="story1">
                <img  src="image/th.jpeg" alt="++" height={55} width={55}/>
                <p>hugs_for_trees</p>
            </div>
            <div className="story1">
                <img  src="image/th2.jpeg" alt="++" height={55} width={55}/>
                <p>trees_woodland_forests</p>
            </div>
            <div className="story1">
                <img  src="image/zoho.jpg" alt="++" height={55} width={55}/>
                <p>careers_at_zoho</p>
            </div>
            <div className="story1">
                <img  src="image/google.png" alt="++" height={55} width={55}/>
                <p>Google_India</p>
            </div>
            <div className="story1">
                <img  src="image/infosys.png" alt="++" height={55} width={55}/>
                <p>infosys_India</p>
            </div>
            <div className="story1">
                <img  src="image/download.png" alt="++" height={55} width={55}/>
                <p>wipro_India7</p>
            </div>
            <div className="story1">
                <img  src="image/download.jpg" alt="++" height={55} width={55}/>
                <p>Tcs_India</p>
            </div>
            </div>
        <div className="total-post">
            <div className="tot">
                <div className="head">
                    <div className="post">
                        <div className="tit-img">
                            <img src="image/rahul.png.jpg" alt="++" height={30} width={30} />
                        </div>
                        <div className="tit-name">
                            <div className="rr">
                                <p>rahul_raj9367</p>
                                <p className='wer'>Mukkudal</p>
                            </div>
                            <div className="aaa">
                                <span>.2d</span>
                            </div>
                        </div>
                    </div>
                    <div className="tit-more">
                        <FiMoreHorizontal size={20}/>
                    </div>
                </div>
                <div className="body">
                    <div className="post-img">
                        <img src="image/rahul.jpg" alt="++" width={465} height={600}/>
                    </div>
                </div>
            </div>
           <div className="like-sec">
                <div className="like">
                    <span><AiOutlineHeart size={25}/></span>
                    <span><BiMessageRounded size={25}/></span>
                    <span><IoPaperPlaneOutline size={25}/></span>
                </div>
                <div className="save">
                    <FiBookmark size={25}/>
                </div>
           </div>
           <div className="likes">
                <p>123 likes</p>
           </div>
           <div className="rahul">
                <h4>rahul_raj9367</h4>
                <p>more</p>
                <p id='com'>View 5 Comment</p>
           </div>
           <div className="com">
                <div className="comment-sec">
                    <input type="text" placeholder='Add a Comment..' />
                </div>
            <div className="smile">
                <CiFaceSmile />
            </div>
           </div>
           <hr />

           <div className="tot2">
                <div className="head">
                    <div className="post">
                        <div className="tit-img">
                            <img src="image/th.jpeg" alt="++" height={30} width={30} />
                        </div>
                        <div className="tit-name">
                            <div className="rr">
                                <p>hugs_for_trees</p>
                                <p className='wer'>Mukkudal</p>
                            </div>
                            <div className="aaa">
                                <span>.2d</span>
                            </div>
                        </div>
                    </div>
                    <div className="tit-more">
                        <FiMoreHorizontal size={20}/>
                    </div>
                </div>
                <div className="body">
                    <div className="post-img">
                        <img src="image/th3.jpeg" alt="++" width={465} height={600}/>
                    </div>
                </div>
            </div>
           <div className="like-sec">
                <div className="like">
                    <span><AiOutlineHeart size={25}/></span>
                    <span><BiMessageRounded size={25}/></span>
                    <span><IoPaperPlaneOutline size={25}/></span>
                </div>
                <div className="save">
                    <FiBookmark size={25}/>
                </div>
           </div>
           <div className="likes">
                <p>1,123 likes</p>
           </div>
           <div className="rahul">
                <h4>hugs_for_trees</h4>
                <p>more</p>
                <p id='com'>View 15 Comment</p>
           </div>
           <div className="com">
                <div className="comment-sec">
                    <input type="text" placeholder='Add a Comment..' />
                </div>
            <div className="smile">
                <CiFaceSmile />
            </div>
           </div>
           <hr />


           <div className="tot2">
                <div className="head">
                    <div className="post">
                        <div className="tit-img">
                            <img src="image/th2.jpeg"alt="++" height={30} width={30} />
                        </div>
                        <div className="tit-name">
                            <div className="rr">
                                <p>trees_woodland_forests</p>
                                <p className='wer'>Mukkudal</p>
                            </div>
                            <div className="aaa">
                                <span>.2d</span>
                            </div>
                        </div>
                    </div>
                    <div className="tit-more">
                        <FiMoreHorizontal size={20}/>
                    </div>
                </div>
                <div className="body">
                    <div className="post-img">
                        <img src="image/th4.jpeg" alt="++" width={465} height={600}/>
                    </div>
                </div>
            </div>
           <div className="like-sec">
                <div className="like">
                    <span><AiOutlineHeart size={25}/></span>
                    <span><BiMessageRounded size={25}/></span>
                    <span><IoPaperPlaneOutline size={25}/></span>
                </div>
                <div className="save">
                    <FiBookmark size={25}/>
                </div>
           </div>
           <div className="likes">
                <p>1,001 likes</p>
           </div>
           <div className="rahul">
                <h4>trees_woodland_forests</h4>
                <p>more</p>
                <p id='com'>View 9 Comment</p>
           </div>
           <div className="com">
                <div className="comment-sec">
                    <input type="text" placeholder='Add a Comment..' />
                </div>
            <div className="smile">
                <CiFaceSmile />
            </div>
           </div>
           <hr />

           <div className="tot2">
                <div className="head">
                    <div className="post">
                        <div className="tit-img">
                            <img src="image/th2.jpeg"alt="++" height={30} width={30} />
                        </div>
                        <div className="tit-name">
                            <div className="rr">
                                <p>trees_woodland_forests</p>
                                <p className='wer'>Mukkudal</p>
                            </div>
                            <div className="aaa">
                                <span>.2d</span>
                            </div>
                        </div>
                    </div>
                    <div className="tit-more">
                        <FiMoreHorizontal size={20}/>
                    </div>
                </div>
                <div className="body">
                    <div className="post-img">
                        <img src="image/th2.jpeg" alt="++" width={465} height={600}/>
                    </div>
                </div>
            </div>
           <div className="like-sec">
                <div className="like">
                    <span><AiOutlineHeart size={25}/></span>
                    <span><BiMessageRounded size={25}/></span>
                    <span><IoPaperPlaneOutline size={25}/></span>
                </div>
                <div className="save">
                    <FiBookmark size={25}/>
                </div>
           </div>
           <div className="likes">
                <p>1,001 likes</p>
           </div>
           <div className="rahul">
                <h4>trees_woodland_forests</h4>
                <p>more</p>
                <p id='com'>View 9 Comment</p>
           </div>
           <div className="com">
                <div className="comment-sec">
                    <input type="text" placeholder='Add a Comment..' />
                </div>
            <div className="smile">
                <CiFaceSmile />
            </div>
           </div>
           <hr />


           <div className="tot2">
                <div className="head">
                    <div className="post">
                        <div className="tit-img">
                            <img src="image/th.jpeg" alt="++" height={30} width={30} />
                        </div>
                        <div className="tit-name">
                            <div className="rr">
                                <p>hugs_for_trees</p>
                                <p className='wer'>Mukkudal</p>
                            </div>
                            <div className="aaa">
                                <span>.2d</span>
                            </div>
                        </div>
                    </div>
                    <div className="tit-more">
                        <FiMoreHorizontal size={20}/>
                    </div>
                </div>
                <div className="body">
                    <div className="post-img">
                        <img src="image/th.jpeg" alt="++" width={465} height={600}/>
                    </div>
                </div>
            </div>
           <div className="like-sec">
                <div className="like">
                    <span><AiOutlineHeart size={25}/></span>
                    <span><BiMessageRounded size={25}/></span>
                    <span><IoPaperPlaneOutline size={25}/></span>
                </div>
                <div className="save">
                    <FiBookmark size={25}/>
                </div>
           </div>
           <div className="likes" id="kkkk">
                <p>1,123 likes</p>
           </div>
           <div className="rahul">
                <h4>hugs_for_trees</h4>
                <p>more</p>
                <p id='com'>View 15 Comment</p>
           </div>
           <div className="com">
                <div className="comment-sec">
                    <input type="text" placeholder='Add a Comment..' />
                </div>
            <div className="smile">
                <CiFaceSmile />
            </div>
           </div>
           <hr />
        </div>
    </div>
    
       
        <aside className='syed'>
        <div className="total-with">
                <div className="sus">
                    <div className="sug-head-tot">
                        <div className="sug-head">
                            <img  src="image/rahul.png.jpg" alt="++" height={45} width={45}/>
                        </div>
                        <div className="sug-name">
                            <b><p className='ee'>rahul_raj9367</p></b>
                            <p className='rr'>RAHUL🌠RAJ</p>
                        </div>
                    </div>
                    <div className="sug-switch">
                        <p>Switch</p>
                    </div>
                </div>
                <div className="v">
                    <div className="a">
                        <p>Suggested for you</p>
                    </div>
                    <div className="aa">
                        <p>See All</p>
                    </div>
                </div>
                <div className="sus1">
                    <div className="sug-head-tot">
                        <div className="sug-head">
                            <img  src="image/th.jpeg" alt="++" height={45} width={45}/>
                        </div>
                        <div className="sug-name">
                            <b><p className='ee'>hugs_for_trees</p></b>
                            <p className='rr'>New to Instagram</p>
                        </div>
                    </div>
                    <div className="sug-switch">
                        <p>Follow</p>
                    </div>
                </div>
                <div className="sus2">
                    <div className="sug-head-tot">
                        <div className="sug-head">
                            <img src="image/th2.jpeg"  alt="++" height={45} width={45}/>
                        </div>
                        <div className="sug-name">
                            <b><p className='ee'>trees_woodland_forests</p></b>
                            <p className='rr'>New to Instagram</p>
                        </div>
                    </div>
                    <div className="sug-switch">
                        <p>Follow</p>
                    </div>
                </div>
                <div className="sus2">
                    <div className="sug-head-tot">
                        <div className="sug-head">
                            <img src="image/zohooo.png"  alt="++" height={45} width={45}/>
                        </div>
                        <div className="sug-name">
                            <b><p className='ee'>zoho</p></b>
                            <p className='rr'>Suggested for you</p>
                        </div>
                    </div>
                    <div className="sug-switch">
                        <p>Follow</p>
                    </div>
                </div>
                <div className="sus2">
                    <div className="sug-head-tot">
                        <div className="sug-head">
                            <img   src="image/google.png" alt="++" height={45} width={45}/>
                        </div>
                        <div className="sug-name">
                            <b><p className='ee'>Google</p></b>
                            <p className='rr'>Suggested for you</p>
                        </div>
                    </div>
                    <div className="sug-switch">
                        <p>Follow</p>
                    </div>
                </div>
                <div className="sus2">
                    <div className="sug-head-tot">
                        <div className="sug-head">
                            <img  src="image/infosys.png" alt="++" height={45} width={45}/>
                        </div>
                        <div className="sug-name">
                            <b><p className='ee'>infosys</p></b>
                            <p className='rr'>Suggested for you</p>
                        </div>
                    </div>
                    <div className="sug-switch">
                        <p>Follow</p>
                    </div>
                </div>
            </div>
        </aside>
        
        </div>
        
    )
}

export default Story;