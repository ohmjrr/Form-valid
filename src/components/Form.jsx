import React from 'react'
import './Form.css'
import { useState } from 'react'
import { Heading } from '@chakra-ui/react'

function Form() {
    const [userName , setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const [errUserName,setErrUserName] = useState('')
    const [errEmail,setErrEmail] = useState('')
    const [errPassword,setErrPassword] = useState('')
    const [errRePassword,setErrRepassword] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [rePasswordColor,setRePasswordColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    

    const validateForm = (e) =>{
        e.preventDefault()

        if (userName.length > 8) {
            setErrUserName('')
            setUserNameColor('green')
        }else{
            setErrUserName('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร')
            setUserNameColor('red')
        }
        if (email.includes('@')) {
            setErrEmail('')
            setEmailColor('green')
        } else {
            setErrEmail('ชื่ออีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }
        if (password.length > 8) {
            setErrPassword('')
            setPasswordColor('green')
        } else {
            setErrPassword('ป้อนหรัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }
        if (rePassword != '' && rePassword === password) {
            setErrRepassword('')
            setRePasswordColor('green')
        } else {
            setErrRepassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red')
        }
    }


  return (
    <div className="container">
        <form className="form" onSubmit={validateForm}>
            <Heading>แบบฟอร์มลงทะเบียน</Heading>
            <div className="con-form">
                <label>ชื่อผู้ใช้</label>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}} />
                <small>{errUserName}</small>
            </div>
            <div className="con-form">
                <label>อีเมล</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                <small>{errEmail}</small>
            </div>
            <div className="con-form">
                <label>รหัสผ่าน</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                <small>{errPassword}</small>
            </div>
            <div className="con-form">
                <label>ยืนยันรหัสผ่าน</label>
                <input type="password" value={rePassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:rePasswordColor}}/>
                <small>{errRePassword}</small>
            </div>
            <button type='submit'>ลงทะเบียน</button>
        </form>
    </div>
  )
}

export default Form