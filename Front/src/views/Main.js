import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import FooterPage from '../components/FooterPage';
import { Link } from 'react-router-dom';
import BasicTabs from '../components/BasicTaps';
import { useState } from 'react';

const styles = {
    input: {
        width: 300,
        outline: 'none',
        fontSize: 20,
        padding: 12,
        border: 'none',
        backgroundColor: '#ddd',
        marginTop: 3,
    },
    button: {
        width: 180,
        height: 55,
        border: 'none',
        borderRadius: 4,
        fontSize: 20,
        cursor: 'pointer',
        transition: '.25s all',
    },
    buttonEnabled: {
        backgroundColor: 'white',
        width: 220,
    },
};

const Main = () => {
    const [disabled, setDisabled] = useState('');

    const handleChange = (e) => {
        const length = e.target.value.length;
        if (length >= 4) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    const label = disabled ? 'E-Mail 입력' : '사용해보기';

    // const test = () => {
    //     alert("구현중...")
    // }
    //onClick={test}

    return (
        <>
            {/* <nav className='switch_bar'>
                <a href='localhost:8080'>
                    <Button variant='contained'>home</Button>
                </a>
                <Link to='price'>
                    <Button variant='contained'>subscribe</Button>
                </Link>

                <Button variant='contained'>go to app</Button>
            </nav> */}

            <article className='article'>
                <section className='interface_page'>
                    <div className='interface_section'>
                        <p className='interface_font' pt-5>
                            클릭 한 번으로,
                            <br></br>
                            직관적이고 간편한
                            <br></br>
                            인터페이스를
                            <br></br>
                            즐겨보세요!
                        </p>

                        <h2 className='interface_second_font'>
                            다량의 데이터를 그래픽 인터페이스로
                            <br></br>파악하고 관리할수 있는 비주얼 신뢰성 공학
                            툴.
                            <br></br>한 눈에 파악하고 한 번에 관리하세요!
                        </h2>
                        {/* <div className='subscribe_button'>
                            <Button
                                disabled={disabled}
                                style={Object.assign(
                                    {},
                                    styles.button,
                                    disabled && styles.buttonEnabled
                                )}
                            >
                                {label}
                            </Button>
                            <div className='input1'>
                                <input
                                    onChange={handleChange}
                                    style={styles.input}
                                />
                            </div>
                        </div> */}

                        <p className='interface_third_font'>
                            <br></br>
                            최신 기술과 독창적인 디자인을 결합한 완전히 새로운
                            서비스
                        </p>
                    </div>

                    <img alt='img' className='FTA' src='img/FTA.gif'></img>
                </section>

                <section className='visualtool_page'>
                    <div className='visualtool_page'>
                        <h1>
                            제품의 강력한 기능과 직관적인 UI를 경험해보세요.
                        </h1>
                        <p className='side-descript-font'>
                            시각적인 표현을 통해 다량의 데이터를 쉽게 파악하고
                            처리할 수 있습니다.
                        </p>

                        <div className='tool_tab'>
                            <BasicTabs
                                data={['BOM', 'FMECA', 'RBD', 'FTA']}
                            ></BasicTabs>
                        </div>
                    </div>
                </section>

                <section className='workflow_page'>
                    <div className='workflow_section'>
                        <h1>사용자에게 적합한 다이어그램</h1>
                        <p className='side-descript-font'>
                            직렬처리와 병렬처리를 결합해 빠른 데이터 처리와 높은
                            처리 성능을 제공합니다.
                        </p>
                        <span>Drag & Drop 기능으로 간편하게</span>

                        <div className='tool_tab'>
                            <img
                                alt='img'
                                src='img/drag.gif'
                                className='drag_gif'
                            ></img>
                        </div>
                    </div>
                </section>

                <section className='database_page'>
                    <div className='database_section'>
                        <h1>데이터 추적 기능</h1>
                        <p className='side-descript-font'>
                            다량의 데이터베이스에서 데이터 추적을 유지함으로써
                            쉽고 빠르게 실시간 데이터를 확인하세요!
                        </p>
                        <span>독자적인 SCARF-R의 마법입니다!</span>
                        {/* <div className='slide'>
                                <SimpleSlider></SimpleSlider>
                            </div> */}
                    </div>

                    <img
                        alt='img'
                        src='/img/tracing.gif'
                        className='tracing_gif'
                    ></img>

                    <Link to='Skill'>
                        {' '}
                        <p>알아보기</p>{' '}
                    </Link>
                </section>

                <section className='diagram_page'>
                    <div className='diagram_section'>
                        <h1>무결성이 보장된 실시간 데이터 업데이트</h1>
                        <p className='side-descript-font'>
                            당신의 데이터는 언제나 최신 상태로 유지됩니다!{' '}
                            <br></br>
                            데이터 손실 및 변경을 감지하고, 신뢰할 수 있는
                            상태로 유지하기위한 기능을 경험해보세요!
                        </p>
                    </div>
                    <div className='diagram_img'>
                        <img
                            alt='img'
                            src='/img/logo.jpg'
                            className='diargram'
                        ></img>
                    </div>

                    <Link to='Skill'>
                        {' '}
                        <p>알아보기</p>{' '}
                    </Link>
                </section>

                <section className='wiki_page'>
                    <div className='wiki_section'>
                        <h1>R-P 실시간 채팅 기능</h1>
                        <h3>
                            R-P의 실시간 채팅기능으로
                            <br></br>
                            업데이트 사항을 한눈에 보고 관리하세요!
                        </h3>
                        <h3>데이터 업데이트 알림으로 상호작용 가능</h3>
                        <h3>실시간 Chat 기능</h3>
                    </div>
                    <img
                        alt='img'
                        className='wiki_img'
                        src='img/logo.jpg'
                    ></img>
                </section>

                <section className='application_page'>
                    <img alt='img' className='app_img' src='img/logo.jpg'></img>

                    <div className='application_section'>
                        <h1>최적화된 솔루션 제공</h1>
                        <h3>
                            당신의 비즈니스를 성공으로 이끄는 데 <br></br>
                            도움을 드리겠습니다. 저희 컨설팅 서비스는 전문성과
                            경험을 바탕으로 고객의 요구에 최적화된 솔루션을
                            제공합니다. 함께 일하며 혁신적인 아이디어와 전략을
                            구상하고 실행해보세요. 성공을 향한 첫 걸음, 저희와
                            함께 시작해보세요.
                        </h3>
                        <h2>
                            <Link to='Counsulting'>전문가에게 솔루션 받기</Link>
                        </h2>
                    </div>
                </section>

                {/* <section className='bottom_page'>
                    <div className='startup_section'>
                        <img alt="img"
                            className='work_icon'
                            src='./img/icon-work.webp'
                        ></img>

                        <div className='startup_contents'>
                            <h2>국산 신뢰성 공학 툴</h2>
                            <p>국내를 대표하는 최고 품질의 신뢰성 분석 도구</p>
                        </div>
                    </div>

                    <div className='support_section'>
                        <img alt="img"
                            className='support_icon'
                            src='./img/icon-support.webp'
                        ></img>

                        <div className='support_contents'>
                            <h2>실시간 지원</h2>
                            <p>앱 내 실시간 채팅 지원</p>
                        </div>
                    </div>

                    <div className='hybrid_section'>
                        <div className='hybrid_contents'>
                            <h2>실시간 업데이트</h2>
                            <p>
                                실시간 또는 비동기식으로 동료들과 부드럽게
                                작업합니다.
                                <br></br>
                                모든 사람에게 더 빠르게 시각자료를 전합니다.
                            </p>
                            <br></br>
                        </div>

                        <img alt="img"
                            className='hybrid_icon'
                            src='./img/hybrid.webp'
                        ></img>
                    </div>
                </section> */}
            </article>

            <footer>
                {/* <div className='workspace_section'>
                    <p>
                        SCARF-R/P는 스마트 비주얼 플랫폼 위에서 구동되는
                        독보적인 데이터관리 플랫폼입니다.
                    </p>
                    <div className='start_button'>
                        <Link to='price'>
                            <Button>SCARF-R/P 시작하기</Button>
                        </Link>
                    </div>
                </div> */}

                <FooterPage />
            </footer>
        </>
    );
};

export default Main;
