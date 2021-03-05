import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img className={s.fonImg}  src="https://фартук.рф/upload/resize_cache/iblock/4f4/1000_400_156420db5d35cfb82f16501d0f4565d1d/4f4b7843c0471873265e6c43fd27d835.jpg" alt="fon"/>
            </div>
            <div>
                 <img className={s.avatar} src="http://i.gtimg.cn/music/photo/mid_album_500/2/y/002RmezS1m0w2y.jpg" alt="avatar"/>
            </div>
        </div>
    );
}

export default ProfileInfo;
