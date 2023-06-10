import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './start.css'
import Tooltip from '../components/Tooltip'
import Button from '../components/Button'

import User from '../contexts/User'

export default observer(() => {
    const userContext = React.useContext(User)

    // if (!userContext.userState) {
    //     return (
    //     <div className="container">
    //         Loading...
    //     </div>
    //     )
    // }

    return (
        <>
            <div className="bg">
                <img
                    src={require('../../public/hummingbird.svg')}
                    alt="hummingbird at a flower"
                />
            </div>
            <div className="content">
                <div style={{ fontSize: '70px', fontWeight: '600' }}>
                    Welcome to Beyond Resume
                </div>
                <div className="attester">
                </div>
                <p>
                    Creating an account will allow you to attest changes in your resume and generate a proof of that. <Tooltip text="Attesters define their own data systems and are able to attest to users, giving them data." />
                </p>

                <div className="join">
                    {!userContext.hasSignedUp ? (
                        <Button
                            onClick={() => {
                                if (!userContext.userState) return
                                return userContext.signup()
                            }}
                        >
                            {userContext.userState ? 'Create Account' : 'Initializing...'}
                            <span style={{ marginLeft: '12px' }}>
                                <img
                                    src={require('../../public/arrow.svg')}
                                    alt="right arrow"
                                />
                            </span>
                        </Button>
                    ) : (
                        <div>
                            <p
                                style={{
                                    fontWeight: '400',
                                    lineHeight: '.5em',
                                }}
                            >
                                USER ADDED!
                            </p>
                            <Link to="/dashboard">
                                <Button>
                                    Dashboard
                                    <span style={{ marginLeft: '12px' }}>
                                        <img
                                            src={require('../../public/arrow.svg')}
                                            alt="right arrow"
                                        />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
})
