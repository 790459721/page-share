import React from 'react'
import './IssueWord.less'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'

function issueWord() {
    return (
        <div className="issue_wrapper">
            <div className="issue_banner"></div>
            <div className="issue_title">发刊词：你会吃吗？</div>
            <AudioPlayer />
            <h3 className="issue_content_title">你会吃吗</h3>
            <content className="issue_content">
                <p>俗话说：“民以食为天，食以味为先”。近年来，中国许多地区因营养不良造成的疾病正在减少。但是，高血压、心脑血管病、糖尿病等各种慢性疾病的发病率正在逐年上升，饮食不当已经成为疾病发生的重要原因。合理安排平衡膳食，科学摄取营养，可有效预防与膳食相关的疾病，维护身体健康。因此，膳食营养专业知识的学习显得尤为重要。</p>
                <br/>
                <p>《舌尖上的中国》的热播引得人们蠢蠢欲动，从米其林餐厅，到路边摊大排档。纵横美食界，最重要的是什么？鼓鼓的钱包？错！是一个健康的饮食。然而现代人常常受到身体的健康困扰。如何更好的把握膳食营养学？从现在开始学习，不仅仅获得职场证书，更能学习到真正的“营养”。</p>
                <br/>
                <p>人体是一个非常有趣的系统，每天人体会摄入很多食物，人类需要食物来提供能量和各种营养素，食物中具有营养功能的物质称为营养素，用以维持生理和生活的需要，保证人体的健康。人体时时刻刻是离不开营养素的。如何平衡地、健康地、合理地摄入以及分配营养素呢？不止老年人，越来越多的年轻人也开始慢慢关注膳食营养了。</p>
                <br/>
            </content>
            <footer className="issuce_footer">
                <div className="issuce_price_box">
                    <div className="issuce_price">￥2120</div>
                    <div className="price_detial">
                        <div className="price_detail_txt">明细</div>
                        <div className="icon_arrow_up"></div>
                    </div>
                </div>
                <div className="footer_btn">报名学习</div>
            </footer>
        </div>
    )
}

export default issueWord

