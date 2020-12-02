import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import Timetable from 'react-timetable-events'
import moment from 'moment';

import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import TimePicker from 'react-time-picker';
import Select from 'react-select';

const options = [
    { value: 'test123', label: 'test123' },
    { value: 'user1', label: 'user1' },
    { value: 'user2', label: 'user2' },
];

export default function Schedual() {
    const [changePage, setChangePage] = useState(0)
    const [openSidePanel, setOpenSidePanel] = useState(true)
    const [date, setDate] = useState()
    const [time, setTime] = useState('10:00');
    const [selectedUsers, setSelectedUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState([])
    const [name, setName] = useState()

    const [schedualList, setSchedualList] = useState([])


    const handleChange = selectedUser => {
        // var users = [...selectedUsers, selectedUser]
        // setSelectedUsers(users);
        setSelectedUser(selectedUser);
    };

    const addSchedual = () => {
        let schedual = {
            name: name,
            date: date,
            time: time,
            usersList: selectedUser
        }
        setSchedualList([...schedualList, schedual])
    }

    const events = {
        monday: [
            {
                id: 1,
                name: 'Custom Event 1',
                type: 'custom',
                startTime: moment('2018-02-23T11:30:00'),
                endTime: moment('2018-02-23T13:30:00')
            }
        ],
        tuesday: [
            {
                id: 2,
                name: 'Custom Event 2',
                type: 'custom',
                startTime: moment('2018-02-22T12:30:00'),
                endTime: moment('2018-02-22T14:30:00')
            },
            {
                id: 3,
                name: 'Custom Event 3',
                type: 'custom',
                startTime: moment('2018-02-22T16:30:00'),
                endTime: moment('2018-02-22T18:45:00')
            }
        ],
        wednesday: [
            {
                id: 4,
                name: 'Custom Event 3',
                type: 'custom',
                startTime: moment('2018-02-22T18:30:00'),
                endTime: moment('2018-02-22T20:45:00')
            }
        ],
        thursday: [
            {
                id: 3,
                name: 'Custom Event 3',
                type: 'custom',
                startTime: moment('2018-02-22T08:30:00'),
                endTime: moment('2018-02-22T09:45:00')
            }
        ],
        friday: [
            {
                id: 4,
                name: 'Custom Event 3',
                type: 'custom',
                startTime: moment('2018-02-22T10:30:00'),
                endTime: moment('2018-02-22T11:45:00')
            },
            {
                id: 5,
                name: 'Custom Event 3',
                type: 'custom',
                startTime: moment('2018-02-22T19:30:00'),
                endTime: moment('2018-02-22T22:45:00')
            }
        ]
    }

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh", width: "100vw", background: "#56baed" }}>
            <div style={{ height: "85vh", width: "65vw", background: "white", borderRadius: "10px" }}>
                <div className="d-flex" style={{ height: "10%", width: "100%" }}>
                    <div
                        className={changePage == 0 ? "selected p-4 d-flex justify-content-center align-items-center" : " header-options p-4 d-flex justify-content-center align-items-center"}
                        style={{ width: "50%" }}
                        onClick={(e) => {
                            e.preventDefault();
                            setChangePage(0)
                        }}>
                        <text className="code">Set Schedual</text>
                    </div>
                    <div
                        className={changePage == 1 ? "selected p-4 d-flex justify-content-center align-items-center" : " header-options p-4 d-flex justify-content-center align-items-center"}
                        style={{ width: "50%" }}
                        onClick={(e) => {
                            e.preventDefault();
                            setChangePage(1)
                        }}>
                        <text className="code">View Schedual</text>
                    </div>
                </div>

                <div className="d-flex p-5" style={{ height: "90%", width: "100%" }}>
                    {
                        changePage === 0 &&
                        <Row className="w-100" style={{ height: "100%" }}>
                            <Col xs='3'>
                                <div
                                    className="w-100 d-flex flex-column align-items-center justify-content-between"
                                    style={{ height: "90%", borderRight: "2px solid #56baed" }}>
                                    <div className="w-100 p-2  d-flex flex-column align-items-center">
                                        {
                                            schedualList.map((schedual, index) => {
                                                return (
                                                    <div className="mt-2 p-2 w-100 d-flex justify-content-start align-items-center" style={{ border: "1px solid #56baed" }}>
                                                        <text key={index}>{schedual.name}</text>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>
                                    <Button
                                        className="align-self-center"
                                        variant="primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addSchedual();
                                        }}
                                    >Create New</Button>
                                </div>

                            </Col>
                            <Col xs='8'>
                                {
                                    openSidePanel
                                        ?
                                        <Row>
                                            <Col xs='6'>
                                                <div>
                                                    <p>
                                                        Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
                                                    </p>
                                                    <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
                                                </div>
                                                <div className="pt-3">
                                                    <TimePicker
                                                        className="w-100"
                                                        onChange={setTime}
                                                        value={time}
                                                    />
                                                </div>

                                            </Col>
                                            <Col xs='6'>
                                                <Form className="w-100">
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Schedual Name</Form.Label>
                                                        <Form.Control
                                                            onChange={(e) => {
                                                                e.preventDefault();
                                                                setName(e.target.value)
                                                            }}
                                                            value={name}
                                                            className="w-100" type="text" placeholder="Enter schedual name" />
                                                        <Form.Text className="text-muted">
                                                            Name to identify the Schedual
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Form>
                                                <div>
                                                    <Select
                                                        value={selectedUser}
                                                        onChange={handleChange}
                                                        options={options}
                                                    />
                                                </div>
                                                <div className="pt-3">
                                                    <Button
                                                        variant="success"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedUsers(selectedUsers => [...selectedUsers, selectedUser])
                                                            console.log(selectedUsers)
                                                        }}
                                                    >Add</Button>
                                                </div>
                                                <div>
                                                    {
                                                        selectedUsers.length > 0 &&
                                                        selectedUsers.map((user, index) => {
                                                            return (
                                                                <div className="mt-2 p-2 w-100 d-flex justify-content-between align-items-center" style={{ border: "1px solid #56baed" }}>
                                                                    <text key={index}>{user.value}</text>
                                                                    <Button
                                                                        variant="danger"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            console.log("removed")
                                                                        }}
                                                                    >Remove</Button>
                                                                </div>
                                                            )

                                                        })
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                        :
                                        null
                                }
                            </Col>
                        </Row>

                    }
                    {
                        changePage === 1 &&
                        <div className="w-100 " style={{overflowY: "scroll"}}>
                            <Timetable className="calender" events={events} />
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
