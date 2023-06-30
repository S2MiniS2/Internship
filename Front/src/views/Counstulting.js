import AutoSlide from '../components/AutoSlide';
import '../styles/counsulting.scss';
import React, { useRef } from 'react';
import FooterPage from '../components/FooterPage';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const Counsulting = () => {
    const sectionRef = useRef({});
    const handleButtonClick = () => {
        const sectionPosition = sectionRef.current.offsetTop;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    };

    return (
        <>
            <article className='counsulting_article'>
                <section className='counsult_page'>
                    <div className='count_text'>
                        <p>
                           
                            함께 만들어가는,
                            <br />
                            함께 나아가는 미래
                        </p>
                        <h3>당신의 성장을 함께합니다.</h3>

                        <button className='button1' onClick={handleButtonClick}>
                            <h5>더 알아보기</h5>
                        </button>
                    </div>
                </section>

                <section className='service_page' ref={sectionRef}>
                    {/* <p>서비스</p> */}
                    <p className='big_font'>Why SCARF-R?</p>

                    <div className='icon_section'>
                        <div className='01_section'>
                            <img alt='img' src='./img/icon01.jpg'></img>
                            <p>전문 컨설턴트의 조언</p>
                            <p>비즈니스 이해 및 설계</p>
                        </div>

                        <div className='02_section'>
                            <img className='icon2'  alt='img' src='./img/icon02.jpg'></img>
                            <p>자체 개발 솔루션</p>
                            <p>전문 컨설턴트 기반의 인하우스 개발</p>
                        </div>

                        <div className='03_section'>
                            <img alt='img' src='./img/icon03.jpg'></img>
                            <p>즉각적인 대응</p>
                            <p>단방향이 아닌 쌍방향</p>
                        </div>
                    </div>
                </section>

                <section className='count_page'>
                    <p>전문 컨설턴트의 노하우를 믿으세요! </p>
                    <p className='count_font'>29 ㆍ 10ㆍ 120%</p>
                    <div className='count_description'>
                        <span>년의 경험</span>
                        <span>명의 입증된 전문가</span>
                        <span>고객 만족도</span>
                    </div>
                </section>

                <section className='description_page'>
                    <div className='description_text'>
                        <p>소개</p>
                        <p className='big_font'>더이상 오랜 시간을 기다리지 마세요</p>
                        <h3>
                            SCARF-R/P 는 그 어떤 툴보다 빠른 대응을 지원합니다
                        </h3>
                        <p className='bolde'>자체개발이기에 가능한 마법</p>

                        <div className='description_img'>
                            <img src='./img/마인드맵.jpg'></img>
                        </div>
                        <p>
                            비즈피어는 1994년 품질, 프로세스 및 엔지니어링
                            서비스 전문 컨설팅회사로서 설립되어
                            <br></br>
                            현재까지 다양한 산업분야에서 고객의 성공 및 비즈니스
                            혁신을 위한 컨설팅을 수행해 왔습니다.
                            <br></br>
                            RAMS, SIL 분야의 전문컨설턴트의 컨설팅 기반으로 국내
                            표준에 맞춘 자체 개발 프로그램 Scarf를 만나보세요!
                            <br></br>
                            <p>
                            <br></br>
                            </p>
                            <p className='big_font'>
                                당신이 모르더라도, 우리가 알아서 해결해드립니다
                            </p>
                            <h3>전문적인 컨설턴트의 솔루션을 제공합니다.</h3>
                            <p className='bolde'>쉿- 고객님 이건 서비스에요</p>
                        </p>
                        <p>
                            사용법을 몰라도 걱정하지마세요. 우리가 알아서 해결해
                            드립니다.
                            <br></br>
                            전문가들이 책임지는 서비스로, 고객님은 안심하고
                            맡겨주세요
                            <br></br>
                            우리는 고객의 요구사항에 맞춰 최신 기술과 전문
                            개발자들로 구성된 팀을 보유하고, 자체 개발 능력을
                            바탕으로 맞춤형 솔루션을 제공합니다.
                            <br></br>
                            번거로운 유통과정없이 다이렉트로 우리의 툴과 솔루션을
                            체험해보세요!
                        </p>
                            <div className='description_img'>
                                <img src='img/express.png' alt=""></img>
                            </div>
                    </div>
                      </section>

            <section className='review_page'>
                <p>추천사</p>
                <h1>"고객 후기입니다"</h1>
                <div className='review_slide'>
                    <AutoSlide
                        text={['리뷰1', '리뷰2', '리뷰3']}
                    ></AutoSlide>
                </div>
            </section>

            <section className='gogak_page'>
                <p>우리의 고객사</p>

            
        <div className="mainSkill  pb-36 relative overflow-hidden">
            <div className="flex flex-row mb-10 absolute animate-slider" >
                <img className="w-500 h-full mr-10" src={'./img/다원시스.png'} alt="css logo" />
                <img className="w-500 h-full mr-10" src={'./img/우진산전.jpg'} alt="css logo" />
                <img className="w-100 h-full mr-10" src={'./img/씨에스.png'} alt="javascript logo" />
                <img className="w-120 h-full mr-10" src={'./img/유진기공.jpg'} alt="react logo" />
                <img className="w-120 h-full mr-10" src={'./img/샬롬.jpg'} alt="vue logo" />
                <img className="w-120 h-full mr-10" src={'./img/lg.jpg'} alt="nuxt logo" />
                <img className="w-120 h-full mr-10" src={'./img/한국철도기술연구원.jpg'} alt="scss logo" />
                <img className="w-120 h-full mr-10" src={'./img/코레일.jpg'} alt="styled logo" />
                <img className="w-130 h-900 mr-10" src={'./img/한국도로공사.jpg'} alt="tailwind logo" />
                <img className="w-130 h-900 mr-10" src={'./img/인천교통공사.jpg'} alt="tailwind logo" />
                <img className="w-130 h-900 mr-10" src={'./img/도시철도공사.jpg'} alt="tailwind logo" />
             
               {/* 반복 */}
                <img className="w-500 h-full mr-10" src={'./img/다원시스.png'} alt="css logo" />
                <img className="w-500 h-full mr-10" src={'./img/우진산전.jpg'} alt="css logo" />
                <img className="w-100 h-full mr-10" src={'./img/씨에스.png'} alt="javascript logo" />
                <img className="w-120 h-full mr-10" src={'./img/유진기공.jpg'} alt="react logo" />
                <img className="w-120 h-full mr-10" src={'./img/샬롬.jpg'} alt="vue logo" />
                <img className="w-120 h-full mr-10" src={'./img/lg.jpg'} alt="nuxt logo" />
                <img className="w-120 h-full mr-10" src={'./img/한국철도기술연구원.jpg'} alt="scss logo" />
                <img className="w-120 h-full mr-10" src={'./img/코레일.jpg'} alt="styled logo" />
                <img className="w-130 h-900 mr-10" src={'./img/한국도로공사.jpg'} alt="tailwind logo" />
                <img className="w-130 h-900 mr-10" src={'./img/인천교통공사.jpg'} alt="tailwind logo" />
                <img className="w-130 h-900 mr-10" src={'./img/도시철도공사.jpg'} alt="tailwind logo" />
             
               </div>
        </div>
        

            </section>
            <section className='form_page'>
                <div className='text_page'>
                    <p>문의</p>
                    <h1>함께 일해요</h1>
                    <p>
                    서울특별시 금천구 벚꽃로 254 월드메르디앙벤처센터 1차 611

                    우편번호 : 08511 <br/>

                    Tel: 02-2113-8268 <br/>

                    Fax: 02-2113-8269   <br/>

                    </p>
            </div>
            
            <div className='mailform'>
                
                <form>
                    <MDBInput
                        className='mb-1'
                        type='name'
                        id='form1Example1'
                        label='이름을 입력해주세요'
                    />
                    <MDBInput
                        className='mb-2'
                        type='name'
                        id='form1Example2'
                        label='성을 입력해주세요'
                    />
                    
                    <MDBInput
                        className='mb-3'
                        type='email'
                        id='form1Example3'
                        label='이메일을 입력해주세요'
                    />
                    <MDBInput 
                        className='mb-4'
                        type='message'
                        id='form1Example4'
                        label='메세지를 입력해주세요'
                    />

                    <MDBBtn type='submit' block>
                        제출
                    </MDBBtn>

                </form>
            </div>
            </section>
            </article>
            <FooterPage />
        </>
    );
};

export default Counsulting;
