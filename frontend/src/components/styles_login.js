import styled from 'styled-components'

export const H1 = styled.h1`
font-size: 2rem;
margin-bottom: 0;
color: #F3EFCC;
`

export const H2 = styled.h2`
font-size: 1rem;
margin-top: 0.5rem;
color: #F3EFCC;
`

export const PageWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 300px;
background-color: #406343;
border-radius: 10px;
// padding: 20px;
margin:  10rem auto;
padding: 2rem;
}
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

export const Form = styled.form`
width: 100%;
padding-top: 1rem;
`

export const Radios = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
align-items: center;
`

export const Radiowrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 0.5rem;
background-color: #F3EFCC;;
height: 32px;
border-radius: 8px;
width: 100%;
`

export const RadioButton = styled.input`
margin-right: 0.5rem;
margin-top: 0;
`

export const Input = styled.input`
border-radius: 8px;
font-family: Roboto, sans-serif;
font-size: 1rem;
font-weight: 400;
text-decoration: inherit;
text-transform: inherit;
box-sizing: border-box;
width: 100%;
height: 3rem;
margin-bottom: 1rem;
border: 1px solid #F3EFCC;;
background-color: inherit;
outline: none;
:focus {
  ::placeholder {
    opacity: 0;
  }
  padding: 1rem;
  background-color: #F3EFCC;
  border-bottom: 2px solid indigo;
  ::placeholder {
    color: #1a1a1a;
  }
  :focus + label {
    padding: 1rem;
    bottom: 20px;
    opacity: 1;
    color: #1a1a1a;
    font-size: 12px;
    z-index: 1;
  }
}
`

export const Label = styled.label`
width: 100%;
transition: 0.2s;
font-family: Roboto, sans-serif;
font-size: 1rem;
font-weight: 400;
text-decoration: inherit;
text-transform: inherit;
margin-bottom: 0.5rem;
color: #F3EFCC;
`

export const Radiolabel = styled.label`
width: 100%;
color: #1a1a1a;
transition: 0.2s;
font-family: Roboto, sans-serif;
font-size: 1rem;
font-weight: 400;
text-decoration: inherit;
text-transform: inherit;
margin-bottom: 0;
`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;
`

export const Button = styled.button`
display: inline-block;
padding: 1rem;
border-radius: 8px;
text-decoration: none;
color: #ffffff;
transition: 0.4s;
border: none;
width: 100%;
background-color: #32502E;
:hover {
  background-color: #ECE7B4;
  color: #1a1a1a;
}
`