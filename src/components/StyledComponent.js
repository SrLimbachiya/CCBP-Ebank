import styled from 'styled-components'

const login = {
  borderRadius: '40px',
}

export const LoginMain = styled.div`
  background-color: #152850;
  height: 100vh;
  width: 100vw;
  padding-top: 110px;
`

export const LoginFormContainer = styled.div`
  background-color: #e0eefe;
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 600px;
  border-radius: ${login.borderRadius};
  @media (max-width: 1240px) {
    width: 80%;
  }
`

export const LoginImg = styled.img`
  height: 360px;
  width: 45%;
  margin: 45px;
`

export const LoginForm = styled.form`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 25px;
  border-radius: ${login.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FormHeading = styled.h1`
  color: #183b56;
  font-size: 35px;
  margin-bottom: 20px;
  font-weight: 600;
`

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #5a7184;
  margin-bottom: 8px;
`

export const FormInput = styled.input`
  height: 50px;
  border-radius: 8px;
  margin-bottom: 22px;
  padding: 10px;
  font-size: 15px;
  border: solid 1px #c3cad9;
`

export const SubmitBtn = styled.button`
  height: 45px;
  background-color: #1565d8;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  margin-top: 15px;
`
export const LoginError = styled.p`
  color: #ff0b37;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`
export const HomeMain = styled.div`
  background-color: #152850;
  height: 100vh;
  width: 100vw;
`
export const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 35px 150px;
`
export const LogoutBtn = styled.button`
  width: 120px;
  height: 40px;
  border: solid 1px #ffffff;
  background-color: transparent;
  font-size: 15px;
  color: #ffffff;
`

export const HomeDataContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeCardImg = styled.img`
  width: 650px;
`

export const HomeHeading = styled.h1`
  color: #ffffff;
  font-size: 51px;
  margin-bottom: 30px;
`
