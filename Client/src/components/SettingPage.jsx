import React from 'react'
import SchoolLevelPage from './SchoolLevelPage';
import '../styles/SettingPage.css'
import { MdAppRegistration } from 'react-icons/md'

function SettingPage() {

    return (
        <section className="setting">
            <div className="cards">
                <div className="card active">
                    <div className="card-info">
                        <div className="number">
                            5
                        </div>
                        <div className="title">
                            School Level
                        </div>
                    </div>
                    <MdAppRegistration />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            3
                        </div>
                        <div className="title">
                            Faculty
                        </div>
                    </div>
                    <MdAppRegistration />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            12
                        </div>
                        <div className="title">
                            Group
                        </div>
                    </div>
                    <MdAppRegistration />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            17
                        </div>
                        <div className="title">
                            Module
                        </div>
                    </div>
                    <MdAppRegistration />
                </div>
            </div>
            <SchoolLevelPage />
        </section>
    )
}

export default SettingPage
