import styled from 'styled-components';

function Superior(){
    return (
        <>
            <SuperiorNav><IconInstagram><i class="fab fa-instagram"></i></IconInstagram><Text>@nutri.felipehentz</Text></SuperiorNav>
        </>
    );
}
const SuperiorNav = styled.div`
  color: #CCC;
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const IconInstagram = styled.div`
  color: #fff;
  font-size: 30px;
  margin-right: 5px;
  margin-top: 2px;
`;

const Text = styled.span`
  color: #fff;
  font-size: 20px;

`;

export default Superior;