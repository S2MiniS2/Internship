import { useNavigate } from 'react-router-dom';
// import MainPage from '../components/MainPage';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/skill.scss'
import FooterPage from '../components/FooterPage';



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


const Skill = () => {
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
   //const navigate = useNavigate();


    return (
        <>
            <article className='article2' class="pt-5">
                <section className='interface_page'>
                    <div className='interface_section'>
                        <p className='interface_font'>
                            SCARF-R <br></br>
                            새로운  <br></br>
                            비주얼 플랫폼
                        </p>

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
                        <p className='des_font'>
                        SCARF-R은 직관적인 인터페이스와 <br></br>
                        데이터베이스의 추적성 및 무결성을 결합하여 <br></br>
                        팀의 향상된 업무 효율과 신뢰성을 도와줍니다.
                        </p>

                       
                    </div>

                    <img alt="img" className='FTA2' src='img/FTA.gif'></img>
                </section>

                <section className='aboutBOM'>
                    <div className='BOM_page'>
                        <div className='BOM_section'>
                            <h1>모든 것은 데이터를 입력하는 것에서 시작됩니다.</h1>
                            <p>프로젝트를 생성하고, 장치를 관리하세요. <br></br>
                               더이상 수정 및 삭제에 오랜 시간을 쓰지 마세요. <br></br>
                               SCARF-R에서는 실시간 업데이트 기능으로 모든 데이터를 추적할 수 있습니다.
                            </p>
                            <img alt='img' src="img/aboutBOM.jpg"></img>
                        </div>
                    </div>
                </section>


                <section className='aboutFMECA'>
                    <div className='FMECA_page'>
                        <div className='FMECA_section'>
                        <h1>사용하기 쉬운 인터페이스로 효율적인 작업을 경험해보세요!</h1>          
                            <p>
                            실시간으로 데이터가 연결되고, 흐름을 인식합니다. <br></br>
                            데이터, 작업, 워크플로우 상태 등을 추가합니다.
                            여러분은 캔버스에 무엇이든 추가할 수 있고
                            시각적인 즐거움도 얻을 수 있습니다. <br></br>
                            유연한 워크플로우를 작성해보세요
                            </p>
                        <img alt="img" src="/img/tracing.gif" className='FMECA'></img>
                        </div>
                    </div>
                            

                </section>
                <section className='aboutRBD'>
                    <div className='RBD_page'>
                        <div className='RBD_section'>
                            <h1>
                                독보적인 자동화 기능을 체험해보세요!
                            </h1>
                            <p>
                                Drag & Drop 기능으로 쉬운 데이터 배치가 가능합니다.<br></br>
                                여러분은 필요없는 단계를 생략하고
                                오직 시스템의 신뢰성을 평가하고 향상시키는 데에 집중하세요 <br></br>
                            

                            </p>
                            <p className='Only'>
                                오직 SCARF-R에서만
                            </p>

                            <img alt="img" src="img/drag.gif" className='drag'></img>
                        </div>
                    </div>
                            

                </section>
                <section className='aboutFTA'>
                    <div className='FTA_page'>
                        <div className='FTA_section'>
                            <h1>
                                더 나아가 원클릭의 세상으로
                            </h1>
                            <p>
                            오직 단 한번의 이동으로 미리보기를 경험하세요 <br></br>
                            SCARF-PRO는 불필요한 단계 없이 직관적이고, 간편한 방법으로 데이터 구조를 미리볼 수 있습니다.
                            </p>
                            <img alt="img" src="/img/aboutRBD.gif" className='RBD'></img>
                       
                        </div>
                    </div>
                            

                </section>

            </article>
        
        <footer className='footer2'>

        <h1 style={{textAlign: 'center' , fontSize: '50px' ,fontWeight:'bold', padding: '60px 0 20px'}}>모든 것을 SCARF-R에서 경험해보세요</h1>
        <Button><Link to='Price'>SCARF 사용해보기</Link></Button>
        </footer>
        
        <FooterPage></FooterPage>                              
        </>
    );
                        }

export default Skill;

