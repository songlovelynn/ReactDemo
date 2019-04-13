import React, { PureComponent } from 'react';
import { Col, Row, Card, Avatar, } from 'antd';
import UserModal from './components/UserModal';
import jc from './img/jc.png';
import qc from './img/qc.png';

export default class Users extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            imgSrc:[],
            value: null,
        };
    }


    handleValue = (value) => {
        this.setState({ value: value });
    }

    handleOk = (id) => {
        const imgSrc = [...this.state.imgSrc];
        imgSrc.splice(id,1,`http://101.132.32.14:8888/download?filename=/www/wwwroot/img/${this.state.value}.png`);
        this.setState({imgSrc:imgSrc});
        console.log('img',this.state.imgSrc[0]);
    }

    render() {


        //const imgSrc = `http://101.132.32.14:8888/download?filename=/www/wwwroot/img/${this.state.value}.png`;

        const gridStyle = {
            width: 130,
            textAlign: 'center',
        };

        return (
            <div style={{ padding: '30px' }}>
                <div style={{ padding: '30px' }}>
                    <h1 style={{textAlign: 'center'}}>第一局</h1>
                    <Row gutter={32} style={{ background: '#ECECEC', padding: '30px' }}>
                        <Col span={8}>
                            {/* 左边pick */}
                            <Card title="PICK" style={{ width: 391 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={0} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[0]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={1} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[1]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={2} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[2]} />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={4}>
                            {/* 左边ban */}
                            <Card title="先BAN" style={{ width: 130 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={3} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[3]} />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={4}>
                            {/* 右边ban */}
                            <Card title="后BAN" style={{ width: 130 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={4} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[4]} />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={8}>
                            {/* 右边pick */}
                            <Card title="PICK" style={{ width: 391 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={5} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[5]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={6} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[6]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={7} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[7]} />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div style={{ padding: '30px' }}>
                <h1 style={{textAlign: 'center'}}>第二局</h1>
                    <Row gutter={32} style={{ background: '#ECECEC', padding: '30px' }}>
                        <Col span={8}>
                            {/* 左边pick */}
                            <Card title="PICK" style={{ width: 391 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={8} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[8]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={9} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[9]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={10} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[10]} />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={4}>
                            {/* 左边ban */}
                            <Card title="后BAN" style={{ width: 130 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={11} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[11]} />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={4}>
                            {/* 右边ban */}
                            <Card title="先BAN" style={{ width: 130 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={12} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[12]} />
                                    </UserModal>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={8}>
                            {/* 右边pick */}
                            <Card title="PICK" style={{ width: 391 }}>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={13} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[13]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={14} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[14]} />
                                    </UserModal>
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>
                                    <UserModal id={15} handleValue={this.handleValue} handleOk={this.handleOk} >
                                        <Avatar size={80} alt="example" src={this.state.imgSrc[15]} />
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
