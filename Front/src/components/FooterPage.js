import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
} from 'mdb-react-ui-kit';

export default function FooterPage() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size='auto'>
                                <p className='pt-2'>
                                    <strong>SCARF-R/P 구독하기</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput
                                    contrast
                                    type='email'
                                    label='Email address'
                                    className='mb-4'
                                />
                            </MDBCol>

                            <MDBCol size='auto'>
                                <MDBBtn
                                    outline
                                    color='light'
                                    type='submit'
                                    className='mb-4'
                                >
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>
            </MDBContainer>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                    <MDBIcon icon='home' className='me-2' />
                    서울특별시 금천구 벚꽃로 254 월드메르디앙벤처센터 1차 611호
                </p>
                <p>
                    <MDBIcon icon='envelope' className='me-3' />
                    우편번호 : 08511
                </p>
                <p>
                    <MDBIcon icon='phone' className='me-3' /> Tel: 02-2113-8268
                </p>
                <p>
                    <MDBIcon icon='print' className='me-3' /> Fax: 02-2113-8269
                </p>
            </MDBCol>

            <div
                className='text-center p-3'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                © 2023 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    Bizpeer.com
                </a>
            </div>
        </MDBFooter>
    );
}
