import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOff} from '../../redux/reducers/auth'

// Primefaces
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

export default function Auth() {
    
    // Redux
    const dispatch = useDispatch()

    // Module States
    const [user, setUser] = React.useState({
        email: null,
        password: null
    })

    return (
        <>
            <div className="flex align-items-center justify-content-center" style={{ padding: '50px'}}>
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create now!</a>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3"
                            onChange={(e) => {
                                setUser({
                                    ...user,
                                    email: e.target.value
                                })
                            }}
                        />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password" type="password" placeholder="Password" className="w-full mb-3"
                            onChange={(e) => {
                                setUser({
                                    ...user,
                                    password: e.target.value
                                })
                            }}
                        />

                        {/*
                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                        </div>
                        */}

                        <Button label="Sign In" icon="pi pi-sign-in" className="w-full" 
                            onClick={() => {
                                dispatch(logIn(user))
                            }} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}