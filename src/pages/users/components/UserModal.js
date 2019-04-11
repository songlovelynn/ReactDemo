import { Component } from 'react';
import { Modal, Form, Input, Avatar, Button, Radio } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            visible: false,
        };
    }

    handleValue = (e) => {
        this.props.handleValue(e.target.value)
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    showModelHandler = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    };

    hideModelHandler = () => {
        this.setState({
            visible: false,
        });
    };

    okHandler = () => {
        this.hideModelHandler();
        console.log('id',this.props.id);
    };

    render() {
        const { children } = this.props;

        return (
            <span>
                <span onClick={this.showModelHandler}>
                    {children}
                </span>
                <Modal
                    width={300}
                    title="选择职业"
                    visible={this.state.visible}
                    onOk={this.okHandler}
                    onCancel={this.hideModelHandler}
                >
                    <Radio.Group
                        buttonStyle="solid"
                        onChange={this.handleValue}
                    >
                        <Radio.Button value="hj">花间</Radio.Button>
                        <Radio.Button value="dj">毒经</Radio.Button>
                        <Radio.Button value="bx">冰心</Radio.Button>
                        <Radio.Button value="mw">莫问</Radio.Button>
                        <Radio.Button value="cy">苍云</Radio.Button>
                        <Radio.Button value="pl">蓬莱</Radio.Button>
                        <Radio.Button value="cj">藏剑</Radio.Button>
                        <Radio.Button value="bd">霸刀</Radio.Button>
                        <Radio.Button value="hs">和尚</Radio.Button>
                        <Radio.Button value="mj">明教</Radio.Button>
                        <Radio.Button value="jc">剑纯</Radio.Button>
                        <Radio.Button value="qc">气纯</Radio.Button>
                        <Radio.Button value="nd">奶毒</Radio.Button>
                        <Radio.Button value="nx">奶秀</Radio.Button>
                        <Radio.Button value="ng">奶歌</Radio.Button>
                        <Radio.Button value="nh">奶花</Radio.Button>
                    </Radio.Group>
                </Modal>
            </span>
        );
    }
}

export default Form.create()(UserEditModal);