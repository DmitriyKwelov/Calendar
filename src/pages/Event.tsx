import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../component/EventCalendar";
import EventForm from "../component/EventForm";
import {useAction} from "../hooks/UseAction";
import {IUser} from "../models/IUser";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";


const Event: FC = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useAction()
    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        createEvent(event)
        setModalVisible(false)
    }

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify={"center"}>
                <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
            title="Добавить событие"
            open={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;