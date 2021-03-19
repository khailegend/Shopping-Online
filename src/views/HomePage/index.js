import React, { Component } from 'react';
import Banner from './banner/banner';
import BannerCate from './banner-cate/bannerCate';
import BoyShose from './boyShose/boyShose';
import HotShose from './hotShose/hotShose';
import Hashtag from './hashtag/hashtag';

class index extends Component {
    render() {
        return (
            <div >
                <Banner />
                <BannerCate/>
                <HotShose />
                <BoyShose />
                <Hashtag />
            </div>
        );
    }
}

export default index;
