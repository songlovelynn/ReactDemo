import React, { PureComponent } from 'react';
import { Col, Row, Card, Avatar, } from 'antd';
import UserModal from './components/UserModal';
import jc from './img/jc.png';
import qc from './img/qc.png';


export default class Users extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    handleValue = (value) => {
        this.setState({ value: value });
    }

    render() {

        const imgSrc = `http://101.132.32.14:8888/download?filename=/www/wwwroot/img/${this.state.value}.png`;

        const gridStyle = {
            width: 130,
            textAlign: 'center',
        };

        return (
            <div style={{ padding: '30px' }}>
                <div style={{ padding: '30px' }}>
                    <Row gutter={32} style={{ background: '#ECECEC', padding: '30px' }}>
                        <Col span={8}>
                            {/* 左边pick */}
                            <Card title="PICK" style={{ width: 391 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={1} handleValue={this.handleValue} >
                                        <Avatar size={80} alt="example" src={imgSrc} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={2} handleValue={this.handleValue} >
                                        <Avatar size={80} alt="example" src={imgSrc} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal record={{}} >
                                        <Avatar size={80} alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={4}>
                            {/* 左边ban */}
                            <Card title="先BAN" style={{ width: 130 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal record={{}} >
                                        <Avatar size={80} alt="example" src="https://s2.ax1x.com/2019/04/09/AIsOTf.png" />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={4}>
                            {/* 右边ban */}
                            <Card title="后BAN" style={{ width: 130 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal record={{}} >
                                        <Avatar size={80} alt="example" src="https://s2.ax1x.com/2019/04/09/AIyajA.png" />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={8}>
                            {/* 右边pick */}
                            <Card title="PICK" style={{ width: 391 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal record={{}} >
                                        <Avatar size={80} alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal record={{}} >
                                        <Avatar size={80} alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal record={{}} >
                                        <Avatar size={80} alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div >
        );
    }
}
