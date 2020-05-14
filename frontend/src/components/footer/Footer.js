import React, { Component } from 'react';
import {FooterBox,CopyRight,A,Story} from './style'
class Footer extends Component {
    render() {
        return (
            <FooterBox> 
             <Story>
                <h4>A Note From the Developers</h4>
                Thank you so much for taking the time to look at our work. Each of us have put a lot of time into this project as well as several others, and we would love to answer any questions you might have about them. Feel free to contact and connect with us on LinkedIn and check out our other projects!
            </Story>
               
            <CopyRight>
                    CopyRight <i className="far fa-copyright"></i> A Team Project From <A href='https://github.com/AlvinZhao2020'>Alvin Zhao</A>,<A> Eric Hsieh</A>, <A>Javier Castro</A>, <A>Joseph Deng</A>
            </CopyRight>
            </FooterBox>
        );
    }
}

export default Footer;