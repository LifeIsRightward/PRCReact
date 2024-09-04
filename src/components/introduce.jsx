import React from "react"
import Myphoto from '../img/MyPhoto.jpg'

//test
export default function Introduce() {
    return (
        <div className="introduce-container">
            <div className="introduce-img">
                <img src={Myphoto} className="imgmy"></img>
                <p className="introduceimgtext">▲ 한림대학교 빅데이터 19학번 김대현</p>
            </div>
            <div className="introduce-text">
                <h1>그의 한 마디</h1>
                <p> "느려도 좋으니, 조금씩이라도 앞으로 가자!!" <br />
                    안녕하세요! 웹 프런트엔드 개발을 꿈꾸는 빅데이터 19학번 김대현입니다!<br />
                    저는 2019년도에 입학한 후, 전공과 관련된 활동과 사람들을 만나는 대외적인 활동들을 꾸준히 진행해 왔습니다. <br />
                    여러 활동들을 진행하면서 저의 특기는 여러 사람과 진행하는 협업 프로젝트에 있어서, 지치지 않고 즐겁게 어떠한 일이든 풀어나가는 것임을 알게 되었습니다.<br />
                    이를 바탕으로 매년 교내 학술동아리인 "씨애랑"에서 SW 전시회를 참가하고 있습니다.<br />
                    또한 가장 큰 지식 습득의 방법은, 내가 이해한 것을 바탕으로 다른 사람들에게 설명하고 이해시키는 것이라고 생각합니다.<br />
                    여태까지 멘티 활동을 진행해 왔고, 2024년도에는 제가 멘토로써 멘티들에게 전공지식을 알려주고 있습니다.<br />
                    저의 경험으로 하여금 많은 사람들이 조금 더 쉽게 이해하고, 다양한 사람들과의 지식공유, 협업을 발판 삼아 끊임없이 발전하고 있습니다.<br /></p>
            </div>
        </div>

    );
}