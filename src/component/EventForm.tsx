import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";

interface EventFormProps {
    guests: IUser[]
}

const EventForm: FC<EventFormProps> = ({guests}) => {
    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                    ]}>
                    {guests.map(guest =>
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
                {/*<Select*/}
                {/*    defaultValue="lucy"*/}
                {/*    style={{ width: 120 }}*/}
                {/*    {guests.map(guest => {*/}

                {/*    })}*/}
                {/*    options={[*/}
                {/*        {*/}
                {/*            value: 'jack',*/}
                {/*            label: 'Jack',*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*/>*/}
            </Form.Item>
            <Row justify={"end"}>
                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;