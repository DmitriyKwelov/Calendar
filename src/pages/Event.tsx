import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../component/EventCalendar";
import EventForm from "../component/EventForm";
import {useAction} from "../hooks/UseAction";
import {IUser} from "../models/IUser";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Event: FC = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests} = useAction()
    const {guests} = useTypedSelector(state => state.event)

    useEffect(() => {
        fetchGuests()
    }, [])

    return (
        <Layout>
            <EventCalendar events={[]}/>
            <Row justify={"center"}>
                <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
            title="Добавить событие"
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests}/>
            </Modal>
        </Layout>
    );
};

export default Event;